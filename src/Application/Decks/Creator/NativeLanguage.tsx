import { useState } from 'react';
import { CountryList } from '../../../models/CountryList';
import { searchName } from '../../../services/search/searchName';
import CountryLink from '../../components/CountryLink';
import Input from '../../components/Input';
import TabPattern from '../../components/TabPattern';

type NativeLanguageProps = {
  from_lang: string;
  setDeckData: (data: Partial<NativeLanguageProps>) => void;
  next: () => void;
};

const NativeLanguage = ({ setDeckData, next }: NativeLanguageProps) => {
  const [countryName, countryNameSet] = useState('');
  return (
    <TabPattern header='Native Language' describe='1 / 3'>
      <Input
        type='text'
        value={countryName}
        onChange={(e: any) => countryNameSet(e.target.value)}
        icon='search'
        placeholder='Find language'
      />
      <div className='selectCountry_wrapper'>
        {CountryList.filter((country: any) =>
          searchName(countryName, country, country.name)
        ).map((country, index) => (
          <CountryLink
            key={index}
            country={country}
            width='30'
            onClick={() => {
              setDeckData({ from_lang: country.name.toLowerCase() });
              next();
              countryNameSet('');
            }}
          />
        ))}
      </div>
    </TabPattern>
  );
};

export default NativeLanguage;
