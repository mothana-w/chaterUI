import LoginForm from '../LoginForm';

const RegistrationPage = () => {
  return (
    <>
      <div className='flex justify-center items-center h-full bg-sky-100'>
        <div className='py-10 px-5 bg-white rounded-xl flex flex-col justify-center items-center gap-12'>
          <h1 className='text-3xl'>تسجيل الدخول</h1>
          <LoginForm/>
        </div>
      </div>
    </>
  )
}
export default RegistrationPage;
