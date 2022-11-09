import { useState } from 'react';
import './UserInputForm.css';

const Input = ({
  errorMessage,
  icon,
  pleaceholder,
  onChange,
  ...inputProps
}: any) => {
  const [focused, focusedSet] = useState(false);
  const [showPassword, showPasswordSet] = useState(false);

  const handleFocus = () => {
    focusedSet(true);
  };

  return (
    <div className='input_wrapper'>
      <img
        src={`${process.env.PUBLIC_URL}/icon/${icon}.svg`}
        className='input_image'
      />
      <input
        {...inputProps}
        type={
          inputProps.type === 'password'
            ? !showPassword
              ? 'password'
              : 'text'
            : inputProps.type
        }
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && focusedSet(true)
        }
        focused={focused.toString()}
      />
      {inputProps.type === 'password' ? (
        <img
          src={
            !showPassword
              ? `${process.env.PUBLIC_URL}/icon/eye.svg`
              : `${process.env.PUBLIC_URL}/icon/eyeHide.svg`
          }
          className='icon'
          onClick={() => showPasswordSet(!showPassword)}
        />
      ) : null}
      <span className='line'></span>
      <span className='error_message'>{errorMessage}</span>
    </div>
  );
};

export default Input;
