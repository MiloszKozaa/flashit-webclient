import UserInputForm from '../components/UserInputForm';
import FormButton from '../components/FormButton';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, formSet] = useState<any>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const sendData = (data: { email: string; password: string }) => {
    fetch('https://node-server-ochre.vercel.app/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then(response => {
        response.json();
        if (response.status === 400) {
          navigate('/flashit-webclient/user/login');
        }
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = (event: any) => {
    sendData(form);
    event.preventDefault();
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
    <div className='register'>
      <img src={`${process.env.PUBLIC_URL}/icon/userRegister.svg`} />
      <form onSubmit={handleSubmit} id='register-form'>
        {inputs.map((input: any) => (
          <UserInputForm
            key={input.id}
            icon={input.type}
            {...input}
            value={form[input.name]}
            onChange={onChange}
          />
        ))}
        <FormButton name='Sign Up' form='register-form' />
      </form>
      <Link to='/flashit-webclient/user/login' className='form_helper'>
        <p>Have already account?</p>Log In!
      </Link>
    </div>
  );
};

export default RegisterForm;
