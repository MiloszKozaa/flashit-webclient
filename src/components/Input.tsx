import { useState } from 'react';
import './Input.css';

const Input = ({
  errorMessage,
  icon,
  pleaceholder,
  onChange,
  ...inputProps
}: any) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className='input_wrapper'>
      <img src={`${process.env.PUBLIC_URL}/icon/${icon}.svg`} alt='' />
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className='line'></span>
      <span className='error_message'>{errorMessage}</span>
    </div>
  );
};

export default Input;
