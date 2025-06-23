import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="/profile"><h3>Профил</h3></a></li>
                <li><a href="/messages"><h3>Сообщения</h3></a></li>
                <li><a href="/news"><h3>Новости</h3></a></li>
                <li><a href="/music"><h3>Музыка</h3></a></li>
                <li><a href="/settings"><h3>Настройка</h3></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
