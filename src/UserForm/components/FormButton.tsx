import './FormButton.css';

const FormButton = ({ name, form, loading }: any) => {
  return (
    <button
      className='form_button'
      type='submit'
      form={form}
      style={loading ? { backgroundColor: '#0784b5' } : {}}>
      {!loading ? (
        name
      ) : (
        <div className='dot'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </button>
  );
};

export default FormButton;
