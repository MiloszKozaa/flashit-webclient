import { useEffect, useState } from 'react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../Application/components/Navbar';
import HomePage from './Home/Home';
import NotFound from '../page/NotFound';
import { CallApi } from '../services/api/apiClient';
import DeckCreator from './Decks/Creator/DeckCreator';
import Decks from './Decks/Decks';
import Profile from './Profile/Profile';
import './Main.css';
import { UserResponse } from '../models/User/UserResponse';
import { getUserInfo } from '../services/user/getUserInfo';
import { getFolders } from '../services/folder/getFolders';
import { folderResponse } from '../models/folder/folderResponse';

const Home = () => {
  const navigator = useNavigate();
  const [user, userSet] = useState<UserResponse>();
  useEffect(() => {
    getUserInfo(
      res => userSet(res),
      err => {
        console.error(err);
        navigator('/');
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className='contentWrapper'>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/decks' element={<Decks />} />
          <Route path='/decks/creator' element={<DeckCreator user={user} />} />
          
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
