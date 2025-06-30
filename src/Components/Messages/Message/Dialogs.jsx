import React from "react";
import styles from "../Messages.module.css";
import DialogItem from "../DialogsItem/DialogItem";
import Message from "../Message";

const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: "Исмоил" },
        { id: 2, name: "Фирдавс" },
        { id: 3, name: "Фирӯз" },
        { id: 4, name: "Шоҳин" },
    ];

    const messagesData = [
        { id: 1, text: "Привет" },
        { id: 2, text: "Как дела?" },
        { id: 3, text: "Доброе утро" },
        { id: 4, text: "Бегаю" }
    ];

    const dialogsElements = dialogsData.map(dialog => (
        <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
    ));

    const messagesElements = messagesData.map(message => (
        <Message key={message.id} messages={message.text} />
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
