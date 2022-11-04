import Input from './Input';
import Brand from './Brand';
import { useState } from 'react';
import './Register.css';

const Register = () => {
  const [form, formSet] = useState<any>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    formSet({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'example@email.com',
      errorMessage: 'It should be a valid email address!',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      pattern: form.password,
      required: true,
    },
  ];

  const onChange = (event: any) => {
    formSet({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className='register_wrapper'>
      <Brand />
      <div className='register'>
        <img src={`${process.env.PUBLIC_URL}/icon/userRegister.svg`} />
        <form onSubmit={handleSubmit}>
          {inputs.map((input: any) => (
            <Input
              key={input.id}
              icon={input.type}
              {...input}
              value={form[input.name]}
              onChange={onChange}
            />
          ))}
          <button className='register_button'>Join Us</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
