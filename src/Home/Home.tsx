import { useEffect, useState } from 'react';
import Decks from '../page/Decks';
import Profile from '../page/Profile';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import { CallApi } from '../services/api/apiClient';
import Navbar from './components/Navbar';

const Home = () => {
  const navigator = useNavigate();
  const [userInfo, userInfoSet] = useState<any | undefined>();

  useEffect(() => {
    if (!localStorage.getItem('x-auth-token')) {
      navigator('/');
    }
  }, []);

  const getInfo = () => {
    CallApi(
      'user',
      'GET',
      null,
      res => {
        console.log(res);
        userInfoSet(res);
      },
      err => {
        console.error('Error:', err);
      }
    );
  };
  return (
    <div className='home'>home content</div>

    // <>
    //   <button
    //     onClick={() => {
    //       localStorage.clear();
    //       navigator('/');
    //     }}>
    //     Log Out
    //   </button>
    //   <button onClick={getInfo}>Get your account info</button>
    //   <div>id: {userInfo?._id}</div>
    //   <div>email: {userInfo?.email}</div>
    //   <div>username: {userInfo?.username}</div>
    //   <div>
    //     <Link to='/home/decks'>Decks</Link>
    //     <Link to='/home/profile'>Profile</Link>
    //   </div>
    //   <Routes>
    //     <Route path='/decks' element={<Decks />} />
    //     <Route path='/profile' element={<Profile />} />
    //   </Routes>
    // </>
  );
};

export default Home;
