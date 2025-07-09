import React from "react";
import styles from "../Messages.module.css";
import DialogItem from "../DialogsItem/DialogItem";
import Message from "../Message";


const Dialogs2 = (props) => {
    let state = props.store.getState().messagesPage;
    const dialogsElements = state.dialogs.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ));

    const messagesElements = state.messages.map(m => (
        <Message key={m.id} text={m.text} />
    ));

    let newMessageBody=state.newMessageBody;
    let onSendMessageClick = () => {

    }
    let onNewMessageChange = (event)=>{


    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div>
                <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Напишите сообщения'></textarea></div>
                <div><button onClick={onSendMessageClick}>Отправить</button></div>
            </div>
        </div>
    );
};

export default Dialogs2;
