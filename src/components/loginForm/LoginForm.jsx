import './loginForm.css'
import MyInput from "../myInput/MyInput";
import MyButton from '../myButton/MyButton';

function LoginForm() {
    return (
        <form>
        <MyInput type={"text"} label={'Type your login:'} placeholder={'login'}/>
        <MyInput type={"email"} label={'Type your email:'}placeholder={'email'}/>
        <MyInput type={"password"} label={'Type your password:'} placeholder={'password'}/>
        <MyButton type={"submit"} text={'submit'}isDanger={false}/>
        </form>
    )
}

export default LoginForm;