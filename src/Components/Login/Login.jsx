import React from 'react';
import style from './Login.module.css';
import { reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import styles from '../Common/FormsControls/FormControls.module.css'
import {login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {CreateField} from "../Common/FormsControls/FormControls";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {CreateField("Email", "email", [required], Input)}
                {CreateField("Password", "password", [required], Input, {type: "password"})}
                {CreateField(null, "rememberMe", [], Input, {type: "checkbox"}, "remeber me")}

            {error && <div className={styles.formsummaryerror}>
                {error}
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

