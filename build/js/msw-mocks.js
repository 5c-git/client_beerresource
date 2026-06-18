"use strict";
(self["webpackChunkclient_beerresource"] = self["webpackChunkclient_beerresource"] || []).push([[480],{

/***/ 651
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  worker: () => (/* binding */ worker)
});

// EXTERNAL MODULE: ./node_modules/msw/lib/browser/index.mjs + 24 modules
var browser = __webpack_require__(9584);
// EXTERNAL MODULE: ./node_modules/msw/lib/core/delay.mjs + 1 modules
var delay = __webpack_require__(8137);
// EXTERNAL MODULE: ./node_modules/msw/lib/core/HttpResponse.mjs
var HttpResponse = __webpack_require__(4545);
// EXTERNAL MODULE: ./node_modules/msw/lib/core/http.mjs + 14 modules
var http = __webpack_require__(2226);
// EXTERNAL MODULE: ./src/env.js
var env = __webpack_require__(9838);
;// ./src/mocks/data/getProfile.json
const getProfile_namespaceObject = /*#__PURE__*/JSON.parse('{"status":"success","profile":{"name":"Иван Иванов","email":"ivan.ivanov@example.com","phone":"+7 (999) 991-23-45"}}');
;// ./src/mocks/data/updateProfile.json
const updateProfile_namespaceObject = /*#__PURE__*/JSON.parse('{"status":"success","result":{"update":1}}');
;// ./src/mocks/handlers/profile.handlers.js




const updateProfileUrl = "/local/ajax/personal_data.php";
const handleUpdateProfile = async ({ request }) => {
  console.log("[MSW] handled updateProfile:", request.method, request.url);
  await (0,delay/* delay */.cb)(500);
  return HttpResponse/* HttpResponse */.cS.json(updateProfile_namespaceObject);
};
const profileHandlers = [
  http/* http */.L.get(
    `${window.routes5.profile.requests.getProfile[`url${env/* ENV */.K}`]}`,
    async ({ request }) => {
      console.log("[MSW] handled getProfile:", request.url);
      await (0,delay/* delay */.cb)(500);
      return HttpResponse/* HttpResponse */.cS.json(getProfile_namespaceObject);
    }
  ),
  http/* http */.L.put(updateProfileUrl, handleUpdateProfile),
  http/* http */.L.post(updateProfileUrl, handleUpdateProfile)
];

;// ./src/mocks/data/getAddresses.json
const getAddresses_namespaceObject = /*#__PURE__*/JSON.parse('[{"name":"Личные адреса","addresses":{"35":"Российская Федерация, г Москва, ул Арбат, д 1, ","51":"Российская Федерация, г Москва, Глинищевский пер, д 6, кв 65, ","62":"Российская Федерация, г Орехово-Зуево, Набережная, д 7, ","63":"Российская Федерация, г Раменское, ул Свободы, д 6а, подъезд 1, этаж 14","66":"Российская Федерация, г Санкт-Петербург, ул Бухарестская, д 7, ","77":"Российская Федерация, г Павловский Посад, Ястребцова, д 1, ","82":"Российская Федерация, г Зеленоград, ул Лесная, д 5, ","83":"Российская Федерация, г Новосибирск, ул Толстого, д 45, домофон 1987#, "}},{"name":"АО \\"ВИТ\\"","addresses":{"52":"Российская Федерация, г Москва, Софийская наб, д 10, "}},{"name":"ЛАМБИК ООО (Black Head Brew)","addresses":{"43":"Российская Федерация, г Москва, ул Лермонтовская, д 56, "}}]');
;// ./src/mocks/handlers/addresses.handlers.js



const addressesHandlers = [
  // Список адресов доставки (fetchAddresses → setAddresses(response.data))
  http/* http */.L.get(
    `${window.routes5.addresses.requests.getAddresses[`url${env/* ENV */.K}`]}`,
    async ({ request }) => {
      console.log("[MSW] handled getAddresses:", request.url);
      await (0,delay/* delay */.cb)(500);
      return HttpResponse/* HttpResponse */.cS.json(getAddresses_namespaceObject);
    }
  ),
  // Сохранение адресов (sendUpdatedAddresses → setAddresses(response.data), затем reload).
  // Мок статичный — возвращаем тот же список; правки не персистятся (норма для моков).
  http/* http */.L.post(
    `${window.routes5.addresses.requests.updateAddresses[`url${env/* ENV */.K}`]}`,
    async ({ request }) => {
      console.log("[MSW] handled updateAddresses:", request.url);
      await (0,delay/* delay */.cb)(500);
      return HttpResponse/* HttpResponse */.cS.json(getAddresses_namespaceObject);
    }
  )
];

;// ./src/mocks/data/getOrganizations.json
const getOrganizations_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":"25","inn":"5031017878","companyName":"ЛАМБИК ООО (Black Head Brew)","yuraAddress":"142432, Московская обл, Ногинский р-н, 5,5 км, северо-западнее Ямкино с, промышленная зона Ногинск-23, строение 1, участок 3","PostAddress":"142432, Московская обл, Ногинский р-н, 5,5 км, северо-западнее Ямкино с, промышленная зона Ногинск-23, строение 1, участок 3","ogrn":"","kpp":"503101001","bankName":"","bik":"","checkingAccount":"","correspondentAccount":"","meta":{"status":"","message":""}},{"id":"50","inn":"7736207543","companyName":"ООО \\"ЯНДЕКС\\"","yuraAddress":"119021, г Москва, р-н Хамовники, ул Льва Толстого, д 16","PostAddress":"119021, г Москва, р-н Хамовники, ул Льва Толстого, д 16","ogrn":"1027700229193","kpp":"770401001","bankName":"Банк \\"Открытие\\"","bik":"123456789","checkingAccount":"12345678901234567890","correspondentAccount":"30101123456789012345","meta":{"status":"","message":""},"who":"Илья Степанов","contacts":[{"fio":"Алина Кривошеева","email":"AlinaTest@test.ru","phone":"+7 (890) 294-82-86","main":"1","role":["Бухгалтер","Управляющий","Закупщик","Пивовар"]},{"fio":"Илья Степанов","email":"StepanovTest@test.ru","phone":"+7 (820) 468-25-56","main":"","role":["Пивовар"]}]},{"id":"67","inn":"7707083893","companyName":"ПАО СБЕРБАНК","yuraAddress":"117312, г Москва, Академический р-н, ул Вавилова, д 19","PostAddress":"117312, г Москва, Академический р-н, ул Вавилова, д 19","ogrn":"1027700132195","kpp":"773601001","bankName":"баннк","bik":"434343321","checkingAccount":"33333333333333333333","correspondentAccount":"33333333333333333333","meta":{"status":"checking","message":""}},{"id":"70","inn":"7729671176","companyName":"ООО \\"ПЯТЬ УГЛОВ\\"","yuraAddress":"430030, Респ Мордовия, г Саранск, ул Строительная, д 16Б, помещ 206А","PostAddress":"430030, Респ Мордовия, г Саранск, ул Строительная, д 16Б, помещ 206А","ogrn":"5107746036261","kpp":"130001001","bankName":"ПАО Сбербанк","bik":"123456789","checkingAccount":"12345678901236498745","correspondentAccount":"12345678912345678912","meta":{"status":"main","message":""},"who":"Алина Кривошеева","contacts":[{"fio":"Татьяна Владимирова","email":"fff@fff.ru","phone":"+7 (955) 554-44-55","main":"1","role":["Пивовар"]},{"fio":"Алина Кривошеева","email":"dd@dd.ru","phone":"+7 (666) 666-66-66","main":"","role":["Закупщик"]}]},{"id":"79","inn":"7721546864","companyName":"ООО \\"ВАЙЛДБЕРРИЗ\\"","yuraAddress":"142181, Московская обл, г Подольск, деревня Коледино, тер Индустриальный парк Коледино, д 6 стр 1","PostAddress":"142181, Московская обл, г Подольск, деревня Коледино, тер Индустриальный парк Коледино, д 6 стр 1","ogrn":"1067746062449","kpp":"507401001","bankName":"ee","bik":"111111144","checkingAccount":"12321312312313131331","correspondentAccount":"12321321321321312312","meta":{"status":"main","message":""},"who":"Это ответственный","contacts":[{"fio":"Это ответственный","email":"A@t.ru","phone":"+7 (123) 213-21-32","main":"1","role":["Закупщик"]}]},{"id":"87","inn":"4253052543","companyName":"АО \\"ВИТ\\"","yuraAddress":"654079, Кемеровская область - Кузбасс, г Новокузнецк, Куйбышевский р-н, р-н Куйбышевский, ул Невского, д 1А, офис 304","PostAddress":"654079, Кемеровская область - Кузбасс, г Новокузнецк, Куйбышевский р-н, р-н Куйбышевский, ул Невского, д 1А, офис 304","ogrn":"1224200009329","kpp":"425301001","bankName":"33333333 32","bik":"214124214","checkingAccount":"66666666666666666666","correspondentAccount":"44444444444444444444","meta":{"status":"","message":""},"who":"ФИО ответственный","contacts":[{"fio":"ФИО ответственный","email":"sdgs@erh.ru","phone":"+7 (999) 999-99-99","main":"1","role":["Управляющий"]}]},{"id":"88","inn":"7723517121","companyName":"\\"АГАПЕ\\"","yuraAddress":"109559, г Москва, р-н Капотня, ул Верхние Поля, д 35 к 5","PostAddress":"109559, г Москва, р-н Капотня, ул Верхние Поля, д 35 к 5","ogrn":"1047796535874","kpp":"772301001","bankName":"Банк \\"Открытие\\"","bik":"454546556","checkingAccount":"67654545657786765435","correspondentAccount":"17543234567879876543","meta":{"status":"","message":""},"who":"Тест","contacts":[{"fio":"Тест","email":"A@t.ru","phone":"+7 (123) 213-21-23","main":"1","role":["Закупщик"]}]},{"id":"98","inn":"7802772445","companyName":"ООО \\"РХИ\\"","yuraAddress":"121108, г Москва, р-н Фили-Давыдково, ул Ивана Франко, д 8, помещ I ком 6, 6","PostAddress":"121108, г Москва, р-н Фили-Давыдково, ул Ивана Франко, д 8, помещ I ком 6, 6","ogrn":"1117847539083","kpp":"773101001","bankName":"","bik":"","checkingAccount":"","correspondentAccount":"","meta":{"status":"main","message":""},"who":"Андрей Парохин","contacts":[{"fio":"Андрей Парохин","email":"parohin@gmail.com","phone":"+7 (921) 186-74-26","main":"1","role":["Закупщик"]}]},{"id":"121","inn":"7710140679","companyName":"АО \\"ТБАНК\\"","yuraAddress":"127287, г Москва, Савеловский р-н, ул Хуторская 2-я, д 38А стр 26","PostAddress":"127287, г Москва, Савеловский р-н, ул Хуторская 2-я, д 38А стр 26","ogrn":"1027739642281","kpp":"771301001","bankName":"","bik":"","checkingAccount":"","correspondentAccount":"","meta":{"status":"","message":""},"who":"test","contacts":[{"fio":"test","email":"test@mail.ru","phone":"+7 (000) 000-00-00","main":"1","role":["Пивовар"]}]},{"id":"122","inn":"6950202951","companyName":"ООО \\"БИЗНЕСРЕСУРС\\"","yuraAddress":"196240, Г.САНКТ-ПЕТЕРБУРГ, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ НОВОИЗМАЙЛОВСКОЕ, УЛ КУБИНСКАЯ, Д. 75, К. 1, ЛИТЕРА А, ПОМЕЩ. 5-Н, КОМ. 11 ОФИС 411","PostAddress":"196240, Г.САНКТ-ПЕТЕРБУРГ, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ НОВОИЗМАЙЛОВСКОЕ, УЛ КУБИНСКАЯ, Д. 75, К. 1, ЛИТЕРА А, ПОМЕЩ. 5-Н, КОМ. 11 ОФИС 411","ogrn":"1176952001819","kpp":"781001001","bankName":"","bik":"","checkingAccount":"","correspondentAccount":"","meta":{"status":"","message":""},"who":"Андрей Порошин","contacts":[{"fio":"Андрей Порошин","email":"poroshin90@gmail.com","phone":"+7 (999) 999-99-99","main":"1","role":["Закупщик"]}]},{"id":"126","inn":"7801338690","companyName":"ООО \\"ХОФФНЕР\\"","yuraAddress":"199178, г Санкт-Петербург, Василеостровский р-н, линия 12-я В.О., д 15 литера а, помещ 7Н","PostAddress":"199178, г Санкт-Петербург, Василеостровский р-н, линия 12-я В.О., д 15 литера а, помещ 7Н","ogrn":"1177847337843","kpp":"780101001","bankName":"","bik":"","checkingAccount":"","correspondentAccount":"","meta":{"status":"main","message":""},"who":"Ларионов Никита","contacts":[{"fio":"Ларионов Никита","email":"pivovar@khoffner.ru","phone":"+7 (921) 418-49-39","main":"1","role":["Пивовар"]}]}]');
;// ./src/mocks/handlers/organizations.handlers.js



const orgPostHandler = async ({ request }) => {
  console.log("[MSW] handled organizations POST:", request.url);
  await (0,delay/* delay */.cb)(500);
  return HttpResponse/* HttpResponse */.cS.json(getOrganizations_namespaceObject);
};
const organizationsHandlers = [
  // Список организаций (fetchOrganizations → setOrganizations(response.data))
  http/* http */.L.get(
    `${window.routes5.organizations.requests.getOrganizations[`url${env/* ENV */.K}`]}`,
    async ({ request }) => {
      console.log("[MSW] handled getOrganizations:", request.url);
      await (0,delay/* delay */.cb)(500);
      return HttpResponse/* HttpResponse */.cS.json(getOrganizations_namespaceObject);
    }
  ),
  // updateOrganizations и deleteOrganizations имеют одинаковый urlLocal → один POST-хендлер.
  http/* http */.L.post(
    `${window.routes5.organizations.requests.updateOrganizations[`url${env/* ENV */.K}`]}`,
    orgPostHandler
  )
];

;// ./src/mocks/data/subscribe.json
const subscribe_namespaceObject = /*#__PURE__*/JSON.parse('{"status":"success","text":"Вы успешно подписались на рассылку!"}');
;// ./src/mocks/data/successResponse.json
const successResponse_namespaceObject = /*#__PURE__*/JSON.parse('{"status":"success","text":"<b>Заявка отправлена!</b><br> Наш менеджер свяжется с Вами и проконсультирует о дальнейших шагах."}');
;// ./src/mocks/handlers/forms.handlers.js



const feedbackPaths = [
  "/local/ajax/feedback.php",
  // RequestContactsApi (контакты) + RequestSuggestApi (предложить товар)
  "/local/ajax/feedback_partner.php",
  // RequestCooperationApi (сотрудничество)
  "/local/ajax/feedback_question.php",
  // RequestProductApi (вопрос о товаре)
  "/local/ajax/feedback_services.php",
  // RequestServiceApi (услуги)
  "/local/ajax/search_notfound.php"
  // RequestSearchApi (не нашёл в поиске — простая форма обратной связи)
];
const formsHandlers = [
  // Подписка на рассылку (FooterSubscribeApi + SubscribeApi → /subscribe.php).
  // Потребители смотрят только status 200.
  http/* http */.L.post("/local/ajax/subscribe.php", async ({ request }) => {
    console.log("[MSW] handled subscribe:", request.url);
    await (0,delay/* delay */.cb)(500);
    return HttpResponse/* HttpResponse */.cS.json(subscribe_namespaceObject);
  }),
  // Feedback-формы — один паттерн на все.
  ...feedbackPaths.map(
    (path) => http/* http */.L.post(path, async ({ request }) => {
      console.log("[MSW] handled feedback:", request.url);
      await (0,delay/* delay */.cb)(500);
      return HttpResponse/* HttpResponse */.cS.json(successResponse_namespaceObject);
    })
  ),
  // Сохранение новой организации (organizationsApi.addNewOrganization → add_organization.php).
  // Читает только status 200 && data.status !== 'error' — отдаём общий успех.
  http/* http */.L.post("/local/ajax/add_organization.php", async ({ request }) => {
    console.log("[MSW] handled add_organization:", request.url);
    await (0,delay/* delay */.cb)(500);
    return HttpResponse/* HttpResponse */.cS.json(successResponse_namespaceObject);
  })
];

;// ./src/mocks/data/sendPhone.json
const sendPhone_namespaceObject = /*#__PURE__*/JSON.parse('{"status":"success","result":{"sent":1,"timer":60}}');
;// ./src/mocks/data/sendCode.json
const sendCode_namespaceObject = /*#__PURE__*/JSON.parse('{"status":"success","result":{"openreg":1}}');
;// ./src/mocks/data/sendRegistration.json
const sendRegistration_namespaceObject = /*#__PURE__*/JSON.parse('{"status":"success","result":{"created":1}}');
;// ./src/mocks/handlers/login.handlers.js





const loginHandlers = [
  // Ввод телефона. sendPhone читает только data.status === 'success'.
  http/* http */.L.post(
    `${window.routes5.login.requests.sendPhone[`url${env/* ENV */.K}`]}`,
    async ({ request }) => {
      console.log("[MSW] handled sendPhone:", request.url);
      await (0,delay/* delay */.cb)(500);
      return HttpResponse/* HttpResponse */.cS.json(sendPhone_namespaceObject);
    }
  ),
  // Ввод смс-кода. result.openreg === 1 → LoginProvider открывает форму регистрации
  // (новый юзер); иначе reload (существующий вошёл).
  http/* http */.L.post(
    `${window.routes5.login.requests.sendCode[`url${env/* ENV */.K}`]}`,
    async ({ request }) => {
      console.log("[MSW] handled sendCode:", request.url);
      await (0,delay/* delay */.cb)(500);
      return HttpResponse/* HttpResponse */.cS.json(sendCode_namespaceObject);
    }
  ),
  // Регистрация нового юзера (тело {phone, fio, email}). success → LoginProvider
  // показывает алерт подтверждения почты (читает data.email).
  http/* http */.L.post(
    `${window.routes5.login.requests.sendRegistration[`url${env/* ENV */.K}`]}`,
    async ({ request }) => {
      console.log("[MSW] handled sendRegistration:", request.url);
      await (0,delay/* delay */.cb)(500);
      return HttpResponse/* HttpResponse */.cS.json(sendRegistration_namespaceObject);
    }
  )
];

;// ./src/mocks/handlers.js





const handlers = [
  ...profileHandlers,
  ...addressesHandlers,
  ...organizationsHandlers,
  ...formsHandlers,
  ...loginHandlers
];

;// ./src/mocks/browser.js


const worker = (0,browser/* setupWorker */.k)(...handlers);


/***/ }

}]);