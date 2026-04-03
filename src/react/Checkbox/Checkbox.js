import './Checkbox.scss';
import { Field } from 'formik';

const Checkbox = ({
  type, name, className, toggle, isRequired, isDisabled, placeholder,
}) => (
  <div className={`Checkbox${className ? ` ${className}` : ''}`}>
    <label className='Checkbox__label'>
      <Field
        disabled={isDisabled}
        className={toggle ? 'Checkbox__field Checkbox__field--toggle' : 'Checkbox__field'}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <span className='Checkbox__box'></span>
    </label>
  </div>
);

export default Checkbox;
