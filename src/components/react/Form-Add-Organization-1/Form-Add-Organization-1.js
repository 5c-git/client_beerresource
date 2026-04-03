import React, { useEffect, useState } from "react";
import { Formik, Form, FieldArray, getIn, Field } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getPaddingFromBody, getPaddingOnBody } from "../../../utils/utils";

const FormAddOrganization1 = (props) => {
  const { fetchData, dataForm, setDataForm } = props;
  const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;
  const innRegExp = /^[0-9_]{10,12}$/;

  const validationSchema = Yup.object().shape({
    inn: Yup.string()
      .transform((value) => value.replace(/[^\d]/g, ""))
      .matches(innRegExp, "Неправильный ИНН")
      .required("Обязательное поле!"),
    mainFio: Yup.string()
      .required("Обязательное поле!")
      .max(100, "Максимум 100 символов"),
    mainEmail: Yup.string()
      .email("Неправильный email адрес")
      .max(100, "Максимум 100 символов")
      .required("Обязательное поле!"),
    mainPhone: Yup.string()
      .matches(phoneRegExp, "Неправильный телефонный номер")
      .max(20, "Максимум 20 символов")
      .required("Обязательное поле!"),
    mainRole: Yup.array().required().required().min(1, "Обязательное поле!"),
    contacts: Yup.array().of(
      Yup.object().shape({
        fio: Yup.string().required("Обязательное поле!"),
        email: Yup.string()
          .email("Неправильный email адрес")
          .required("Обязательное поле!"),
        phone: Yup.string()
          .matches(phoneRegExp, "Неправильный телефонный номер")
          .required("Обязательное поле!"),
        role: Yup.array().required().required().min(1, "Обязательное поле!"),
      }),
    ),
  });

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        borderRadius: 8,
      },
    },
  };

  const MenuItemStyle = {
    padding: 0,
    paddingLeft: "5px",
    "& .MuiTypography-root": {
      color: "#212f4e",
    },
  };

  const CheckboxStyle = {
    "& .MuiSvgIcon-root": {
      color: "#1f617f",
    },
  };

  const FormControlStyle = {
    margin: 0,
    font: "inherit",
    display: "block",
    boxSizing: "border-box",
    minWidth: "100%",
    width: "auto",
    "& .MuiInputLabel-root": {
      color: "#212f4e",
      "&.Mui-focused": {
        color: "#212f4e",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { border: "1px solid #d6dfe4" },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": { border: "1px solid #d6dfe4" },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": { border: "1px solid #d6dfe4" },
    },
  };

  const SelectStyle = {
    borderRadius: 2,
    boxSizing: "border-box",
    display: "flex",
    minWidth: "460px",
    maxWidth: "460px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      minWidth: "100%",
    },
    margin: "5px 0 20px",
    "& .MuiOutlinedInput-input": {
      padding: "13px 14px 12px",
      backgroundColor: "white",
      color: "#212f4e",
      "@media (max-width: 768px)": {
        padding: "11px 14px 11px",
      },
    },
    "& .MuiSvgIcon-root": {
      fill: "#212f4e",
    },
  };

  const rolesData = [
    "Пивовар",
    "Закупщик",
    "Директор",
    "Управляющий",
    "Бухгалтер",
    "Другое",
  ];

  return (
    <section className="add-organization">
      <h2 className="form-lk__title">1/2 Добавление организации</h2>
      <Formik
        initialValues={dataForm.firstStep}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          values.inn = values.inn.replace(/[^\d]/g, "");
          fetchData(values.inn);
          setDataForm((prevDataForm) => ({
            ...prevDataForm,
            firstStep: values,
          }));
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form noValidate>
            <fieldset className="form-lk__fieldset">
              <legend className="form-lk__legend">
                ИНН организации или ИП
              </legend>
              <div className="form-lk__field">
                <label
                  className={
                    errors.inn && touched.inn
                      ? "form-lk__label error"
                      : "form-lk__label"
                  }
                  htmlFor="inn"
                >
                  ИНН организации или ИП
                </label>
                <InputMask
                  mask="999999999999"
                  maskPlaceholder={null}
                  value={values.inn}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <input
                    className={
                      errors.inn && touched.inn
                        ? "form-lk__item error"
                        : "form-lk__item"
                    }
                    id="inn"
                    name="inn"
                    type="text"
                    autoComplete="off"
                    autoCapitalize="off"
                    placeholder="Введите ИНН организации или ИП"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.inn}
                  />
                </InputMask>
              </div>
            </fieldset>

            <fieldset className="form-lk__fieldset">
              <legend className="form-lk__legend">
                Ответственный за организацию
              </legend>
              <div className="form-lk__field">
                <label
                  className={
                    errors.mainFio && touched.mainFio
                      ? "form-lk__label error"
                      : "form-lk__label"
                  }
                  htmlFor="mainFio"
                >
                  Имя Фамилия
                </label>
                <input
                  className={
                    errors.mainFio && touched.mainFio
                      ? "form-lk__item error"
                      : "form-lk__item"
                  }
                  id="mainFio"
                  name="mainFio"
                  type="text"
                  placeholder="Введите Имя Фамилию"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mainFio}
                />
              </div>
              <label
                className={
                  errors.mainEmail && touched.mainEmail
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="mainEmail"
              >
                E-mail
              </label>
              <input
                className={
                  errors.mainEmail && touched.mainEmail
                    ? "form-lk__item error"
                    : "form-lk__item"
                }
                id="mainEmail"
                name="mainEmail"
                type="email"
                placeholder="Введите email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mainEmail}
              />
              <div className="form-lk__field">
                <label
                  className={
                    errors.mainPhone && touched.mainPhone
                      ? "form-lk__label error"
                      : "form-lk__label"
                  }
                  htmlFor="mainPhone"
                >
                  Контактный телефон
                </label>
                <InputMask
                  mask="+7 (999) 999-99-99"
                  maskPlaceholder={null}
                  value={values.mainPhone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <input
                    className={
                      errors.mainPhone && touched.mainPhone
                        ? "form-lk__item error"
                        : "form-lk__item"
                    }
                    id="mainPhone"
                    name="mainPhone"
                    type="phone"
                    placeholder="Введите телефон"
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    value={props.values}
                  />
                </InputMask>
              </div>

              <div className="form-lk__field">
                <FormControl sx={FormControlStyle}>
                  <label
                    className={
                      errors.mainRole && touched.mainRole
                        ? "form-lk__label error"
                        : "form-lk__label"
                    }
                    htmlFor="multiple-checkbox"
                  >
                    Роль
                  </label>
                  <Select
                    sx={SelectStyle}
                    className={
                      errors.mainRole && touched.mainRole
                        ? "form-lk__item form-lk__item--select error"
                        : "form-lk__item form-lk__item--select"
                    }
                    labelId="multiple-checkbox-label"
                    id="multiple-checkbox"
                    name="mainRole"
                    multiple
                    IconComponent={ArrowDropDownIcon}
                    value={values.mainRole}
                    onChange={handleChange}
                    onOpen={() => {
                      getPaddingOnBody();
                    }}
                    onClose={() => {
                      getPaddingFromBody();
                    }}
                    input={<OutlinedInput />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {rolesData.map((name) => (
                      <MenuItem sx={MenuItemStyle} key={name} value={name}>
                        <Checkbox
                          sx={CheckboxStyle}
                          checked={values.mainRole.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </fieldset>

            <FieldArray name="contacts" error>
              {({ remove, push }) => (
                <>
                  {values.contacts.map((member, index) => (
                    <fieldset className="form-lk__fieldset" key={index}>
                      <legend className="form-lk__legend">
                        Дополнительный контакт
                      </legend>
                      <button
                        type="button"
                        className="form-lk__button-delete "
                        onClick={() => remove(index)}
                      >
                        <svg
                          className="form-lk__pencil-icon"
                          width="20"
                          height="20"
                        >
                          <use xlinkHref="#icon-lk-cart"></use>
                        </svg>
                        <span>Удалить контакт</span>
                      </button>

                      <label
                        className={
                          getIn(errors, `contacts[${index}].fio`) &&
                          getIn(touched, `contacts[${index}].fio`)
                            ? "form-lk__label error"
                            : "form-lk__label"
                        }
                        htmlFor={`contacts.${index}.fio`}
                      >
                        Имя Фамилия
                      </label>
                      <Field
                        className={
                          getIn(errors, `contacts[${index}].fio`) &&
                          getIn(touched, `contacts[${index}].fio`)
                            ? "form-lk__item error"
                            : "form-lk__item"
                        }
                        name={`contacts.${index}.fio`}
                        placeholder="Введите Имя Фамилию"
                        type="text"
                      />

                      <label
                        className={
                          getIn(errors, `contacts[${index}].email`) &&
                          getIn(touched, `contacts[${index}].email`)
                            ? "form-lk__label error"
                            : "form-lk__label"
                        }
                        htmlFor={`contacts.${index}.email`}
                      >
                        E-mail
                      </label>
                      <Field
                        className={
                          getIn(errors, `contacts[${index}].email`) &&
                          getIn(touched, `contacts[${index}].email`)
                            ? "form-lk__item error"
                            : "form-lk__item"
                        }
                        name={`contacts.${index}.email`}
                        placeholder="Введите email"
                        type="email"
                      />

                      <label
                        className={
                          getIn(errors, `contacts[${index}].phone`) &&
                          getIn(touched, `contacts[${index}].phone`)
                            ? "form-lk__label error"
                            : "form-lk__label"
                        }
                        htmlFor={`contacts.${index}.phone`}
                      >
                        Контактный телефон
                      </label>
                      <InputMask
                        mask="+7 (999) 999-99-99"
                        maskPlaceholder={null}
                        value={values.contacts.phone}
                        onChange={handleChange}
                      >
                        <Field
                          className={
                            getIn(errors, `contacts[${index}].phone`) &&
                            getIn(touched, `contacts[${index}].phone`)
                              ? "form-lk__item error"
                              : "form-lk__item"
                          }
                          name={`contacts.${index}.phone`}
                          placeholder="Введите телефон"
                          type="phone"
                        />
                      </InputMask>

                      <div className="form-lk__field">
                        <FormControl sx={FormControlStyle}>
                          <label
                            className={
                              getIn(errors, `contacts[${index}].role`) &&
                              getIn(touched, `contacts[${index}].role`)
                                ? "form-lk__label error"
                                : "form-lk__label"
                            }
                            htmlFor={`contacts.${index}.role`}
                          >
                            Роль
                          </label>
                          <Select
                            sx={SelectStyle}
                            className={
                              getIn(errors, `contacts[${index}].role`) &&
                              getIn(touched, `contacts[${index}].role`)
                                ? "form-lk__item form-lk__item--select error"
                                : "form-lk__item form-lk__item--select"
                            }
                            labelId="checkbox-label"
                            id="multiple-checkbox"
                            name={`contacts.${index}.role`}
                            multiple
                            IconComponent={ArrowDropDownIcon}
                            value={values.contacts[index].role}
                            onChange={handleChange}
                            onOpen={() => {
                              getPaddingOnBody();
                            }}
                            onClose={() => {
                              getPaddingFromBody();
                            }}
                            input={<OutlinedInput />}
                            renderValue={(selected) => selected.join(", ")}
                            MenuProps={MenuProps}
                          >
                            {rolesData.map((name) => (
                              <MenuItem
                                sx={MenuItemStyle}
                                key={name}
                                value={name}
                              >
                                <Checkbox
                                  sx={CheckboxStyle}
                                  checked={
                                    values.contacts[index].role.indexOf(name) >
                                    -1
                                  }
                                />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </fieldset>
                  ))}

                  {values.contacts.length < 3 ? (
                    <div className="form-lk__add-contact">
                      <button
                        type="button"
                        className="form-lk__button-add button"
                        onClick={() => {
                          push({
                            fio: "",
                            email: "",
                            phone: "",
                            role: [],
                          });
                        }}
                      >
                        + Добавить контакт
                      </button>
                      <p>
                        Вы можете добавить несколько дополнительных контактных
                        лиц, для более качественного и быстрого взаимодействия
                        по вашему заказу.
                      </p>
                    </div>
                  ) : null}
                </>
              )}
            </FieldArray>

            <div className="form-lk__control">
              <button
                className="form-lk__button-cancel button button--transparent"
                type="button"
                onClick={() => {
                  window.AddOrganizationPopUpProvider.setOpen(false);
                }}
                // href="lk-my-organization.html"
              >
                ✗ Отменить
              </button>
              <button
                className="form-lk__button-forward button"
                // onClick={() => fetchData(values.inn)}
                type="submit"
              >
                Далее →
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormAddOrganization1;
