import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import TabPattern from '../../components/TabPattern';

type DeckNameProps = {
  name: string;
  from_lang: string;
  to_lang: string;
  setDeckData: (data: Partial<DeckNameProps>) => void;
  onSubmit: () => void;
};

const DeckName = ({ name, setDeckData, onSubmit }: DeckNameProps) => {
  return (
    <TabPattern header='Deck Name' describe='3 / 3'>
      <Input
        type='text'
        value={name}
        onChange={(e: any) => setDeckData({ name: e.target.value })}
        icon='keyboard'
        placeholder='Type deck name'
      />
      <MainButton
        endpoint='/decks'
        name='Create'
        onClick={onSubmit}
      />
    </TabPattern>
  );
};

export default DeckName;
