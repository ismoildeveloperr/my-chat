import React from "react";
import styles from "../Messages.module.css";
import DialogItem from "../DialogsItem/DialogItem";
import Message from "../Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    const state = props.state;

    const dialogsElements = state.dialogsData.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ));

    const messagesElements = state.messagesData.map(m => (
        <Message key={m.id} text={m.text} />
    ));

    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder="Напишите сообщение"
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
