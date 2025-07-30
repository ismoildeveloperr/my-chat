import React from "react";
import styles from "../Messages.module.css";
import DialogItem from "../DialogsItem/DialogItem";
import Message from "../Message";
import { Navigate } from 'react-router-dom';
const Dialogs = (props) => {
    let state = props.messagesPage;

    const dialogsElements = state.dialogsData.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ));

    const messagesElements = state.messagesData.map(m => (
        <Message key={m.id} text={m.text} />
    ));

    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    };

    if(props.isAuth===false) return <Navigate to="/login" />;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder="Напишите сообщение"
                />
                <button onClick={onSendMessageClick}>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;
