import TabPattern from '../components/TabPattern';
import MainButton from '../components/MainButton';
import './Decks.css';

const Decks = () => {
  return (
    <TabPattern header='Your decks'>
      <MainButton endpoint='/decks/creator' name='Create' />
    </TabPattern>
  );
};

export default Decks;
