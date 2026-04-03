import "./Code.scss";
import { Formik } from "formik";
import ReactCodeInput from "react-verification-code-input";
import { useState, useEffect, useRef } from "react";

// Хук для автоподстановки кода через WebOTP (Android)
function useWebOTP(formikRef, updateUI, CODE_LENGTH = 4) {
  useEffect(() => {
    if (!("OTPCredential" in window) || !navigator.credentials) return;

    const ac = new AbortController();

    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      })
      .then((otp) => {
        if (!otp?.code || !formikRef.current) return;

        // Извлекаем цифры из сообщения вида "Код подтверждения Defa: 8561"
        const digits = otp.code.replace(/\D/g, "").slice(0, CODE_LENGTH);

        formikRef.current.setFieldValue("code", digits);
        updateUI(digits); // Обновляем ReactCodeInput визуально
        formikRef.current.submitForm();
      })
      .catch((err) => console.warn("WebOTP не сработал:", err));

    return () => ac.abort();
  }, [formikRef, updateUI, CODE_LENGTH]);
}

const getMaskedPhone = (phone) => {
  if (!phone || phone.length < 18) return "";
  return `+7 (***) ***-${phone[13]}${phone[14]}-${phone[16]}${phone[17]}`;
};

const Code = ({ phoneNumber, changeAction, sendAgain, sendSms }) => {
  const [seconds, setSeconds] = useState(60);
  const [codeValue, setCodeValue] = useState(""); // Для ReactCodeInput
  const formikRef = useRef(null);

  // Таймер
  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  // Android WebOTP
  useWebOTP(formikRef, setCodeValue, 4);

  // iOS Safari: скрытое поле
  const handleIOSInput = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (!digits) return;

    setCodeValue(digits); // Обновляем ReactCodeInput визуально
    if (formikRef.current) {
      formikRef.current.setFieldValue("code", digits);
      if (digits.length === 4) formikRef.current.submitForm();
    }
  };

  return (
    <div className="Code">
      <p className="Code__header">Введите код</p>

      <p className="Code__text">
        Мы отправили код подтверждения на номер <b>{getMaskedPhone(phoneNumber)}</b>.
      </p>

      <button className="Code__button" type="button" onClick={changeAction}>
        Изменить
      </button>

      <Formik
        innerRef={formikRef}
        initialValues={{ code: "" }}
        onSubmit={(values) => sendSms(values.code)}
      >
        {({ setFieldValue, submitForm }) => (
          <>
            {/* Скрытое поле для iOS Safari автозаполнения */}
            <input
              type="text"
              autoComplete="one-time-code"
              inputMode="numeric"
              style={{
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                width: 0,
                height: 0,
              }}
              onInput={handleIOSInput}
            />

            {/* ReactCodeInput для UI */}
            <ReactCodeInput
              fields={4}
              value={codeValue}
              onChange={(value) => setCodeValue(value)}
              onComplete={(value) => {
                setFieldValue("code", value);
                submitForm();
              }}
              inputProps={{
                autoComplete: "one-time-code",
                inputMode: "numeric",
              }}
              className="Code__number"
            />
          </>
        )}
      </Formik>

      {seconds === 0 ? (
        <button
          className="Code__button"
          type="button"
          onClick={() => {
            setSeconds(60);
            sendAgain();
          }}
        >
          Получить новый код по SMS
        </button>
      ) : (
        <p className="Code__seconds">
          Получить новый код можно через {seconds} секунд
        </p>
      )}
    </div>
  );
};

export default Code;
