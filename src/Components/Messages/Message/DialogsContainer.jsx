import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = (props) => {


    return <StoreContext.Consumer>{
        (store) => {
            let dialogsPage = store.getState().dialogsPage;
            let messagesPage = store.getState().messagesPage;
            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };

            const onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={dialogsPage}
                messagesPage={messagesPage}
            />
        }
    }
    </StoreContext.Consumer>

};

export default DialogsContainer;
