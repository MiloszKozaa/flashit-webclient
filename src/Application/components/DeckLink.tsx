import { Link } from 'react-router-dom';
import { CountryList } from '../../models/CountryList';
import { folderModel } from '../../models/folder/folderModel';
import './DeckLink.css';

const DeckLink = ({ folder }: folderModel) => {
  return (
    <div className='deckLink_wrapper'>
      <div style={{ display: 'flex' }}>
        <img
          src={`https://flagcdn.com/${
            CountryList.find(
              country => country.name.toLowerCase() === folder.to_lang
            )?.flag
          }.svg`}
          width={'30'}
          className={'deckLink_image'}
        />
        <div className='deckLink_deckName'>
          <div>{folder.name}</div>
          <div className='deckLink_deckDescription'>
            {folder.to_lang.charAt(0).toUpperCase() + folder.to_lang.slice(1)}
          </div>
        </div>
      </div>
      <Link to={`/decks/:${folder._id}`} className={'deckLink_button'}>
        <img
          src={`${process.env.PUBLIC_URL}/icon/deck_folder/arrow_left.svg`}
        />
      </Link>
    </div>
  );
};

export default DeckLink;
