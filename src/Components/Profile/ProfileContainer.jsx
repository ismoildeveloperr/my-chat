import React from "react";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../Redux/profile-reducer";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { compose } from "redux";

const withRouter = (Component) => {
    return (props) => {
        const params = useParams();
        const navigate = useNavigate();
        return <Component {...props} params={params} navigate={navigate} />;
    };
};

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.navigate("/login");
                return;
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        if (this.props.params.userId || this.props.authorizedUserId) {
            this.refreshProfile();
        }
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.params.userId !== prevProps.params.userId ||
            this.props.authorizedUserId !== prevProps.authorizedUserId
        ) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isowner={!this.props.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
            />

        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuthenticated: state.auth.isAuthenticated,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer);
