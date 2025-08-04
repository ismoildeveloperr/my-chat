import React from "react";
import styles from "../Messages.module.css";
import DialogItem from "../DialogsItem/DialogItem";
import Message from "../Message";
import { Navigate } from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormControls";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {required} from "../../../utils/validators/validators";
const maxlength50 = maxLengthCreator(50);
const Dialogs = (props) => {
    let state = props.messagesPage;

    const dialogsElements = state.dialogsData.map(d => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ));

    const messagesElements = state.messagesData.map(m => (
        <Message key={m.id} text={m.text} />
    ));

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Textarea}
                validate={[required, maxlength50]}
                name="newMessageBody"
                placeholder="Напишите сообщение" />

            <button>Отправить</button>
        </div>
    </form>
    )
}
const AddMessageFormRedux=reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
export default Dialogs;
