import React from "react";
import styles from "../Messages.module.css";
import DialogItem from "../DialogsItem/DialogItem";
import Message from "../Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;
    const dialogsElements = state.dialogsData.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ));

    const messagesElements = state.messagesData.map(m => (
        <Message key={m.id} text={m.text} />
    ));

    let newMessageBody=state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (event)=>{
       let body= event.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body))
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

export default Dialogs;
