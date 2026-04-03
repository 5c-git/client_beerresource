import './Registration.scss';
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import Input from '../Input/Input';

const validationSchema = Yup.object().shape({
  fio: Yup.string().required(),
  email: Yup.string().email().required(),
});

const Registration = ({ submitHandler }) => (
    <section className="Registration">
      <p className="Registration__header">Регистрация</p>
      <Formik
        initialValues={{ fio: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitHandler(values);
        }}
      >
        {({ errors, touched }) => (
          <Form noValidate>
            <Input
              type="text"
              name="fio"
              label="Имя Фамилия"
              isRequired={false}
              placeholder="Введите Фамилию Имя"
              className={`Registration__input${
                errors.fio && touched.fio ? ' Registration__input--error' : ''
              }`}
            />
            <Input
              type="email"
              name="email"
              label="E-mail"
              isRequired={false}
              placeholder="Введите e-mail"
              className={`Registration__input${
                errors.email && touched.email
                  ? ' Registration__input--error'
                  : ''
              }`}
            />
            <button className="button Registration__button" type="submit">
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>

      <p className="Registration__link">
        Нажимая кнопку «Зарегистрироваться», вы соглашаетесь с <a href="/about/privacy.php" target="_blank">политикой конфиденциальности</a> и <a href="/about/agreement.php" target="_blank">пользовательским соглашением</a>.
      </p>
    </section>
);

export default Registration;
