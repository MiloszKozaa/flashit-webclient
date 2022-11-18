import { Route, Routes } from 'react-router-dom';
import Navbar from '../Home/components/Navbar';
import Home from '../Home/Home';
import NotFound from '../page/NotFound';
import Decks from './Decks';
import './Home.css';

const FlashIt = () => {
  return (
    <>
      <Navbar />
      <div className='contentWrapper'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/decks' element={<Decks />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default FlashIt;
