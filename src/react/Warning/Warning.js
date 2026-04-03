import './Warning.scss';
import CloseIcon from '@mui/icons-material/Close';

const calculateType = (type, text) => {

  switch (type) {
    case 'success':
      return {
        className: 'Warning Warning--success',
        message: <p className="Warning__message">{text}</p>,
      };

    case 'error':
      return {
        className: 'Warning Warning--error',
        message: <p className="Warning__message">Проверка не пройдена. Свяжитесь с администратором сайта <a href='tel:+7 (123) 123 34 54'>+7 (123) 123 34 54</a></p>,
      };

    default:
      return {
        className: 'Warning',
        message: <p className="Warning__message">Внимание! После редактирования данных об организации она будет отправления на проверку.</p>,
      };
  }
};

const Warning = ({type, text, index, deleteFn}) => {

  return (
    <section className={calculateType(type, text).className}>
      {type === 'success' ? <button className="Warning__close" type="button" onClick={() => {deleteFn(index)}}><CloseIcon/></button> : null}

      {calculateType(type, text).message}
    </section>
  );
}

export default Warning;
