import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './page/Register';
import LogIn from './page/LogIn';
import FlashIt from './page/FlashIt';
import NotFound from './page/NotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FlashIt />} />
        <Route path='/user'>
          <Route path='login' element={<LogIn />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
