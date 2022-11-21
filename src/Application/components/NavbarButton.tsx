import { Link, NavLink } from 'react-router-dom';
import './NavbarButton.css';

const NavbarButton = ({ endpoint, children, logo }: any) => {
  return (
    <div className='navbarButton'>
      <NavLink
        style={({ isActive }) => {
          return { backgroundColor: isActive && !logo ? '#39ACE7' : '' };
        }}
        to={endpoint}>
        {children}
      </NavLink>
    </div>
  );
};

export default NavbarButton;
