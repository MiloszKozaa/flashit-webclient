import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './NavbarButton';
import './Navbar.css';

const Navbar = () => {
  const [burgerMenu, burgerMenuSet] = useState(false);

  const showBurgerMenu = () => {
    burgerMenuSet(!burgerMenu);
  };

  return (
    <div className='navbar'>
      <div className='navContent'>
        <div className='navBrand'>
          <img src={`${process.env.PUBLIC_URL}/icon/navLogo.svg`} />
          <div className='navName'>Flash It</div>
        </div>
        <div className='navActions'>
          <div className='navDesktopLits'>
            <Button name='Home' endpoint='/home' />
            <Button name='Decks' endpoint='/decks' />
            <Button name='Link' endpoint='/link1' />
            <Button name='Link' endpoint='/link2' />
            <Button name='Profile' endpoint='/profile' img='profile' />
          </div>
          <div className='burger'>
            <img
              src={`${process.env.PUBLIC_URL}/icon/${
                burgerMenu ? 'close' : 'burger'
              }.svg`}
              onClick={showBurgerMenu}
            />
          </div>
        </div>
      </div>
      <div
        className='navBurgerMenu'
        onClick={showBurgerMenu}
        style={burgerMenu ? { display: 'flex' } : { display: 'none' }}>
        <Link to='/home'>Home</Link>
        <Link to='/decks'>Decks</Link>
        <Link to='/link1'>Link</Link>
        <Link to='/link2'>Link</Link>
        <Link to='/link3'>Link</Link>
      </div>
    </div>
  );
};

export default Navbar;
