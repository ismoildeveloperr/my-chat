import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><NavLink to="/profile"><h3>Профил</h3></NavLink></li>
                <li><NavLink to="/messages"><h3>Сообщения</h3></NavLink></li>
                <li><NavLink to="/news"><h3>Новости</h3></NavLink></li>
                <li><NavLink to="/music"><h3>Музыка</h3></NavLink></li>
                <li><NavLink to="/settings"><h3>Настройка</h3></NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
