import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = ({ endpoint, name, onClick }: any) => {
  return (
    <Link to={endpoint}>
      <div className='decks_button' onClick={onClick}>
        {name}
      </div>
    </Link>
  );
};

export default MainButton;
