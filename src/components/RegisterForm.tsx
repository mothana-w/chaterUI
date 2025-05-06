import { useState } from "react";
import FormBtn from "./FormBtn";
import axios from "axios";

const RegisterForm = () => {
  interface registrationFields {
    username: string,
    email: string,
    password: string,
  };
  const fieldStyle = `border-[1px] border-gray-500 rounded-md placeholder:text-slate-600 py-2 px-4 w-full`;
  const formStyle = `w-[400px] flex flex-col gap-2`;
  const [formInputs, setFormInputs] = useState<registrationFields>({username: '', email: '', password:''});
  return (
    <>
      <form className={formStyle} onSubmit={formSubmit}>
        <input name='username' type='text' placeholder='اسم المستخدم' className={fieldStyle}
        onChange={(e) => { setFormInputs({...formInputs, username: e.target.value}); }}/>
        <input name='email' type='email' placeholder='البريد الإلكتروني' className={fieldStyle}
        onChange={(e) => { setFormInputs({...formInputs, email: e.target.value}); }}/>
        <input name='password' type='password' placeholder='كلمة المرور' className={fieldStyle}
        onChange={(e) => { setFormInputs({...formInputs, password: e.target.value}); }}/>
        <FormBtn>إنشاء</FormBtn>
      </form>
    </>
  );
  function formSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    axios.post('http://localhost:5218/api/Auth/register', {...formInputs})
    .then((response) => {
      console.log(response);
    })
    .catch ((error) => {
      console.log(error.response.data);
    })
  }
}

export default RegisterForm;