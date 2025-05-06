interface FormBtnProps {
  children: string,
};

const FormBtn  = ({children} : FormBtnProps) => {
  return (
    <>
      <button className='bg-slate-400 opacity-80 p-3 rounded-md transition duration-150 hover:opacity-100'>{children}</button>
    </>
  );
}

export default FormBtn;
