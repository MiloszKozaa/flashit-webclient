import MainButton from '../components/MainButton';

const Profile = () => {
  return (
    <MainButton
      endpoint='/'
      name='Log Out'
      onClick={() => localStorage.removeItem('x-auth-token')}
    />
  );
};

export default Profile;
