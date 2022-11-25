import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import TabPattern from '../../components/TabPattern';
import { CountryList } from '../../../models/CountryList';
import CountryLink from '../../components/CountryLink';
import { searchName } from '../../../services/search/searchName';
import { folderModel } from '../../../models/folder/folderModel';
import MainButton from '../../components/MainButton';
import './DeckCreator.css';
import { CallApi } from '../../../services/api/apiClient';
import { UserResponse } from '../../../models/User/UserResponse';

const DeckCreator = ({ user }: any) => {
  const [deckForm, deckFormSet] = useState<folderModel>({
    name: '',
    from_lang: '',
    to_lang: '',
  });
  const [countryName, countryNameSet] = useState('');
  const searchCountry = (e: any) => {
    countryNameSet(e.target.value);
  };
  const setName = (e: any) => {
    deckFormSet({ ...deckForm, name: e.target.value });
  };
  const onClick = () => {
    if (deckForm.name !== '') {
      CallApi(
        'folder',
        'POST',
        {
          name: deckForm.name,
          from_lang: deckForm.from_lang,
          to_lang: deckForm.to_lang,
          owner_id: user.id,
        },
        res => {
          console.log(`success: ${res}`);
        },
        err => {
          console.log(err);
        }
      );
      console.log(deckForm);
    }
  };

  return (
    <div>
      {deckForm.from_lang === '' ? (
        <TabPattern header='Step 1' describe='Choose native language'>
          <Input
            type='text'
            value={countryName}
            onChange={searchCountry}
            icon='search'
            placeholder='Find language'
          />
          <div className='countryList_wrapper'>
            {CountryList.filter(country =>
              searchName(countryName, country, country.name)
            ).map((country, index) => (
              <CountryLink
                key={index}
                country={country}
                width='30'
                onClick={() => {
                  deckFormSet({
                    ...deckForm,
                    from_lang: country.name.toLowerCase(),
                  });
                  countryNameSet('');
                }}
              />
            ))}
          </div>
        </TabPattern>
      ) : null}
      {deckForm.from_lang !== '' && deckForm.to_lang === '' ? (
        <TabPattern header='Step 2' describe='Choose learning language'>
          <Input
            type='text'
            value={countryName}
            onChange={searchCountry}
            icon='search'
            placeholder='Find language'
          />
          <div className='countryList_wrapper'>
            {CountryList.filter(country =>
              searchName(countryName, country, country.name)
            ).map((country, index) => (
              <CountryLink
                key={index}
                country={country}
                width='30'
                onClick={() => {
                  deckFormSet({
                    ...deckForm,
                    to_lang: country.name.toLowerCase(),
                  });
                  countryNameSet('');
                }}
              />
            ))}
          </div>
        </TabPattern>
      ) : null}
      {deckForm.from_lang !== '' && deckForm.to_lang !== '' ? (
        <TabPattern header={'Step 3'} describe='Type your deck name'>
          <Input
            type='text'
            value={deckForm.name}
            onChange={setName}
            icon='keyboard'
            placeholder='Type deck name'
          />
          <MainButton endpoint='/decks' name='create' onClick={onClick} />
        </TabPattern>
      ) : null}
    </div>
  );
};

export default DeckCreator;
