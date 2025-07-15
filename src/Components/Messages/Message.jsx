import React from "react";
import styles from "./Messages.module.css";

const Message = (props) => {
    return <div className ={styles.message}>{props.text}</div>;
};
export default Message;
