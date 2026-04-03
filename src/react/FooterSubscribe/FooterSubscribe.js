import './FooterSubscribe.scss';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';

const FooterSubscribe = ({ submitHandler, id }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    legal: Yup.boolean().oneOf([true]),
  });

  return (
    <Formik
      initialValues={{
        id,
        email: '',
        legal: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        submitHandler(values, actions.resetForm);
      }}
    >
      {({
        values, errors, touched,
      }) => (
        <Form
          className="FooterSubscribe"
          action='#'
          method='post'
          noValidate
        >
          <p className="FooterSubscribe__title">Подписаться на рассылку</p>
          <div className="FooterSubscribe__field">
            <Input
              type='email'
              name='email'
              isRequired={true}
              placeholder='Введите e-mail'
              className={errors.email && touched.email ? 'Input--error' : null}
            />
            <button className="FooterSubscribe__submit" type="submit" aria-label="Подписаться на новости">→</button>
          </div>
          <div className="FooterSubscribe__field">
            <div className="FooterSubscribe__terms">
              <div className="FooterSubscribe__legal">
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
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FooterSubscribe;
