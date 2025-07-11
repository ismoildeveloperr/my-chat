import React from 'react';
import logo from './img/logo.png';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo"/>
            <h2>Добро пожаловать на наш сайт</h2>
        </header>
    );
};

export default Header;