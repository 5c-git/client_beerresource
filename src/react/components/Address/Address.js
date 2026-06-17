import "./Address.scss";
import { Formik, Form } from "formik";
import { useState } from "react";
import { MenuItem } from "@mui/material";
import * as Yup from "yup";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Select from "../Select/Select";

const schemaPersonal = Yup.object().shape({
  address: Yup.string().required(),
  city: Yup.string().required(),
  street: Yup.string().required(),
  house: Yup.string().required(),
  // flat: Yup.string().required(),
});
const schemaYura = Yup.object().shape({
  address: Yup.string().required(),
  city: Yup.string().required(),
  street: Yup.string().required(),
  house: Yup.string().required(),
  // flat: Yup.string().required(),
  comment: Yup.string().notRequired(),
  // organization: Yup.string().required(),
});

const Address = ({ address, organizations, cancelHandler, submitHandler }) => {
  const [initialValues, setInitialValues] = useState({
    address: address.value ? address.value : "",
    city: address.data.city ? address.data.city : "",
    street: address.data.street_with_type ? address.data.street_with_type : "",
    house: address.data.house ? address.data.house : "",
    flat: address.data.flat ? address.data.flat : "",
    lat: address.data.geo_lat ? address.data.geo_lat : "",
    lon: address.data.geo_lon ? address.data.geo_lon : "",
    entrance: "",
    flatNumber: "",
    floor: "",
    comment: "",
  });

  return (
    <section className="Address">
      <p className="Address__header">Адрес</p>

      <Formik
        initialValues={initialValues}
        validationSchema={
          Object.prototype.hasOwnProperty.call(initialValues, "organization")
            ? schemaYura
            : schemaPersonal
        }
        enableReinitialize={true}
        onSubmit={(values) => {
          submitHandler(values);
        }}
      >
        {({ initialValues, values, errors, touched, handleChange }) => (
          <section className="Address__wrapper">
            <p className="Address__heading">Тип адреса:</p>
            <div className="Address__toggles">
              <button
                className={`Address__toggle ${
                  Object.prototype.hasOwnProperty.call(
                    initialValues,
                    "organization"
                  )
                    ? ""
                    : "Address__toggle--active"
                }`}
                type="button"
                onClick={() => {
                  const newInitialValues = { ...initialValues };
                  newInitialValues.address = values.address;
                  delete newInitialValues.organization;
                  setInitialValues(newInitialValues);
                }}
              >
                Личный
              </button>
              <button
                className={`Address__toggle ${
                  Object.prototype.hasOwnProperty.call(
                    initialValues,
                    "organization"
                  )
                    ? "Address__toggle--active"
                    : ""
                }`}
                type="button"
                onClick={() => {
                  setInitialValues({
                    ...initialValues,
                    organization:
                      organizations.lenght > 0 ? organizations[0].id : "empty",
                    address: values.address,
                  });
                }}
              >
                Организация
              </button>
            </div>

            <Form className="Address__form" noValidate>
              <Input
                type="text"
                name="city"
                label="Город"
                placeholder="Введите город"
                isRequired={true}
                className={`Address__input${
                  errors.city && touched.city ? " Address__input--error" : ""
                }`}
              />

              <Input
                type="text"
                name="street"
                label="Улица"
                placeholder="Введите улицу"
                isRequired={true}
                className={`Address__input${
                  errors.street && touched.street
                    ? " Address__input--error"
                    : ""
                }`}
              />

              <Input
                type="text"
                name="house"
                label="Дом"
                placeholder="Номер дома"
                isRequired={true}
                className={`Address__input${
                  errors.house && touched.house ? " Address__input--error" : ""
                }`}
              />

              <Input
                type="text"
                name="flat"
                label="Квартира/офис"
                placeholder="Номер квартиры"
                className={`Address__input${
                  errors.flat && touched.flat ? " Address__input--error" : ""
                }`}
              />

              <p className="Address__heading">Информация для курьера</p>

              <div className="Address__subgrid">
                <Input
                  type="text"
                  name="entrance"
                  label="Подъезд"
                  placeholder="Номер подъезда"
                  isRequired={false}
                  className={`Address__input${
                    errors.entrance && touched.entrance
                      ? " Address__input--error"
                      : ""
                  }`}
                />

                <Input
                  type="text"
                  name="flatNumber"
                  label="Домофон"
                  placeholder="Код домофона"
                  isRequired={false}
                  className={`Address__input${
                    errors.flatNumber && touched.flatNumber
                      ? " Address__input--error"
                      : ""
                  }`}
                />

                <Input
                  type="text"
                  name="floor"
                  label="Этаж"
                  placeholder="Номер этажа"
                  isRequired={false}
                  className={`Address__input${
                    errors.floor && touched.floor
                      ? " Address__input--error"
                      : ""
                  }`}
                />

                <Textarea
                  type="text"
                  name="comment"
                  label="Комментарий"
                  placeholder="Введите комментарий"
                  className={`Address__input-fullwidth${
                    errors.comment && touched.comment
                      ? " Address__input--error"
                      : ""
                  }`}
                />

                {initialValues.organization !== undefined ? (
                  <Select
                    isModal
                    value={
                      values.organization !== "empty"
                        ? organizations.find(
                            (item) => item.id === values.organization
                          ).companyName
                        : ""
                    }
                    name="organization"
                    onChange={handleChange}
                    placeholder="Выберите организацию"
                    className={`Address__input-fullwidth${
                      errors.organization && touched.organization
                        ? " Address__input--error"
                        : ""
                    }`}
                  >
                    {organizations.map((item, index) => (
                      <MenuItem key={index} value={item.id}>
                        {item.companyName}
                      </MenuItem>
                    ))}
                    <button
                      className="Address__add"
                      type="button"
                      onClick={() => {
                        window.location.replace(
                          `${window.location.origin}/personal/addorganization/`
                        );
                      }}
                    >
                      + Добавить организацию
                    </button>
                  </Select>
                ) : null}
              </div>

              <div className="Address__navigation">
                <button
                  className="button button--transparent Address__button"
                  type="button"
                  onClick={cancelHandler}
                >
                  ✗ Отменить
                </button>
                <button className="button Address__button" type="submit">
                  ✓ Сохранить
                </button>
              </div>
            </Form>
          </section>
        )}
      </Formik>
    </section>
  );
};

export default Address;
