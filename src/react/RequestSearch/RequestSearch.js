import './RequestSearch.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import PhoneInput from '../PhoneInput/PhoneInput';
import Checkbox from '../Checkbox/Checkbox';
import FormContacts from '../FormContacts/FormContacts';
import {
  phoneRegExp,
  CONTACTS,
} from '../../utils/utils';

const RequestSearch = ({ submitHandler, id }) => {
  const validationSchema = Yup.object().shape({
    fio: Yup.string().required(),
    phone: Yup.string().matches(phoneRegExp).required(),
    email: Yup.string().email().required(),
    legal: Yup.boolean().oneOf([true]),
  });

  return (
    <div className="RequestSearch">
      <div className="RequestSearch__header">
        <h2 className="RequestSearch__title">Не нашли что искали?</h2>
        <p className="RequestSearch__post-title">Обратитесь к нам, и мы с удовольствием поможем найти нужную вам информацию.</p>
      </div>
      <Formik
        initialValues={{
          id,
          fio: '',
          phone: '',
          email: '',
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
            className="RequestSearch__form"
            action='#'
            method='post'
            noValidate
          >
            <div className="RequestSearch__field">
              <Input
                type='text'
                name='fio'
                label='Имя Фамилия'
                isRequired={true}
                placeholder='Введите Имя Фамилию'
                className={errors.fio && touched.fio ? 'Input--error' : null}
              />
            </div>
            <div className="RequestSearch__field">
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
            <div className="RequestSearch__field">
              <Input
                type='email'
                name='email'
                label='E-mail'
                isRequired={true}
                placeholder='Введите e-mail'
                className={errors.email && touched.email ? 'Input--error' : null}
              />
            </div>
            <div className="RequestSearch__field RequestSearch__field--wide">
              <div className="RequestSearch__terms">
                <div className="RequestSearch__legal">
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
                <button className="RequestSearch__submit button" type="submit">Отправить вопрос</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="RequestSearch__footer">
        <FormContacts contacts={CONTACTS} />
      </div>
    </div>
  );
};

export default RequestSearch;
