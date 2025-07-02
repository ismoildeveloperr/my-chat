import React from "react";
import styles from "../Messages.module.css";
import DialogItem from "../DialogsItem/DialogItem";
import Message from "../Message";

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ));

    const messagesElements = props.messages.map(m => (
        <Message key={m.id} text={m.text} />
    ));

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
