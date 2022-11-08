import UserInputForm from '../components/UserInputForm';
import FormButton from '../components/FormButton';
import { saveToken } from '../services/tokenServices';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './LogInForm.css';
import { CallApi } from '../services/api/apiClient';
import { TokenModel } from '../models/auth/TokenModel';

const LogInForm = () => {
  const navigator = useNavigate();
  const [loading, loadingSet] = useState(false);
  const [form, formSet] = useState<any>({
    email: '',
    password: '',
  });

  const getData = (data: { email: string; password: string }) => {
    CallApi<TokenModel>('user/login', 'POST', { email: data.email, password: data.password}, (res) => {console.log(res.data.token)}, (err) => {console.log(err)})
    // fetch('https://node-server-ochre.vercel.app/user/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password,
    //   }),
    // })
    //   .then(response => {
    //     loadingSet(false);
    //     console.log(response.text());
    //     return response.text();
    //   })
    //   .then(token => {
    //     saveToken(token);
    //     navigator('/flashit-webclient');
    //     console.log('Success:', token);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  };
  const handleSubmit = (event: any) => {
    if (localStorage.getItem('x-auth-token') !== null) {
      navigator('/flashit-webclient');
    }
    loadingSet(true);
    getData(form);
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
        <FormButton name='Log In' form='LogIn-form' loading={loading} />
      </form>

      <Link to='/flashit-webclient/user/register' className='form_helper'>
        <p>Don't have already account?</p>Sign Up!
      </Link>
    </div>
  );
};

export default LogInForm;
