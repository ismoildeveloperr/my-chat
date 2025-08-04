import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { sendMessageCreator } from "../../../Redux/dialogs-reducer";
import {compose} from "redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => dispatch(sendMessageCreator(newMessageBody))

    };
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
;