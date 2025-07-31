import React from "react";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus} from "../../Redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
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
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status} updateStatus={this.props.updateStatus}/>;
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer);


