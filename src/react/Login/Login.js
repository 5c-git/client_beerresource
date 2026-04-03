import "./Login.scss";
import { Formik, Form } from "formik";
import { phoneRegExp } from "../../utils/utils";

import * as Yup from "yup";
import InputPhoneInternational from "../InputPhoneInternational/InputPhoneInternational";
import Checkbox from '../Checkbox/Checkbox';

const validationSchema = Yup.object().shape({
  phone: Yup.string().matches(phoneRegExp).required(),
  legal: Yup.boolean().oneOf([true]),
});

const Login = ({ submitHandler }) => {
  return (
    <section className="Login">
      <p className="Login__header">Вход или регистрация</p>
      <Formik
        initialValues={{
          phone: '',
          legal: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitHandler(values.phone);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleReset,
        }) => (
          <Form noValidate>
            <InputPhoneInternational
              name="phone"
              onBlur={handleBlur}
              value={values.phone}
              onChange={handleChange}
              onReset={handleReset}
              placeholder="Введите номер телефона"
              className={`Login__input${errors.phone && touched.phone ? " Login__input--error" : ""
                }`}
            />
            <button className="button Login__button" type="submit">
              Получить код
            </button>
            <div className="Login__legal">
              <Checkbox
                type='checkbox'
                name='legal'
                toggle={true}
                isRequired={true}
                className={errors.legal && touched.legal ? 'Checkbox--error' : null}
                checked={values.legal}
              />
              <p>Соглашаюсь с <a href="/about/privacy.php" target="_blank">политикой конфиденциальности</a> и <a href="/about/agreement.php" target="_blank">пользовательским соглашением</a>.</p>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Login;
