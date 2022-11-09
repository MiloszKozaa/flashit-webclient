import { Link } from 'react-router-dom';

const FlashIt = () => {
  return (
    <>
      <Link to='/user/LogIn'>Log In</Link>
      <Link to='/user/Register'>Sign Up</Link>
      <div className='userInfo'></div>
    </>
  );
};

export default FlashIt;
