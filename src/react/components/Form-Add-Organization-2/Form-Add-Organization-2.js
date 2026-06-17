import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

const innRegExp = /^[0-9_]{10,12}$/;
const ogrnRegExp = /^[0-9]{15}$/;
const kppBikRegExp = /^[0-9]{9}$/;
const accountRegExp = /^[0-9]{20}$/;

const strictSchema = {
  inn: Yup.string()
    .transform((value) => value.replace(/[^\d]/g, ""))
    .matches(innRegExp, "Неправильный ИНН")
    .required("Обязательное поле!"),
  companyName: Yup.string().required("Обязательное поле!"),
  address: Yup.string().required("Обязательное поле!"),
  addressMailing: Yup.string().required("Обязательное поле!"),
  ogrn: Yup.string()
    // .matches(ogrnRegExp, "Неправильный ОГРН")
    .min(13, "Неправильный ОГРН")
    .max(15, "Неправильный ОГРН")
    .required("Обязательное поле!"),
  kpp: Yup.string().matches(kppBikRegExp, "Неправильный КПП").notRequired(),
  // .required("Обязательное поле!"),

  // bik: Yup.string()
  //   .matches(kppBikRegExp, "Неправильный БИК")
  //   .required("Обязательное поле!"),
  // bank: Yup.string().required("Обязательное поле!"),
  // accountChecking: Yup.string()
  //   .matches(accountRegExp, "Неправильный Счет")
  //   .required("Обязательное поле!"),
  // accountСorrespondent: Yup.string()
  //   .matches(accountRegExp, "Неправильный Счет")
  //   .required("Обязательное поле!"),
};

const freeSchema = {
  inn: Yup.string()
    .transform((value) => value.replace(/[^\d]/g, ""))
    .matches(innRegExp, "Неправильный ИНН")
    .notRequired("Обязательное поле!"),
  companyName: Yup.string().notRequired("Обязательное поле!"),
  address: Yup.string().notRequired("Обязательное поле!"),
  addressMailing: Yup.string().notRequired("Обязательное поле!"),
  ogrn: Yup.string()
    // .matches(ogrnRegExp, "Неправильный ОГРН")
    .min(13, "Неправильный ОГРН")
    .max(15, "Неправильный ОГРН")
    .notRequired("Обязательное поле!"),
  kpp: Yup.string()
    .matches(kppBikRegExp, "Неправильный КПП")
    .notRequired("Обязательное поле!"),
  bik: Yup.string()
    .matches(kppBikRegExp, "Неправильный БИК")
    .notRequired("Обязательное поле!"),
  bank: Yup.string().required("Обязательное поле!"),
  accountChecking: Yup.string()
    .matches(accountRegExp, "Неправильный Счет")
    .notRequired("Обязательное поле!"),
  accountСorrespondent: Yup.string()
    .matches(accountRegExp, "Неправильный Счет")
    .notRequired("Обязательное поле!"),
};

