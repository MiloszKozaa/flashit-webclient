import { Link } from 'react-router-dom';
const FlashIt = () => {
  return (
    <>
      <Link to='/flashit-webclient/user/LogIn'>Log In</Link>
      <Link to='/flashit-webclient/user/Register'>Sign Up</Link>
    </>
  );
};

export default FlashIt;
