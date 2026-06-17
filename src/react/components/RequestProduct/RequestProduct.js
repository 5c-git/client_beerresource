import './RequestProduct.scss';
import { useState, useEffect, createRef } from 'react';
import { Formik, Form } from 'formik';
import Dropzone, { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Checkbox from '../Checkbox/Checkbox';

const RequestProduct = ({ submitHandler, id }) => {
  const MAX_SIZE = 10240000;
  const MAX_FILES = 10;
  const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png'];

  const validationSchema = Yup.object().shape({
    fio: Yup.string().required(),
    email: Yup.string().email().required(),
    text: Yup.string().required(),
    legal: Yup.boolean().oneOf([true]),
  });

  const [isVisibleFileLoad, setVisibleFileLoad] = useState(false);

  const [myFiles, setMyFiles] = useState([]);
  const [isMaxCountCap, setIsMaxCountCap] = useState(false);

  const [myFilesSize, setMyFilesSize] = useState(0);
  const [isMaxSizeCap, setIsMaxSizeCap] = useState(false);

  let totalSize = myFilesSize;

  // Состояния необходимые после сброса формы.
  const requestProductDecorator = () => {
    setVisibleFileLoad(false);
    setMyFiles([]);
    setMyFilesSize(0);
    setIsMaxSizeCap(false);
  };

  const letShowErrorMaxCount = () => {
    if (myFiles.length > MAX_FILES) {
      setIsMaxCountCap(true);
    } else {
      setIsMaxCountCap(false);
    }
  };

  // const letShowErrorMaxSize = () => {
  //   if (totalSize > MAX_SIZE) {
  //     setIsMaxSizeCap(true);
  //   } else {
  //     setIsMaxSizeCap(false);
  //   }
  // };

  function fileValidator(file) {
    const fileName = file.name.toLowerCase();

    if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
      return {
        code: 'wrong-type',
        message: 'Недопустимый файл!',
      };
    }

    // if (file.size > MAX_SIZE) {
    //   return {
    //     code: 'size-too-large',
    //     message: 'Размер файлов не должен превышать 10 МБ!',
    //   };
    // }

    return null;
  }

  const dropzoneRef = createRef();
  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  return (
    <div className='RequestProduct'>
      <div className="RequestProduct__header">
        <h2 className="RequestProduct__title">Задать вопрос</h2>
      </div>
      <Formik
        initialValues={{
          id,
          fio: '',
          email: '',
          text: '',
          files: [],
          legal: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          submitHandler(values, actions.resetForm, requestProductDecorator);
          setIsMaxCountCap(false);
          setIsMaxSizeCap(false);
        }}
      >
        {({
          values, errors, touched, setFieldValue,
        }) => (
          <Form
            className="RequestProduct__form"
            action='#'
            method='post'
            noValidate
          >
            <div className="RequestProduct__field">
              <Input
                type='text'
                name='fio'
                label='Имя Фамилия'
                isRequired={true}
                placeholder='Введите Имя Фамилию'
                className={errors.fio && touched.fio ? 'Input--error' : null}
              />
            </div>
            <div className="RequestProduct__field">
              <Input
                type='email'
                name='email'
                label='E-mail'
                isRequired={true}
                placeholder='Введите e-mail'
                className={errors.email && touched.email ? 'Input--error' : null}
              />
            </div>
            <div className="RequestProduct__field RequestProduct__field--wide">
              <Textarea
                name='text'
                label='Сообщение'
                isRequired={true}
                placeholder='Введите сообщение'
                className={errors.text && touched.text ? 'Textarea--error' : null}
              />
            </div>

            {!isVisibleFileLoad && (
              <div className="RequestProduct__field RequestProduct__field--wide">
                <div className="RequestProduct__file">
                  <button
                    type='button'
                    className="button button--transparent RequestProduct__file-button"
                    onClick={() => setVisibleFileLoad((prevState) => !prevState)}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <use href="#icon-clip"></use>
                    </svg><span>Прикрепить файлы</span>
                  </button>
                  <p className="RequestProduct__file-warning">Допускается не более 10-и файлов в формате .jpeg, .gif, .png. Размер не более 10 MB.</p>
                </div>
              </div>
            )}

            {isVisibleFileLoad && (
              <div className="RequestProduct__field RequestProduct__field--wide">
                <Dropzone
                  ref={dropzoneRef}
                  noClick
                  noKeyboard
                  validator={fileValidator}
                  accept={{ 'image/jpeg': ['.png', '.jpg', '.jpeg', '.gif'] }}
                  onDrop={(acceptedFiles) => {
                    acceptedFiles.forEach((file) => {
                      if (myFiles.findIndex((item) => item.name === file.name) === -1) {
                        if (totalSize + file.size < MAX_SIZE) {
                          totalSize += file.size;
                          setMyFilesSize(totalSize);
                          myFiles.push(file);
                          setIsMaxSizeCap(false);
                        } else {
                          setIsMaxSizeCap(true);
                        }
                      }
                    });
                    letShowErrorMaxCount();
                    setMyFiles(myFiles.slice(0, MAX_FILES));
                    setFieldValue('files', myFiles.slice(0, MAX_FILES));
                  }}
                >
                  {({ getRootProps, getInputProps, fileRejections }) => (
                    <>
                      <div className='RequestProduct__files'>
                        <ul className='RequestProduct__files-list'>
                          {myFiles.map((file) => (
                            <li key={file.path} className='RequestProduct__files-item'>
                              <div className='RequestProduct__files-info'>
                                <p className='RequestProduct__files-name'>{file.path}</p>
                                <p className='RequestProduct__files-size'>{file.size} KB</p>
                              </div>
                              <button
                                type='button'
                                className='RequestProduct__files-delete'
                                onClick={() => {
                                  totalSize -= file.size;
                                  setMyFilesSize(totalSize);

                                  myFiles.splice(myFiles.indexOf(file), 1);
                                  setFieldValue('files', myFiles);
                                  letShowErrorMaxCount();
                                  setIsMaxSizeCap(false);
                                }}
                              >
                                <span></span>
                              </button>
                            </li>
                          ))}
                        </ul>
                        <ul className='RequestProduct__files-list'>
                          {fileRejections.map((item) => (
                            <li key={item.file.path} className='RequestProduct__files-item'>
                              <div className='RequestProduct__files-info'>
                                <p className='RequestProduct__files-name'>{item.file.path}</p>
                                <ul className='RequestProduct__errors'>
                                  {item.errors.map((e) => (
                                    (e.code !== 'file-invalid-type')
                                    && <li key={e.code}>
                                      <p className='RequestProduct__errors-text'>{e.message}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                        {isMaxCountCap && (
                          <ul className='RequestProduct__files-list'>
                            <li className='RequestProduct__files-item'>
                              <p className='RequestProduct__errors-text'>Достигнуто максимальное кол-во файлов!</p>
                            </li>
                          </ul>
                        )}
                        {isMaxSizeCap && (
                          <ul className='RequestProduct__files-list'>
                            <li className='RequestProduct__files-item'>
                              <p className='RequestProduct__errors-text'>Размер файлов не должен превышать 10 МБ!</p>
                            </li>
                          </ul>
                        )}
                      </div>
                      <div {...getRootProps({ className: 'RequestProduct__dropzone' })}>
                        <input {...getInputProps()} />
                        <p className='RequestProduct__dropzone-text'>Перетащите один или несколько файлов в эту область или <button className='RequestProduct__dropzone-button' type='button' onClick={openDialog}>выберите</button> файлы вручную.</p>
                      </div>
                    </>
                  )}
                </Dropzone>
              </div>
            )}
            <div className="RequestProduct__field RequestProduct__field--wide">
              <div className="RequestProduct__terms">
                <div className="RequestProduct__legal">
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
                <button className="RequestProduct__submit button" type="submit">Отправить</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestProduct;
