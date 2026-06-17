import { useEffect } from "react";

export function useWebOTP(formikRef, CODE_LENGTH = 4) {
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

        // Извлекаем только цифры из формата "Код подтверждения Defa: 8561"
        const digits = otp.code.replace(/\D/g, "").slice(0, CODE_LENGTH);

        // Подставляем в поле формы
        formikRef.current.setFieldValue("code", digits);
        formikRef.current.submitForm();
      })
      .catch((err) => {
        console.warn("WebOTP не сработал:", err);
      });

    return () => ac.abort();
  }, [formikRef, CODE_LENGTH]);
}