const FormAddOrganization2 = (props) => {
  const { dataForm, setDataForm, addNewOrganization, setStep, existFlag } =
    props;

  const formik = useFormik({
    initialValues: dataForm.secondStep,
    enableReinitialize: true,
    validationSchema: Yup.object(
      existFlag === true ? freeSchema : strictSchema,
    ),

    onSubmit: (values) => {
      values.inn = values.inn.replace(/[^\d]/g, "");
      const data = { ...dataForm, secondStep: values };
      setDataForm((prevDataForm) => ({
        ...prevDataForm,
        secondStep: values,
      }));
      addNewOrganization(data);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h2 className="form-lk__title">2/2 Добавление организации</h2>

      <form noValidate className="form-lk__form" onSubmit={formik.handleSubmit}>
        <fieldset className="form-lk__fieldset form-lk__fieldset--wide">
          <legend className="form-lk__legend">
            Проверьте правильность реквизитов
          </legend>
          <div className="form-lk__container">
            <div className="form-lk__field form-lk__field--narrow">
              {/* {formik.errors.inn && formik.touched.inn ? <div className='error'>{formik.errors.inn}</div> : null} */}
              <label
                className={
                  formik.errors.inn && formik.touched.inn
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="inn"
              >
                ИНН
              </label>
              <InputMask
                mask="999999999999"
                maskPlaceholder={null}
                value={formik.values.inn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={existFlag}
              >
                <input
                  className={
                    formik.errors.inn && formik.touched.inn
                      ? "form-lk__item error"
                      : "form-lk__item"
                  }
                  id="inn"
                  name="inn"
                  type="text"
                  placeholder="Введите ИНН организации или ИП"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.inn}
                />
              </InputMask>
            </div>
            <div className="form-lk__field form-lk__field--narrow">
              {/* {formik.errors.companyName && formik.touched.companyName ? <div className='error'>{formik.errors.companyName}</div> : null} */}
              <label
                className={
                  formik.errors.companyName && formik.touched.companyName
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="companyName"
              >
                Название компании или ИП
              </label>
              <input
                className={
                  formik.errors.companyName && formik.touched.companyName
                    ? "form-lk__item error"
                    : "form-lk__item"
                }
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Введите название компании или ИП"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyName}
                disabled={existFlag}
              />
            </div>
          </div>

          {/* {formik.errors.address && formik.touched.address ? <div className='error'>{formik.errors.address}</div> : null} */}
          <label
            className={
              formik.errors.address && formik.touched.address
                ? "form-lk__label error"
                : "form-lk__label"
            }
            htmlFor="address"
          >
            Юридический адрес
          </label>
          <input
            className={
              formik.errors.address && formik.touched.address
                ? "form-lk__item error"
                : "form-lk__item"
            }
            id="address"
            name="address"
            type="text"
            placeholder="Введите юридический адрес"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            disabled={existFlag}
          />
          {/* {formik.errors.addressMailing && formik.touched.addressMailing ? <div className='error'>{formik.errors.addressMailing}</div> : null} */}
          <label
            className={
              formik.errors.addressMailing && formik.touched.addressMailing
                ? "form-lk__label error"
                : "form-lk__label"
            }
            htmlFor="addressMailing"
          >
            Почтовый адрес
          </label>
          <input
            className={
              formik.errors.addressMailing && formik.touched.addressMailing
                ? "form-lk__item error"
                : "form-lk__item"
            }
            id="addressMailing"
            name="addressMailing"
            type="text"
            placeholder="Введите почтовый адрес"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.addressMailing}
            disabled={existFlag}
          />
          <div className="form-lk__container">
            <div className="form-lk__field form-lk__field--narrow">
              {/* {formik.errors.ogrn && formik.touched.ogrn ? <div className='error'>{formik.errors.ogrn}</div> : null} */}
              <label
                className={
                  formik.errors.ogrn && formik.touched.ogrn
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="ogrn"
              >
                ОГРН
              </label>
              <InputMask
                mask="999999999999999"
                maskPlaceholder={null}
                value={formik.values.ogrn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // disabled={existFlag}
              >
                <input
                  className={
                    formik.errors.ogrn && formik.touched.ogrn
                      ? "form-lk__item error"
                      : "form-lk__item"
                  }
                  id="ogrn"
                  name="ogrn"
                  type="text"
                  placeholder="Введите ОГРН"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ogrn}
                />
              </InputMask>
            </div>
            {/* кпп цифры*/}
            {/* <div className="form-lk__field form-lk__field--narrow">*/}
            {/* {formik.errors.kpp && formik.touched.kpp ? <div className='error'>{formik.errors.kpp}</div> : null} */}
            {/* <label
                className={
                  formik.errors.kpp && formik.touched.kpp
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="kpp"
              >
                КПП
              </label>
              <InputMask
                mask="999999999"
                maskPlaceholder={null}
                value={formik.values.kpp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={existFlag}
              >
                <input
                  className={
                    formik.errors.kpp && formik.touched.kpp
                      ? "form-lk__item error"
                      : "form-lk__item"
                  }
                  id="kpp"
                  name="kpp"
                  type="text"
                  placeholder="Введите КПП"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.kpp}
                />
              </InputMask>*/}
            {/* </div>*/}
            {/* кпп цифры*/}
            <div className="form-lk__field form-lk__field--narrow">
              {/* {formik.errors.companyName && formik.touched.companyName ? <div className='error'>{formik.errors.companyName}</div> : null} */}
              <label
                className={
                  formik.errors.kpp && formik.touched.kpp
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="companyName"
              >
                КПП
              </label>
              <input
                className={
                  formik.errors.kpp && formik.touched.kpp
                    ? "form-lk__item error"
                    : "form-lk__item"
                }
                id="kpp"
                name="kpp"
                type="text"
                placeholder="КПП"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.kpp}
                disabled={existFlag}
              />
            </div>
          </div>
          {/* <div className="form-lk__container">
            <div className="form-lk__field form-lk__field--narrow">
              {formik.errors.bank && formik.touched.bank ? <div className='error'>{formik.errors.bank}</div> : null}
              <label
                className={
                  formik.errors.bank && formik.touched.bank
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="bank"
              >
                Наименование банка
              </label>
              <input
                className={
                  formik.errors.bank && formik.touched.bank
                    ? "form-lk__item error"
                    : "form-lk__item"
                }
                id="bank"
                name="bank"
                type="text"
                placeholder="Введите наименование банка"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bank}
                disabled={existFlag}
              />
            </div>
            <div className="form-lk__field form-lk__field--narrow">
              {formik.errors.bik && formik.touched.bik ? <div className='error'>{formik.errors.bik}</div> : null}
              <label
                className={
                  formik.errors.bik && formik.touched.bik
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="bik"
              >
                БИК
              </label>
              <InputMask
                mask="999999999"
                maskPlaceholder={null}
                value={formik.values.bik}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={existFlag}
              >
                <input
                  className={
                    formik.errors.bik && formik.touched.bik
                      ? "form-lk__item error"
                      : "form-lk__item"
                  }
                  id="bik"
                  name="bik"
                  type="text"
                  placeholder="Введите БИК"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bik}
                />
              </InputMask>
            </div>
          </div>
          <div className="form-lk__container">
            <div className="form-lk__field form-lk__field--narrow">
              {formik.errors.accountChecking && formik.touched.accountChecking ? <div className='error'>{formik.errors.accountChecking}</div> : null}
              <label
                className={
                  formik.errors.accountChecking &&
                  formik.touched.accountChecking
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="accountChecking"
              >
                Расчетный счет
              </label>
              <InputMask
                mask="99999999999999999999"
                maskPlaceholder={null}
                value={formik.values.accountChecking}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={existFlag}
              >
                <input
                  className={
                    formik.errors.accountChecking &&
                    formik.touched.accountChecking
                      ? "form-lk__item error"
                      : "form-lk__item"
                  }
                  id="accountChecking"
                  name="accountChecking"
                  type="text"
                  placeholder="Введите расчетный счет"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.accountChecking}
                />
              </InputMask>
            </div>
            <div className="form-lk__field form-lk__field--narrow">
              {formik.errors.accountСorrespondent && formik.touched.accountСorrespondent ? <div className='error'>{formik.errors.accountСorrespondent}</div> : null}
              <label
                className={
                  formik.errors.accountСorrespondent &&
                  formik.touched.accountСorrespondent
                    ? "form-lk__label error"
                    : "form-lk__label"
                }
                htmlFor="accountСorrespondent"
              >
                Кор. счет
              </label>
              <InputMask
                mask="99999999999999999999"
                maskPlaceholder={null}
                value={formik.values.accountСorrespondent}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={existFlag}
              >
                <input
                  className={
                    formik.errors.accountСorrespondent &&
                    formik.touched.accountСorrespondent
                      ? "form-lk__item error"
                      : "form-lk__item"
                  }
                  id="accountСorrespondent"
                  name="accountСorrespondent"
                  type="text"
                  placeholder="Введите кор. счет"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.accountСorrespondent}
                />
              </InputMask>
            </div>
          </div> */}
        </fieldset>

        {existFlag ? (
          <p className="form-lk__legend">
            Если вы не согласны с данными указанными на экране позвоните по
            телефону или напишите на почту для уточнения данных
          </p>
        ) : null}

        <div className="form-lk__control">
          <button
            className="form-lk__button-back button button--transparent"
            onClick={() => setStep("one")}
          >
            ← Назад
          </button>
          <a
            className="form-lk__button-cancel form-lk__button-cancel--mobile button button--transparent"
            href="lk-my-organization.html"
          >
            ✗ Отменить
          </a>
          <button
            className="form-lk__button-save button"
            // onClick={() => dataAPI.getOrganization(formik.values.inn)}
            onClick={formik.onSubmit}
            type="submit"
          >
            ✓ Сохранить
          </button>
        </div>
      </form>
    </>
  );
};

export default FormAddOrganization2;
