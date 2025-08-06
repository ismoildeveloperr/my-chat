import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import styles from '../Common/FormsControls/FormControls.module.css'
import {login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Электроный почта"
                       validate={[required]}
                       type="text" name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder="Пароль"  validate={[required]} type="password" name={"password"} component={Input}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input}/> Запомнить меня
            </div>
            {props.error && <div className={styles.formsummaryerror}>
                {props.error}
            </div>
            }
            <div>
                <button className={style.buttonn}>Войти</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData)  => {
    props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuthenticated){
        return <Navigate to="/users" replace />
    }
    return (
        <div className={style.container}>
            <h1>Логин</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {login}) (Login);

