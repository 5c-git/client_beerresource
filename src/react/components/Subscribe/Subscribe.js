import './Subscribe.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';

const Subscribe = ({ submitHandler, id }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    legal: Yup.boolean().oneOf([true]),
  });

  return (
    <div className="Subscribe">
      <div className="Subscribe__header">
        <h2 className="Subscribe__title">Подпишитесь на&nbsp;рассылку! </h2>
      </div>
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
            className="Subscribe__form"
            id="Subscribe-form"
            action='#'
            method='post'
            noValidate
          >
            <div className="Subscribe__fields">
              <p className="Subscribe__post-title">Подпишитесь на&nbsp;новости и&nbsp;получайте самые свежие статьи и&nbsp;рекомендации от&nbsp;наших пивоваров!</p>
              <div className="Subscribe__field">
                <Input
                  type='email'
                  name='email'
                  label='E-mail'
                  isRequired={true}
                  placeholder='Введите e-mail'
                  className={errors.email && touched.email ? 'Input--error' : null}
                />
              </div>
            </div>
            <div className="Subscribe__terms">
              <div className="Subscribe__legal">
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
              <button className="Subscribe__submit button" type="submit">Отправить</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Subscribe;
