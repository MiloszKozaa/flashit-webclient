import { Link } from 'react-router-dom';
import './FormLink.css';
const FormLink = ({ url, text, boldText }: any) => {
  return (
    <Link to={url} className='form_helper'>
      <p>{text}</p>
      {boldText}
    </Link>
  );
};

export default FormLink;
