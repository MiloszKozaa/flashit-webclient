import IntroBrand from '../UserForm/components/IntroBrand';
import RegisterForm from '../UserForm/RegisterForm/RegisterForm';
import './Register.css';

const Register = () => {
  return (
    <div className='register_wrapper'>
      <IntroBrand />
      <RegisterForm />
    </div>
  );
};

export default Register;
