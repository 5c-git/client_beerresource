import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormName = (props) => {
  const { name, updateName } = props;
  const [editModeName, setEditModeName] = useState(true);

  const formik = useFormik({
    initialValues: {
      name,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(100, 'Максимум 100 символов')
        .required('Обязательное поле!'),
    }),

    onSubmit: (values) => {
      if (name !== values.name) {
        // console.log(JSON.stringify(values, null, 2));
        updateName(values.name);
      }
      setEditModeName(true);
    },
  });

  return (
    <form className='form-personal-data form-lk' onSubmit={formik.handleSubmit}>
      {/* {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null} */}
      <label className={formik.errors.name && formik.touched.name ? 'form-lk__label error' : 'form-lk__label'} htmlFor='name'>Имя Фамилия<span>*</span></label >
      <input
        className={formik.errors.name && formik.touched.name ? 'form-lk__item error' : 'form-lk__item form-lk__item--limited'}
        id='name'
        name='name'
        type='text'
        placeholder='Введите Имя Фамилию'
        disabled={editModeName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {editModeName && <button className='form-lk__button-personal form-lk__button-personal--edit' onClick={() => setEditModeName(!editModeName)}>
        <svg className="form-lk__pencil-icon" width="25" height="25">
          <use xlinkHref="#icon-pencil"></use>
        </svg>
      </button>}
      {!editModeName && <button
        className='form-lk__button-personal form-lk__button-personal--save'
        disabled={!formik.isValid && !formik.dirty}
        onClick={formik.onSubmit}
        type='submit'
      ><span>✓&nbsp;</span>Сохранить
      </button>}
    </form>
  );
};

export default FormName;
