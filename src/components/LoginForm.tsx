import { useState } from "react";
import FormBtn from "./FormBtn";
import axios from "axios";

const LoginForm = () => {
  interface loginFields {
    usernameOrEmail: string,
    password: string,
  };
  const fieldStyle = `border-[1px] border-gray-500 rounded-md placeholder:text-slate-600 py-2 px-4 w-full`;
  const formStyle = `w-[400px] flex flex-col gap-2`;
  const [formInputs, setFormInputs] = useState<loginFields >({usernameOrEmail: '', password:''});
  return (
    <>
      <form className={formStyle} onSubmit={formSubmit}>
        <input name='usernameOrEamil' type='text' placeholder='اسم المستخدم أو البريد الإلكتروني' className={fieldStyle}
        onChange={(e) => { setFormInputs({...formInputs, usernameOrEmail: e.target.value}); }}/>
        <input name='password' type='password' placeholder='كلمة المرور' className={fieldStyle}
        onChange={(e) => { setFormInputs({...formInputs, password: e.target.value}); }}/>
        <FormBtn>تسجيل</FormBtn>
      </form>
    </>
  );
  function formSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    axios.post('http://localhost:5218/api/Auth/login', {...formInputs})
    .then((response) => {
      console.log(response);
    })
    .catch ((error) => {
      console.log(error.response.data);
    })
  }
}

export default LoginForm;