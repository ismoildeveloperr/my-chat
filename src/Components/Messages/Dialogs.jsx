// components/Dialogs/Dialogs.jsx
import React from "react";
import styles from "./Messages.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = (props) => {
    // 📌 Примерные данные
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

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsData.map((dialog) => (
                    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                ))}
            </div>
            <div className={styles.messages}>
                {messagesData.map((message) => (
                    <Message key={message.id} messages={message.text} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
