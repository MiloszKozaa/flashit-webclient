import { useEffect, useState } from 'react';
import { folderModel } from '../../../models/folder/folderModel';
import './DeckCreator.css';
import { CallApi } from '../../../services/api/apiClient';
import NativeLanguage from './NativeLanguage';
import LearningLanguage from './LearningLanguage';
import DeckName from './DeckName';
import { folderSendModel } from '../../../models/folder/folderSendModel';

const DeckCreator = ({ user }: any) => {
  const [formIndex, formIndexSet] = useState(1);
  const [data, dataSet] = useState<folderSendModel>({
    name: '',
    from_lang: '',
    to_lang: '',
  });
  const onSubmit = () => {
    if (data.name !== '' && data.from_lang !== '' && data.to_lang !== '') {
      CallApi(
        'folder',
        'POST',
        {
          name: data.name,
          from_lang: data.from_lang,
          to_lang: data.to_lang,
          owner_id: user.id,
        },
        res => {
          console.log(`success: ${res}`);
        },
        err => {
          console.log(err);
        }
      );
      formIndexSet(1);
      dataSet({
        name: '',
        from_lang: '',
        to_lang: '',
      });
      console.log(data);
    }
  };

  const setDeckData = (data: Partial<folderSendModel>) => {
    dataSet(prev => {
      return { ...prev, ...data };
    });
  };

  const moveFormIndex = () => {
    formIndexSet(prev => {
      return prev + 1;
    });
  };

  return (
    <div>
      {formIndex === 1 ? (
        <NativeLanguage
          {...data}
          setDeckData={setDeckData}
          next={moveFormIndex}
        />
      ) : null}
      {formIndex === 2 ? (
        <LearningLanguage
          {...data}
          setDeckData={setDeckData}
          next={moveFormIndex}
        />
      ) : null}
      {formIndex === 3 ? (
        <DeckName {...data} setDeckData={setDeckData} onSubmit={onSubmit} />
      ) : null}
    </div>
  );
};

export default DeckCreator;
