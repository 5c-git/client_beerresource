import './Textarea.scss';
import { Field } from 'formik';

const Textarea = ({
  name, className, label, isRequired, isDisabled, placeholder,
}) => (
    <div className={`Textarea${className ? ` ${className}` : ''}`}>
      {label ? <label className={isRequired ? 'Textarea__label Textarea__label--required' : 'Textarea__label'}>{label}</label> : null}
      <Field
        as='textarea'
        autoComplete='off'
        autoCapitalize='off'
        disabled={isDisabled}
        className='Textarea__field'
        name={name}
        placeholder={placeholder}
      />
    </div>
);

export default Textarea;
