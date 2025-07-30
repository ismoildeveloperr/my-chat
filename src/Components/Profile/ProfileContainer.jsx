import React from "react";
import Profile from "./Profile";
import { getUserProfile } from "../../Redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
const withRouter = (Component) => {
    return (props) => {
        const params = useParams();
        return <Component {...props} params={params} />;
    };
};

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.params.userId;
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


