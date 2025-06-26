// components/Dialogs/Message.jsx
import React from "react";
import styles from "./Messages.module.css";

const Message = ({ messages }) => {
    return <div className={styles.message}>{messages}</div>;
};

export default Message;
