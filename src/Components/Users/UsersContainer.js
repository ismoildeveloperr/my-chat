import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUserAc } from "../../Redux/users-reducer";

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
});

const mapDispatchToProps = {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUserAc
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
