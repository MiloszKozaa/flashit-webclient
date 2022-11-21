import './Input.css';

const Input = ({ value, type, onChange, icon, placeholder }: any) => {
  return (
    <div className='inputWrapper'>
      <input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      <img src={`${process.env.PUBLIC_URL}/icon/input/${icon}.svg`} />
    </div>
  );
};

export default Input;
