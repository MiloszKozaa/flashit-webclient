import UserInputForm from '../components/UserInputForm';
import FormButton from '../components/FormButton';
import { saveToken } from '../../services/tokenServices';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './LogInForm.css';
import { loginInputForm } from '../../models/form/loginInputForm';
import FormLink from '../components/FormLink';
import { CallApi } from '../../services/api/apiClient';
import { TokenModel } from '../../models/auth/TokenModel';
import FormMessage from '../components/FormMessage';

const LogInForm = () => {
  const [isSuccessMessage, isSuccessMessageSet] = useState({
    success: false,
    error: false,
  });
  const navigator = useNavigate();
  const [form, formSet] = useState<any>({
    email: '',
    password: '',
    loading: false,
  });

  const getData = (data: { email: string; password: string }) => {
    CallApi<TokenModel>(
      'user/login',
      'POST',
      { email: data.email, password: data.password },
      res => {
        saveToken(res.data.token);
        navigator('/home');
        formSet({
          email: '',
          password: '',
          loading: false,
        });
        isSuccessMessageSet({
          success: true,
          error: false,
        });
      },
      err => {
        console.log(err);
        if (localStorage.getItem('x-auth-token') !== null) {
          navigator('/home');
        }
        isSuccessMessageSet({
          success: false,
          error: true,
        });
        formSet({
          ...form,
          loading: false,
        });
      }
    );
  };

  const handleSubmit = (event: any) => {
    getData(form);
    event.preventDefault();
    formSet({
      email: '',
      password: '',
      loading: true,
    });
  };

  const onChange = (event: any) => {
    formSet({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className='LogIn'>
      <img src={`${process.env.PUBLIC_URL}/icon/userRegister.svg`} />
      <FormMessage
        errorText='Incorrect email or password!'
        succesText='Logged in successfully!'
        display={isSuccessMessage}
        onClick={() => isSuccessMessageSet({ success: false, error: false })}
      />
      <form onSubmit={handleSubmit} id='LogIn-form'>
        {loginInputForm.map((input: any) => (
          <UserInputForm
            key={input.id}
            icon={input.type}
            {...input}
            value={form[input.name]}
            onChange={onChange}
          />
        ))}
        <FormButton name='Log In' form='LogIn-form' loading={form.loading} />
      </form>
      <FormLink
        url='/user/register'
        text={`Don't have already account?`}
        boldText='Sign Up!'
      />
    </div>
  );
};

export default LogInForm;
