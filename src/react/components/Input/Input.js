import './Input.scss';
import { Field } from 'formik';

const Input = ({
  type, name, className, label, isRequired, isDisabled, placeholder,
}) => (
    <div className={`Input${className ? ` ${className}` : ''}`}>
      {label ? <label className={isRequired ? 'Input__label Input__label--required' : 'Input__label'}>{label}</label> : null}
      <Field
        autoComplete='off'
        autoCapitalize='off'
        disabled={isDisabled}
        className='Input__field'
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
);

export default Input;
