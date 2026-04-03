import "./Organization.scss";

import { phoneRegExp } from "../../utils/utils";
import { useEffect, useState } from "react";
import { Formik, Form, FieldArray, getIn } from "formik";
import { MenuItem } from "@mui/material";

import * as Yup from "yup";
import tippy from "tippy.js";
import Input from "../Input/Input";
import PhoneInput from "../PhoneInput/PhoneInput";
import Select from "../Select/Select";
import Warning from "../Warning/Warning";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const validationSchema = Yup.object().shape({
  inn: Yup.string().required(),
  companyName: Yup.string().required(),
  yuraAddress: Yup.string().required(),
  PostAddress: Yup.string().required(),
  ogrn: Yup.string().required(),
  kpp: Yup.string().required(),
  bankName: Yup.string().required(),
  bik: Yup.string().required(),
  checkingAccount: Yup.string().required(),
  correspondentAccount: Yup.string().required(),
  contacts: Yup.array().of(
    Yup.object().shape({
      fio: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string().matches(phoneRegExp).required(),
      role: Yup.string().required(),
    })
  ),
});

const calculateStatus = (type, message) => {
  switch (type) {
    case "main":
      return (
        <p className="Organization__status Organization__status--main">
          <span>Основная</span>
        </p>
      );

    case "fail":
      return (
        <p className="Organization__status Organization__status--failed">
          <span>Проверка не пройдена</span> {message}
        </p>
      );

    case "checking":
      return (
        <p className="Organization__status Organization__status--checking">
          <span>На проверке</span>
        </p>
      );

    default:
      return null;
  }
};

