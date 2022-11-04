import './IntroBrand.css';

const Brand = () => {
  return (
    <div className='brand'>
      <img
        src={`${process.env.PUBLIC_URL}/register_full/reg_back.svg`}
        className='brand_back'
      />
      <img
        src={`${process.env.PUBLIC_URL}/register_full/reg_mid.svg`}
        className='brand_mid'
      />
      <img
        src={`${process.env.PUBLIC_URL}/register_full/reg_front.svg`}
        className='brand_front'
      />
      
      
       <div className='brand_wrapper'>
        <img
          src={`${process.env.PUBLIC_URL}/icon/logo.svg`}
          className='register_logo'
        />
        <div className='brand_name'>Flashcards App</div>
        <div>Created by students for students</div>
      </div> 
    </div>
  );
};

export default Brand;
