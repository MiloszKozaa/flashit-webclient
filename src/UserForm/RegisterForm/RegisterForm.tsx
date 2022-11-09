import UserInputForm from '../components/UserInputForm';
import FormButton from '../components/FormButton';
import FormMessage from '../components/FormMessage';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './RegisterForm.css';
import FormLink from '../components/FormLink';
import { registerInputForms } from '../../models/form/registerInputForms';
import { CallApi } from '../../services/api/apiClient';

const RegisterForm = () => {
  const [isSuccessMessage, isSuccessMessageSet] = useState({
    success: false,
    error: false,
  });
  const [form, formSet] = useState<any>({
    email: '',
    password: '',
    confirmPassword: '',
    loading: false,
  });

  const sendData = (data: { email: string; password: string }) => {
    CallApi(
      'user',
      'POST',
      { email: data.email, password: data.password },
      res => {
        console.log(res);
        formSet({
          email: '',
          password: '',
          confirmPassword: '',
          loading: false,
        });
        isSuccessMessageSet({
          success: true,
          error: false,
        });
      },
      err => {
        formSet({
          email: '',
          password: '',
          confirmPassword: '',
          loading: false,
        });
        isSuccessMessageSet({
          success: false,
          error: true,
        });
        console.log(err);
      }
    );
  };

  const handleSubmit = (event: any) => {
    sendData(form);
    event.preventDefault();
    formSet({
      ...form,
      loading: true,
    });
  };

  const onChange = (event: any) => {
    formSet({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className='register'>
      <img src={`${process.env.PUBLIC_URL}/icon/userRegister.svg`} />
      <FormMessage
        errorText='Account is already created!'
        succesText='Account is created successfully!'
        display={isSuccessMessage}
        onClick={() => isSuccessMessageSet({ success: false, error: false })}
      />
      <form onSubmit={handleSubmit} id='register-form'>
        {registerInputForms(form.password).map((input: any) => (
          <UserInputForm
            key={input.id}
            icon={input.type}
            {...input}
            value={form[input.name]}
            onChange={onChange}
          />
        ))}
        <FormButton
          name='Sign Up'
          form='register-form'
          loading={form.loading}
        />
      </form>
      <FormLink
        url='/user/login'
        text={`Have already account?`}
        boldText='Log In!'
      />
    </div>
  );
};

export default RegisterForm;
