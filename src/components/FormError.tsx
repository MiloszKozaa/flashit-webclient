import './FormError.css';

const FormError = ({ text, display, onClick }: any) => {
  return (
    <div className={display ? 'form-error' : 'form-error-hide'}>
      <div>{text}</div>
      <img
        src={`${process.env.PUBLIC_URL}/icon/errorClose.svg`}
        onClick={onClick}
      />
    </div>
  );
};

export default FormError;
