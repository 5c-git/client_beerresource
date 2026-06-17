// CDP-драйвер проверки CodeInput (src/react/Code/Code.js).
// Гоняет реальные обработчики компонента в headless Chrome через DevTools Protocol.
const BASE = "http://127.0.0.1:9222";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const targets = await (await fetch(BASE + "/json")).json();
const page = targets.find((t) => t.type === "page" && t.url.includes("about.html"));
if (!page) {
  console.log(JSON.stringify({ fatal: "no about.html page target", targets: targets.map(t=>t.url) }, null, 2));
  process.exit(1);
}

const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
const logs = [];
const exceptions = [];
const netReqs = [];

function send(method, params = {}) {
  return new Promise((res, rej) => {
    const i = ++id;
    pending.set(i, { res, rej });
    ws.send(JSON.stringify({ id: i, method, params }));
  });
}

ws.addEventListener("message", (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    const { res, rej } = pending.get(m.id);
    pending.delete(m.id);
    if (m.error) rej(new Error(JSON.stringify(m.error)));
    else res(m.result);
  } else if (m.method === "Runtime.consoleAPICalled") {
    logs.push(m.params.type + ": " + m.params.args.map((a) => a.value ?? a.description ?? a.unserializableValue ?? "").join(" "));
  } else if (m.method === "Runtime.exceptionThrown") {
    exceptions.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
  } else if (m.method === "Network.requestWillBeSent") {
    netReqs.push(m.params.request.method + " " + m.params.request.url);
  }
});

await new Promise((r) => ws.addEventListener("open", r, { once: true }));
await send("Runtime.enable");
await send("Network.enable");
await send("Page.enable");

async function ev(expression, awaitPromise = false) {
  const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise });
  if (r.exceptionDetails) return { __err: r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description || "") };
  return r.result.value;
}

const vals = `Array.from(document.querySelectorAll('.Code__number input')).map(i=>i.value)`;
const activeIdx = `Array.from(document.querySelectorAll('.Code__number input')).indexOf(document.activeElement)`;
const typeChar = (d) => `(function(){const el=document.activeElement;if(!el||el.tagName!=='INPUT')return {ok:false};const s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set;s.call(el,'${d}');el.dispatchEvent(new Event('input',{bubbles:true}));return {ok:true};})()`;
const resetModal = async () => {
  await ev(`window.LoginProvider.setOpenSms(false)`);
  await sleep(150);
  await ev(`window.LoginProvider.setOpenSms(true)`);
  await sleep(350);
};

const report = {};

// 0. Готовность React + инъекция фейкового бэка
let ready = "no";
for (let i = 0; i < 25; i++) {
  const t = await ev(`typeof window.LoginProvider`);
  if (t === "object") { ready = "yes"; break; }
  await sleep(300);
}
report.reactReady = ready;
report.injectRoutes = await ev(`(function(){window.routes5={login:{requests:{sendCode:{urlLocal:'/__test_submit',urlRemote:'/__test_submit'},sendPhone:{urlLocal:'/__x',urlRemote:'/__x'}}}};return !!window.routes5;})()`);

// 1. Открыть шаг кода
await ev(`window.LoginProvider.setOpenSms(true)`);
await sleep(400);
report.step1_render = {
  header: await ev(`document.querySelector('.Code__header')?.textContent ?? null`),
  inputCount: await ev(`document.querySelectorAll('.Code__number input').length`),
  maskedPhone: await ev(`document.querySelector('.Code__text b')?.textContent ?? null`),
  initialValues: await ev(vals),
};

// 2. Последовательный ввод 1-2-3-4 + фокус-прогресс + onComplete(submit)
netReqs.length = 0;
await resetModal();
await ev(`document.querySelector('.Code__number input').focus()`);
const seq = [];
for (const d of ["1", "2", "3", "4"]) {
  await ev(typeChar(d));
  await sleep(120);
  seq.push({ typed: d, values: await ev(vals), activeIdx: await ev(activeIdx) });
}
await sleep(400);
report.step2_sequential = {
  steps: seq,
  finalValues: await ev(vals),
  submitNetReqs: netReqs.filter((r) => r.includes("__test_submit")),
};

// 3. Backspace: набрать 1,2 (фокус на idx2), Backspace на пустом → чистит idx1, фокус idx1
await resetModal();
await ev(`document.querySelector('.Code__number input').focus()`);
await ev(typeChar("1")); await sleep(100);
await ev(typeChar("2")); await sleep(100);
const beforeBs = { values: await ev(vals), activeIdx: await ev(activeIdx) };
await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Backspace", code: "Backspace", windowsVirtualKeyCode: 8 });
await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Backspace", code: "Backspace", windowsVirtualKeyCode: 8 });
await sleep(200);
report.step3_backspace = {
  beforeBackspace: beforeBs,
  afterBackspace: { values: await ev(vals), activeIdx: await ev(activeIdx) },
};

// 4. Paste '5678' в первую ячейку → раскидать + onComplete
netReqs.length = 0;
await resetModal();
await ev(`(function(){const el=document.querySelectorAll('.Code__number input')[0];el.focus();const dt=new DataTransfer();dt.setData('text','5678');const e=new ClipboardEvent('paste',{clipboardData:dt,bubbles:true,cancelable:true});el.dispatchEvent(e);return true;})()`);
await sleep(400);
report.step4_paste = {
  values: await ev(vals),
  submitNetReqs: netReqs.filter((r) => r.includes("__test_submit")),
};

// 5. Частичная вставка '99' (короче длины) — не должно сабмитить
netReqs.length = 0;
await resetModal();
await ev(`(function(){const el=document.querySelectorAll('.Code__number input')[0];el.focus();const dt=new DataTransfer();dt.setData('text','99');const e=new ClipboardEvent('paste',{clipboardData:dt,bubbles:true,cancelable:true});el.dispatchEvent(e);return true;})()`);
await sleep(300);
report.step5_partialPaste = {
  values: await ev(vals),
  submitNetReqs: netReqs.filter((r) => r.includes("__test_submit")),
};

report.consoleErrors = logs.filter((l) => l.startsWith("error"));
report.pageExceptions = exceptions;

console.log(JSON.stringify(report, null, 2));
ws.close();
process.exit(0);
