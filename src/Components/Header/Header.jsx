import React from 'react';
import logo from './img/logo.png';
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo"/>
            <h2>
                Добро пожаловать на наш сайт {
                props.login
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink className={styles.loginblock} to="/login">Login</NavLink>
            }
            </h2>


        </header>
    );
};

export default Header;