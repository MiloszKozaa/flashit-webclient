import './Brand.css';

const Brand = () => {
  return (
    <div
      className='brand'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/register_img.png)`,
      }}>
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
