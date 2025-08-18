import React, {useState } from 'react';
import style from './Login.module.css';
import { reduxForm } from 'redux-form';
import { Input, CreateField } from '../Common/FormsControls/FormControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import styles from '../Common/FormsControls/FormControls.module.css';
import { login } from '../../Redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { stopSubmit } from 'redux-form';

const genCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm123456789';
    let s = '';
    for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
};

const LoginForm = ({ handleSubmit, error, captchaText, onRefreshCaptcha, passwordValue, setPasswordValue }) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('Email', 'email', [required], Input)}

            {CreateField('Password', 'password', [required], Input, {
                type: 'password',
                onChange: (e) => setPasswordValue(e.target.value),
            })}

            <div className={style.captchaWrap}>
                <div className={style.captchaBox} aria-label="captcha">
                    {captchaText}
                </div>
                <button type="button" className={style.refreshBtn} onClick={onRefreshCaptcha} title="Обновить капчу">
                    ↻
                </button>
            </div>

            {CreateField('Введите текст с капчи', 'captcha', [required], Input, {
                autoComplete: 'off',
            })}

            {CreateField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}

            {error && <div className={styles.formsummaryerror}>{error}</div>}

            <div>
                <button disabled={(passwordValue || '').length < 6} className={style.buttonn}>
                    Войти
                </button>
            </div>
        </form>
    );
};

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState(genCaptcha());

    const refreshCaptcha = () => setCaptcha(genCaptcha());

    const onSubmit = (formData) => {
        const userInput = (formData.captcha || '').trim().toLowerCase();
        const correct = (captcha || '').trim().toLowerCase();

        if (userInput !== correct) {
            props.stopSubmit('login', { captcha: 'Неверная капча. Попробуйте ещё раз.' });
            refreshCaptcha();
            return;
        }

        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuthenticated) {
        return <Navigate to="/users" replace />;
    }

    return (
        <div className={style.container}>
            <h1>Логин</h1>
            <ReduxLoginForm
                onSubmit={onSubmit}
                captchaText={captcha}
                onRefreshCaptcha={refreshCaptcha}
                passwordValue={password}
                setPasswordValue={setPassword}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, stopSubmit })(Login);
