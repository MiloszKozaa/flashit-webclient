import { Link, NavLink } from 'react-router-dom';
import './NavbarButton.css';

const NavbarButton = ({ endpoint, name, img }: any) => {
  return (
    <div className='navbarButton'>
      <NavLink
        style={({ isActive }) => {
          return { backgroundColor: isActive ? '#39ACE7' : '' };
        }}
        to={endpoint}>
        {!img ? (
          name
        ) : (
          <img src={`${process.env.PUBLIC_URL}/icon/${img}.svg`} alt={name} />
        )}
      </NavLink>
    </div>
  );
};

export default NavbarButton;
