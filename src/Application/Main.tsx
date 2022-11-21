import { useEffect, useState } from 'react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../Application/components/Navbar';
import HomePage from './Home/Home';
import NotFound from '../page/NotFound';
import { CallApi } from '../services/api/apiClient';
import DeckCreator from './Decks/Creator/DeckCreator';
import Decks from './Decks/Decks';
import './Main.css';
import { UserResponse } from '../models/User/UserResponse';

const Home = () => {
  const navigator = useNavigate();
  const [user, userSet] = useState<UserResponse>();

  useEffect(() => {
    if (!localStorage.getItem('x-auth-token')) {
      navigator('/');
    }

    CallApi<UserResponse>(
      'user',
      'GET',
      null,
      res => {
        userSet(res);
      },
      err => {}
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
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
