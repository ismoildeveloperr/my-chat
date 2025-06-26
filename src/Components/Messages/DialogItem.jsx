// components/Dialogs/DialogItem.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Messages.module.css";

const DialogItem = ({ id, name }) => {
    const path = "/messages/" + id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};

export default DialogItem;
