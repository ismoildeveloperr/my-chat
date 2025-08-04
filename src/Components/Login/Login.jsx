import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Логин"
                       validate={[required]}
                       type="text" name={"login"} component={Input}/>
            </div>
            <div>
                <Field placeholder="Пароль"  validate={[required]} type="password" name={"password"} component={Input}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input}/> Запомнить меня
            </div>
            <div>
                <button className={style.buttonn}>Войти</button>
            </div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
    console.log(formData);
    }
    return (
        <div className={style.container}>
            <h1>Логин</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;