const Organization = ({ organization, unlockOrg, sendOrg, callAlert }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    tippy("[data-tippy-content]", {
      allowHTML: true,
      arrow: false,
      maxWidth: 287,
      animation: "scale-subtle",
    });
  });

  return (
    <section className={`Organization${isOpen ? " Organization--opened" : ""}`}>
      <section className="Organization__constant">
        <section
          className="Organization__meta"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {/* {calculateStatus(organization.meta.status, organization.meta.message)} */}
          <h3 className="Organization__header">{organization.companyName}</h3>
        </section>

        <p className="Organization__who">
          {organization.inn} {organization.who}
        </p>

        <button
          className="Organization__arrow"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <KeyboardArrowDownIcon />
        </button>
      </section>

      {isOpen ? (
        <section className="Organization__dynamic">
          {/* {organization.meta.status === "fail" ||
          organization.meta.status === "checking" ? null : (
            <Warning />
          )} */}

          <Formik
            initialValues={{
              inn: organization.inn,
              companyName: organization.companyName,
              yuraAddress: organization.yuraAddress,
              PostAddress: organization.PostAddress,
              ogrn: organization.ogrn,
              kpp: organization.kpp,
              bankName: organization.bankName,
              bik: organization.bik,
              checkingAccount: organization.checkingAccount,
              correspondentAccount: organization.correspondentAccount,
              contacts: organization.contacts,
            }}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              sendOrg(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form noValidate>
                <FieldArray name="contacts">
                  {({ remove, push }) => (
                    <>
                      {values.contacts.map((member, index) => (
                        <section className="Organization__contact" key={index}>
                          <section className="Organization__contact-navigation">
                            <p className="Organization__contact-header">
                              Ответственный
                            </p>

                            {index !== 0 &&
                            organization.meta.status !== "fail" &&
                            organization.meta.status !== "checking" ? (
                              <button
                                className="Organization__contact-delete"
                                onClick={() => {
                                  remove(index);
                                }}
                              >
                                <svg>
                                  <use href="#icon-trash"></use>
                                </svg>
                                Удалить контакт
                              </button>
                            ) : null}
                          </section>

                          <section className="Organization__member">
                            <Input
                              type="text"
                              name={`contacts[${index}].fio`}
                              label="Имя Фамилия"
                              // isRequired={true}
                              isRequired={false}
                              placeholder="Введите Имя Фамилию"
                              className={`Organization__input${
                                getIn(errors, `contacts[${index}].fio`) &&
                                getIn(touched, `contacts[${index}].fio`)
                                  ? " Organization__input--error"
                                  : ""
                              }`}
                              // isDisabled={
                              //   organization.meta.status === "fail" ||
                              //   organization.meta.status === "checking"
                              //     ? true
                              //     : null
                              // }
                              isDisabled={true}
                            />

                            <Input
                              type="email"
                              name={`contacts[${index}].email`}
                              label="E-mail"
                              // isRequired={true}
                              isRequired={false}
                              className={`Organization__input${
                                getIn(errors, `contacts[${index}].email`) &&
                                getIn(touched, `contacts[${index}].email`)
                                  ? " Organization__input--error"
                                  : ""
                              }`}
                              // isDisabled={
                              //   organization.meta.status === "fail" ||
                              //   organization.meta.status === "checking"
                              //     ? true
                              //     : null
                              // }
                              isDisabled={true}
                            />

                            <PhoneInput
                              name={`contacts[${index}].phone`}
                              onBlur={handleBlur}
                              value={values.contacts[index].phone}
                              onChange={handleChange}
                              label="Контактный телефон"
                              // isRequired={true}
                              isRequired={false}
                              className={`Organization__input${
                                getIn(errors, `contacts[${index}].phone`) &&
                                getIn(touched, `contacts[${index}].phone`)
                                  ? " Organization__input--error"
                                  : ""
                              }`}
                              // isDisabled={
                              //   organization.meta.status === "fail" ||
                              //   organization.meta.status === "checking"
                              //     ? true
                              //     : null
                              // }
                              isDisabled={true}
                            />

                            <Select
                              value={values.contacts[index].role.toString()}
                              name={`contacts[${index}].role`}
                              fieldName="role"
                              onChange={handleChange}
                              label="Роль"
                              // isRequired={true}
                              isRequired={false}
                              className={`Organization__input${
                                getIn(errors, `contacts[${index}].role`) &&
                                getIn(touched, `contacts[${index}].role`)
                                  ? " Organization__input--error"
                                  : ""
                              }`}
                              // isDisabled={
                              //   organization.meta.status === "fail" ||
                              //   organization.meta.status === "checking"
                              //     ? true
                              //     : null
                              // }
                              isDisabled={true}
                            >
                              <MenuItem value="Повар">Повар</MenuItem>
                              <MenuItem value="Закупщик">Закупщик</MenuItem>
                              <MenuItem value="Директор">Директор</MenuItem>
                              <MenuItem value="Управляющий">
                                Управляющий
                              </MenuItem>
                            </Select>
                          </section>
                        </section>
                      ))}

                      {/* {organization.meta.status === "fail" ||
                      organization.meta.status === "checking" ? null : (
                        <section className="Organization__add">
                          <button
                            className="button Organization__add-button"
                            type="button"
                            onClick={() => {
                              push({
                                fio: "",
                                email: "",
                                phone: "",
                                role: "",
                              });
                            }}
                          >
                            + Добавить контакт
                          </button>

                          <p className="Organization__add-text">
                            Вы можете добавить несколько дополнительных
                            контактных лиц, для более качественного и быстрого
                            взаимодействия по вашему заказу.
                          </p>
                        </section>
                      )} */}
                    </>
                  )}
                </FieldArray>

                <section className="Organization__info">
                  <section className="Organization__meta Organization__meta--flex">
                    <h3 className="Organization__contact-header">
                      Организация
                    </h3>

                    {organization.meta.status === "main" ? (
                      <div className="tooltip Organization__tooltip">
                        <p className="Organization__tooltip-text">Основная</p>
                        <button
                          className="tooltip__button"
                          type="button"
                          data-tippy-content="Это основная организация и все цены и скидки в каталоге считаются именно для нее. Если вы хотите сменить основную организацию, то позвоните по номеру 8 888 888-88-88."
                        ></button>
                      </div>
                    ) : null}
                  </section>

                  <section className="Organization__org-inputs">
                    <Input
                      type="text"
                      name="inn"
                      label="ИНН"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.inn && touched.inn
                          ? " Organization__input--error"
                          : ""
                      }`}
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="companyName"
                      label="Название компании или ИП"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.companyName && touched.companyName
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="yuraAddress"
                      label="Юридический адрес"
                      // isRequired={true}
                      // isRequired={false}
                      className={`Organization__input${
                        errors.yuraAddress && touched.yuraAddress
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="PostAddress"
                      label="Почтовый адрес"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.PostAddress && touched.PostAddress
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="ogrn"
                      label="ОГРН"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.ogrn && touched.ogrn
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="kpp"
                      label="КПП"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.kpp && touched.kpp
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="bankName"
                      label="Наименование банка"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.bankName && touched.bankName
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="bik"
                      label="БИК банка"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.bik && touched.bik
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="checkingAccount"
                      label="Расчетный счет"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.checkingAccount && touched.checkingAccount
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />

                    <Input
                      type="text"
                      name="correspondentAccount"
                      label="Кор. счет"
                      // isRequired={true}
                      isRequired={false}
                      className={`Organization__input${
                        errors.correspondentAccount &&
                        touched.correspondentAccount
                          ? " Organization__input--error"
                          : ""
                      }`}
                      // isDisabled={
                      //   organization.meta.status === "fail" ||
                      //   organization.meta.status === "checking"
                      //     ? true
                      //     : null
                      // }
                      isDisabled={true}
                    />
                  </section>
                </section>

                {/* {organization.meta.status !== "fail" ? (
                  <section className="Organization__buttons">
                    {organization.meta.status === "checking" ? (
                      <>
                        <button
                          type="button"
                          className="button button--transparent"
                          onClick={() => {
                            callAlert(organization);
                          }}
                        >
                          <svg>
                            <use href="#icon-trash"></use>
                          </svg>
                          Удалить
                        </button>
                        <button
                          className="button Organization__edit-button"
                          key="notsubmit"
                          type="button"
                          onClick={() => {
                            unlockOrg(organization.inn);
                          }}
                        >
                          <svg>
                            <use href="#icon-pencil"></use>
                          </svg>
                          Редактировать
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="button button--transparent"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          ✗ Отменить
                        </button>
                        <button className="button" key="submit" type="submit">
                          ✓ Сохранить
                        </button>
                      </>
                    )}
                  </section>
                ) : null} */}
              </Form>
            )}
          </Formik>
        </section>
      ) : null}
    </section>
  );
};

export default Organization;
