import TabPattern from '../components/TabPattern';
import MainButton from '../components/MainButton';
import './Decks.css';
import { useEffect, useState } from 'react';
import { CallApi } from '../../services/api/apiClient';
import { getFolders } from '../../services/folder/getFolders';
import { folderResponse } from '../../models/folder/folderResponse';

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
      <ul>
        {folders?.map((folder, key) => {
          return (
            <li key={key}>
              {folder.name}, {folder.owner_id}
            </li>
          );
        })}
      </ul>
    </TabPattern>
  );
};

export default Decks;
