import { useEffect, useState } from 'react';
import { CountryList } from '../../../models/CountryList';
import { searchName } from '../../../services/search/searchName';
import CountryLink from '../../components/CountryLink';
import Input from '../../components/Input';
import TabPattern from '../../components/TabPattern';

type LearningLanguageProps = {
  to_lang: string;
  setDeckData: (data: Partial<LearningLanguageProps>) => void;
  next: () => void;
};

const LearningLanguage = ({ setDeckData, next }: LearningLanguageProps) => {
  const [countryName, countryNameSet] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <TabPattern header='Learning Language' describe='2 / 3'>
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
              setDeckData({ to_lang: country.name.toLowerCase() });
              next();
              countryNameSet('');
            }}
          />
        ))}
      </div>
    </TabPattern>
  );
};

export default LearningLanguage;
