import './RequestSuggest.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import PhoneInput from '../PhoneInput/PhoneInput';
import Textarea from '../Textarea/Textarea';
import Checkbox from '../Checkbox/Checkbox';

const RequestSuggest = ({ submitHandler, id }) => {
  const validationSchema = Yup.object().shape({
    fio: Yup.string().required(),
    email: Yup.string().email().required(),
    text: Yup.string().required(),
    legal: Yup.boolean().oneOf([true]),
  });

  return (
    <div className="RequestSuggest">
      <div className="RequestSuggest__header">
        <h2 className="RequestSuggest__title"><em>Не нашли</em> что искали?</h2>
      </div>
      <Formik
        initialValues={{
          id,
          fio: '',
          email: '',
          text: '',
          legal: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          submitHandler(values, actions.resetForm);
        }}
      >
        {({
          values, errors, touched, handleChange, handleBlur,
        }) => (
          <Form
            className="RequestSuggest__form"
            action='#'
            method='post'
            noValidate
          >
            <div className="RequestSuggest__field">
              <Input
                type='text'
                name='fio'
                label='Имя Фамилия'
                isRequired={true}
                placeholder='Введите Имя Фамилию'
                className={errors.fio && touched.fio ? 'Input--error' : null}
              />
            </div>
            <div className="RequestSuggest__field">
              <Input
                type='email'
                name='email'
                label='E-mail'
                isRequired={true}
                placeholder='Введите e-mail'
                className={errors.email && touched.email ? 'Input--error' : null}
              />
            </div>
            <div className="RequestSuggest__field RequestSuggest__field--wide">
              <Textarea
                name='text'
                label='Сообщение'
                isRequired={true}
                placeholder='Введите сообщение'
                className={errors.text && touched.text ? 'Textarea--error' : null}
              />
            </div>
            <div className="RequestSuggest__field RequestSuggest__field--wide">
              <div className="RequestSuggest__terms">
                <div className="RequestContacts__legal">
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
            <div className="RequestSuggest__field">
              <button className="button" type="submit">Отправить</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestSuggest;
