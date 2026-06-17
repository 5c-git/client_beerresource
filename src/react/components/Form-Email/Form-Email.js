import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormEmail = (props) => {
  const emailRegExp = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
  const { email, updateEmail } = props;

  const [editModeEmail, setEditModeEmail] = useState(true);

  const formik = useFormik({
    initialValues: {
      email,
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .matches(emailRegExp, 'Неправильный email адрес')
        .max(100, 'Максимум 100 символов')
        .required('Обязательное поле!'),
    }),

    onSubmit: (values) => {
      if (email !== values.email) {
        updateEmail(values.email);
      }
      setEditModeEmail(true);
    },
  });

  return (
    <>
      <form className='form-personal-data form-lk' onSubmit={formik.handleSubmit}>
        {/* {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null} */}
        <label className={formik.errors.email && formik.touched.email ? 'form-lk__label error' : 'form-lk__label'} htmlFor='email'>Электронная почта<span>*</span></label>
        <input
          className={formik.errors.email && formik.touched.email ? 'form-lk__item error' : 'form-lk__item form-lk__item--limited'}
          id='email'
          name='email'
          type='email'
          placeholder='Введите email'
          disabled={editModeEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {editModeEmail && <button className='form-lk__button-personal form-lk__button-personal--edit' onClick={() => setEditModeEmail(!editModeEmail)}>
          <svg className="form-lk__pencil-icon" width="25" height="25">
            <use xlinkHref="#icon-pencil"></use>
          </svg>
        </button>}
        {!editModeEmail && <button
          className='form-lk__button-personal form-lk__button-personal--save'
          disabled={!formik.isValid && !formik.dirty}
          type='submit'
        ><span>✓&nbsp;</span>Сохранить
        </button>}
      </form>
    </>
  );
};

export default FormEmail;
