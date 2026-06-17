import './PhoneInput.scss';
import { InputMask } from '@react-input/mask';

const PhoneInput = ({
  name, value, onChange, onBlur, className, label, placeholder, isRequired, isDisabled,
}) => (
  <div className={`PhoneInput${className ? ` ${className}` : ''}`}>
    {label ? <label className={isRequired ? 'PhoneInput__label PhoneInput__label--required' : 'PhoneInput__label'}>{label}</label> : null}
    <InputMask
      mask="+7 (___) ___-__-__"
      replacement={{ _: /\d/ }}
      minLength="10"
      autoComplete='off'
      autoCapitalize='off'
      className='PhoneInput__field'
      type='tel'
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={isDisabled}
    />
  </div>
);

export default PhoneInput;
