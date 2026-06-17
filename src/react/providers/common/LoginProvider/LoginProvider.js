import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import Modal from "react/components/Modal/Modal";
import Login from "react/components/Login/Login";
import Code from "react/components/Code/Code";
import Registration from "react/components/Registration/Registration";
import { sendPhone, sendCode, sendRegistration } from "api/LoginApi";
import { getPaddingFromBody, getPaddingOnBody } from "utils/utils";

const defaultState = {
  data: null,
  error: "",
  isLoading: false,
};

const closeEvent = new CustomEvent("ModalLoginClosed", {
  bubbles: true,
});
const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true,
});

const LoginProvider = () => {
  const [openPhone, setOpenPhone] = useState(false);
  const [openSms, setOpenSms] = useState(false);
  const [openRegistraion, setOpenRegistration] = useState(false);

  const [phoneQuery, setPhoneQuery] = useState(defaultState);
  const [smsQuery, setSmsQuery] = useState(defaultState);
  const [registrationQuery, setRegistrationQuery] = useState(defaultState);

  // хак для шапки
  useEffect(() => {
    if (openPhone || openSms || openRegistraion) {
      getPaddingOnBody();
    } else {
      getPaddingFromBody();
    }
  }, [openPhone, openSms, openRegistraion]);

  // показываем ошибки
  useEffect(() => {
    if (phoneQuery.error !== "") {
      document
        .querySelector("#alert--error")
        .content.querySelector(".alert__text").innerHTML = phoneQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setPhoneQuery({ ...phoneQuery, error: "" });
    }

    if (smsQuery.error !== "") {
      document
        .querySelector("#alert--error")
        .content.querySelector(".alert__text").innerHTML = smsQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setSmsQuery({ ...smsQuery, error: "" });
    }

    if (registrationQuery.error !== "") {
      document
        .querySelector("#alert--error")
        .content.querySelector(".alert__text").innerHTML =
        registrationQuery.error;
      window.Corners5ProjectLayout.summonAlert("#alert--error");
      setRegistrationQuery({ ...registrationQuery, error: "" });
    }
  });

  // переход с телефона на смс
  useEffect(() => {
    if (phoneQuery.data !== null) {
      setOpenPhone(false);
      setOpenSms(true);
    }
  }, [phoneQuery.data]);

  // показ успеха смс
  useEffect(() => {
    setOpenSms(false);
    if (smsQuery.data !== null && smsQuery.data.result.openreg === 1) {
      setOpenRegistration(true);
      // window.Corners5ProjectLayout.summonAlert("#alert--mobileSuccess");
    } else if (smsQuery.data !== null) {
      // window.routes5.actions.smsAction();
      window.location.reload();
    }
  }, [smsQuery.data]);

  // показ успеха регистрации
  useEffect(() => {
    if (registrationQuery.data !== null) {
      setOpenRegistration(false);
      document
        .querySelector("#alert--confirm-email")
        .content.querySelector(
          ".alert__text"
        ).innerHTML = `Ссылка для подтверждения отправлена на <a class="alert__link" href='mailto:${registrationQuery.data}'>${registrationQuery.data}.</a>`;
      window.Corners5ProjectLayout.summonAlert("#alert--confirm-email");

      setPhoneQuery(defaultState);
      setSmsQuery(defaultState);
      setRegistrationQuery(defaultState);
    }
  });

  window.LoginProvider = { setOpenPhone, setOpenSms, setOpenRegistration };

  return (
    <section className="LoginProvider">
      {openPhone ? (
        <Modal
          closeModal={() => {
            setOpenPhone(false);
            setPhoneQuery(defaultState);
          }}
          className="Modal--sms"
          closeEvent={closeEvent}
        >
          <Login
            submitHandler={(phone) => {
              sendPhone(phone, setPhoneQuery);
            }}
          />
        </Modal>
      ) : null}

      {openSms ? (
        <Modal
          closeModal={() => {
            setOpenSms(false);
            setSmsQuery(defaultState);
          }}
          className="Modal--sms"
          closeEvent={placeholderEvent}
        >
          <Code
            phoneNumber={phoneQuery.data}
            changeAction={() => {
              setOpenSms(false);
              setOpenPhone(true);
            }}
            sendAgain={() => {
              sendPhone(phoneQuery.data, setPhoneQuery);
            }}
            sendSms={(sms) => {
              sendCode({ phone: phoneQuery.data, sms: sms }, setSmsQuery);
            }}
          />
        </Modal>
      ) : null}

      {openRegistraion ? (
        <Modal
          closeModal={() => {
            setOpenRegistration(false);
            setRegistrationQuery(defaultState);
          }}
          className="Modal--sms"
          closeEvent={placeholderEvent}
        >
          <Registration
            submitHandler={(values) => {
              sendRegistration(
                {
                  phone: phoneQuery.data,
                  fio: values.fio,
                  email: values.email,
                },
                setRegistrationQuery
              );
            }}
          />
        </Modal>
      ) : null}
    </section>
  );
};

const LoginProviderContainer = document.querySelector("#LoginProvider");

if (LoginProviderContainer) {
  createRoot(LoginProviderContainer).render(<LoginProvider />);
}
