import './FormButton.css';

const FormButton = ({ name, form }: any) => {
  return (
    <button className='form_button' type='submit' form={form}>
      {name}
    </button>
  );
};

export default FormButton;
