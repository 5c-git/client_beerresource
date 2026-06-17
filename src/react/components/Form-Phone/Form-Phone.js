import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

const FormPhone = (props) => {
  const { phone, updatePhone, editModePhone, setEditModePhone } = props;
  const phoneRegExp = /^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/;

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(phoneRegExp, 'Неправильный телефонный номер')
      .max(20, 'Максимум 20 символов')
      .required('Обязательное поле!'),
  });

  return (
    <Formik
      initialValues={{
        phone,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (phone !== values.phone) {
          updatePhone(values.phone);
        }
        setEditModePhone(true);
      }}
    >
      {({
        values, errors, touched, handleChange, handleBlur, isValid, dirty,
      }) => (
        <Form className='form-personal-data form-lk'>
          <label className={errors.phone && touched.phone ? 'form-lk__label error' : 'form-lk__label'} htmlFor='phone'>Контактный телефон<span>*</span></label>
          <InputMask
            mask="+7 (999) 999-99-99"
            maskPlaceholder={null}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={editModePhone}
          >
            <input
              className={errors.phone && touched.phone ? 'form-lk__item error' : 'form-lk__item'}
              id='phone'
              name='phone'
              type='phone'
              placeholder='Введите телефон'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
          </InputMask>

          {editModePhone && <button className='form-lk__button-personal form-lk__button-personal--edit' onClick={() => setEditModePhone(!editModePhone)}>
            <svg className="form-lk__pencil-icon" width="25" height="25">
              <use xlinkHref="#icon-pencil"></use>
            </svg>
          </button>}
          {!editModePhone && <button
            className='form-lk__button-personal form-lk__button-personal--save'
            disabled={!isValid && !dirty}
            type='submit'
          ><span>✓&nbsp;</span>Сохранить
          </button>}
        </Form>
      )}
    </Formik >
  );
};

export default FormPhone;
