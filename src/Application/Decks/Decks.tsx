import TabPattern from '../components/TabPattern';
import MainButton from '../components/MainButton';
import './Decks.css';
import { useEffect, useState } from 'react';
import { CallApi } from '../../services/api/apiClient';
import { getFolders } from '../../services/folder/getFolders';
import { folderResponse } from '../../models/folder/folderResponse';
import DeckLink from '../components/DeckLink';

const Decks = () => {
  const [folders, foldersSet] = useState<folderResponse>();

  useEffect(() => {
    getFolders(
      res => foldersSet(res),
      err => {
        console.error(err);
      }
    );
  }, []);

  return (
    <TabPattern header='Your decks'>
      <MainButton endpoint='/decks/creator' name='Create' />
      <div className='deckList_wrapper'>
        {folders ? (
          folders.map((folder, key) => <DeckLink key={key} folder={folder} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </TabPattern>
  );
};

export default Decks;
