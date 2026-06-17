import React, { useState, useEffect } from "react";
import FormName from "../Form-Name/Form-Name";
import FormEmail from "../Form-Email/Form-Email";
import FormPhone from "../Form-Phone/Form-Phone";
import Modal from "react/components/Modal/Modal";
import Code from "react/components/Code/Code";
import { profileApi } from "api/api";
import Loader from "react/components/Loader/Loader";
import { getPaddingFromBody, getPaddingOnBody } from "utils/utils";

const placeholderEvent = new CustomEvent("PlaceholderEvent", {
  bubbles: true,
});

const FormPersonalData = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [editModePhone, setEditModePhone] = useState(true);
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const link = document
    .querySelector("#alert--confirm-email")
    .content.querySelector(".alert__link");
  link.textContent = `${newEmail}.`;
  link.setAttribute("href", `mailto:${newEmail}`);

  const fetchData = async () => {
    const data = await profileApi.getProfile();
    if (data.status === "success") {
      setName(data.profile.name);
      setEmail(data.profile.email);
      setPhone(data.profile.phone);
    } else {
      setError(data);
    }

    setIsLoading(false);
  };

  const updateName = async (value) => {
    await profileApi.updateName(value);
    setName(value);
  };

  const updateEmail = async (value) => {
    setNewEmail(value);
    await profileApi.updateEmail(value);
    setEmail(newEmail);
  };

  const updatePhone = async (value) => {
    const data = await profileApi.updatePhone(value);
    if (data !== false) {
      setShow(true);
      setNewPhone(value);
    }
  };

  const sendSMS = async (sms) => {
    await profileApi.sendSMS(sms, newPhone, setShow);
    setPhone(newPhone);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (show) {
      getPaddingOnBody();
    } else {
      getPaddingFromBody();
    }
  }, [show]);

  if (error !== null) {
    return (
      <>
        <h2 className="form-lk__title">Личные данные</h2>
        <p className="Organization__contact-header">
          Произошла ошибка загрузки данных.
        </p>
      </>
    );
  }

  return (
    <>
      {show && (
        <Modal
          closeModal={() => {
            setShow(false);
          }}
          className="Modal--sms"
          closeEvent={placeholderEvent}
        >
          <Code
            phoneNumber={newPhone}
            changeAction={() => {
              setPhone("");
              setShow(false);
              setEditModePhone(false);
            }}
            sendAgain={() => {
              updatePhone(newPhone);
            }}
            sendSms={sendSMS}
          />
        </Modal>
      )}

      <h2 className="form-lk__title">Личные данные</h2>
      {isLoading ? (
        <Loader color={"#212F4E"} />
      ) : (
        <>
          <FormName name={name} updateName={updateName} />
          <FormEmail email={email} updateEmail={updateEmail} />
          <FormPhone
            phone={phone}
            editModePhone={editModePhone}
            setEditModePhone={setEditModePhone}
            updatePhone={updatePhone}
          />
        </>
      )}
    </>
  );
};

export default FormPersonalData;
