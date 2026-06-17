import './RequestCooperation.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import PhoneInput from '../PhoneInput/PhoneInput';
import Textarea from '../Textarea/Textarea';
import Checkbox from '../Checkbox/Checkbox';
import FormContacts from '../FormContacts/FormContacts';
import {
  phoneRegExp,
  CONTACTS,
} from 'utils/utils';

const RequestCooperation = ({ submitHandler, id }) => {
  const validationSchema = Yup.object().shape({
    fio: Yup.string().required(),
    phone: Yup.string().matches(phoneRegExp).required(),
    email: Yup.string().email().required(),
    text: Yup.string().required(),
    legal: Yup.boolean().oneOf([true]),
  });

  return (
    <div className="RequestCooperation">
      <div className="RequestCooperation__header">
        <h2 className="RequestCooperation__title">Стать партнером</h2>
      </div>
      <Formik
        initialValues={{
          id,
          fio: '',
          phone: '',
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
            className="RequestCooperation__form"
            action='#'
            method='post'
            noValidate
          >
            <div className="RequestCooperation__field">
              <Input
                type='text'
                name='fio'
                label='Имя Фамилия'
                isRequired={true}
                placeholder='Введите Имя Фамилию'
                className={errors.fio && touched.fio ? 'Input--error' : null}
              />
            </div>
            <div className="RequestCooperation__field">
              <PhoneInput
                name='phone'
                label='Телефон'
                value={values.phone}
                isRequired={true}
                placeholder='+7 (999) 999-99-99'
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? 'PhoneInput--error' : null}
              />
            </div>
            <div className="RequestCooperation__field">
              <Input
                type='email'
                name='email'
                label='E-mail'
                isRequired={true}
                placeholder='Введите e-mail'
                className={errors.email && touched.email ? 'Input--error' : null}
              />
            </div>
            <div className="RequestCooperation__field RequestCooperation__field--wide">
              <Textarea
                name='text'
                label='Сообщение'
                isRequired={true}
                placeholder='Введите сообщение'
                className={errors.text && touched.text ? 'Textarea--error' : null}
              />
            </div>
            <div className="RequestCooperation__field RequestCooperation__field--wide">
              <div className="RequestCooperation__terms">
                <div className="RequestCooperation__legal">
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
                <button className="RequestCooperation__submit button" type="submit">Отправить</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="RequestCooperation__footer">
        <FormContacts contacts={CONTACTS} />
      </div>
    </div>
  );
};

export default RequestCooperation;
