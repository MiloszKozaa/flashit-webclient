import './TabPattern.css';

const DeckFormCreator = ({ header, describe, children }: any) => {
  return (
    <div className='tabPattern'>
      <div className='tabHeader'>
        <h1>{header}</h1>
        <h2>{describe}</h2>
      </div>
      {children}
    </div>
  );
};

export default DeckFormCreator;
