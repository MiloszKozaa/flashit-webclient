import { ReactNode } from 'react';
import './TabPattern.css';

type TabPatternType = {
  header: string,
  describe?: string,
  children: ReactNode
}

const DeckFormCreator = ({ header, describe, children }: TabPatternType) => {
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
