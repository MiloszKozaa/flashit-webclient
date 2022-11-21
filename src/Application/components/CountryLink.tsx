import './CountryLink.css';

const CountryLink = ({ country, width, onClick }: any) => {
  return (
    <div className='country' onClick={onClick}>
      <div className='country_name'>
        <img src={`https://flagcdn.com/${country.flag}.svg`} width={width} />
        <div>{country.name}</div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/icon/arrow_left.svg`} />
    </div>
  );
};

export default CountryLink;
