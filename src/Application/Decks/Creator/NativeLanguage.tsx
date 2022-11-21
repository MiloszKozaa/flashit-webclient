import { useState } from 'react';
import Input from '../../components/Input';
import TabPattern from '../../components/TabPattern';

const NativeLanguage = () => {
  const [countryName, countryNameSet] = useState('');
  const searchCountry = (e: any) => {
    countryNameSet(e.target.value);
  };
  return (
    <TabPattern header='Step 1' describe='Choose native language'>
      <Input
        type='text'
        value={countryName}
        onChange={searchCountry}
        icon='search'
        placeholder='Find native language'
      />
    </TabPattern>
  );
};

export default NativeLanguage;
