import UserInputForm from '../components/UserInputForm';
import FormButton from '../components/FormButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LogInForm.css';

const LogInForm = () => {
  const [form, formSet] = useState<any>({
    email: '',
    password: '',
  });

  const sendData = () => {};

  const handleSubmit = (event: any) => {
    sendData();
    event.preventDefault();
    formSet({
      email: '',
      password: '',
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
      required: true,
    },
  ];

  const onChange = (event: any) => {
    formSet({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className='LogIn'>
      <img src={`${process.env.PUBLIC_URL}/icon/userRegister.svg`} />
      <form onSubmit={handleSubmit} id='LogIn-form'>
        {inputs.map((input: any) => (
          <UserInputForm
            key={input.id}
            icon={input.type}
            {...input}
            value={form[input.name]}
            onChange={onChange}
          />
        ))}
        <FormButton name='Log In' form='LogIn-form' />
      </form>

      <Link to='/flashit-webclient/user/register' className='form_helper'>
        <p>Don't have already account?</p>Sign Up!
      </Link>
    </div>
  );
};

export default LogInForm;