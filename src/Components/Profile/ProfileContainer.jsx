import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../Redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";


const withRouter = (Component) => {
    return (props) => {
        const params = useParams();
        return <Component {...props} params={params} />;
    };
};

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.params.userId; // берем из URL
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
