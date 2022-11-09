import './FormMessage.css';

const FormMessage = ({ errorText, succesText, display, onClick }: any) => {
  return (
    <div
      className={
        display.success || display.error ? 'form-message' : 'form-message-hide'
      }
      style={
        display.error
          ? { backgroundColor: '#d1553f', borderColor: '#fb6a50' }
          : { backgroundColor: '#36BC5C', borderColor: '#47EB75' }
      }>
      <div>{display.error ? errorText : succesText}</div>
      <img
        src={`${process.env.PUBLIC_URL}/icon/errorClose.svg`}
        onClick={onClick}
      />
    </div>
  );
};

export default FormMessage;
