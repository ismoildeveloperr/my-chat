import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        <h3>👤 Профиль</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/messages"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        <h3>💬 Сообщения</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        <h3>📰 Новости</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/music"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        <h3>🎵 Музыка</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        <h3>⚙️ Настройки</h3>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
