import IntroBrand from '../components/IntroBrand';
import RegisterForm from '../RegisterForm/RegisterForm';
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
