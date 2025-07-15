import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../../Redux/dialogs-reducer";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(sendMessageCreator()),
        updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
