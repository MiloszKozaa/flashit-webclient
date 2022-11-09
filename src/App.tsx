import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './page/Register';
import LogIn from './page/LogIn';
import LandingPage from './page/LandingPage';
import NotFound from './page/NotFound';
import Home from './page/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
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
