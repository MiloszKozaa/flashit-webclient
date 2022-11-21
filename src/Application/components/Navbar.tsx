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
    <>
    {burgerMenu && <div className="darkening"></div>}
      <div className='navbar'>
        <div className='navContent'>
          <div className='navBrand'>
            <Button endpoint='/home' logo={true}>
              <img src={`${process.env.PUBLIC_URL}/icon/navLogo.svg`} />
              <div className='navName'>Flash It</div>
            </Button>
          </div>
          <div className='navActions'>
            <div className='navDesktopLits'>
              <Button endpoint='/home'>Home</Button>
              <Button endpoint='/decks'>Decks</Button>
              <Button endpoint='/link1'>Link</Button>
              <Button endpoint='/link2'>Link</Button>
              <Button endpoint='/profile'>
                <img src={`${process.env.PUBLIC_URL}/icon/profile.svg`} />
              </Button>
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
    </>
  );
};

export default Navbar;
