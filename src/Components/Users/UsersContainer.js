import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
    follow,
    unfollow,
    setCurrentPageAc,
    toggleFollowingProgressAC,
    getUsers as getUsersThunk
} from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from 'redux';
import {
    getUsers as getUsersSelector,
    getIsFetching,
    getFollowingInProgress,
    getCurrentPage,
    getPageSize,
    getTotalUserCount
} from "../../Redux/user-selectors";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}
//
// const mapStateToProps = (state) => ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUserCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
// });

const mapStateToProps = (state) => ({
    users: getUsersSelector(state), // <-- селектор
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage: setCurrentPageAc,
        toggleFollowingProgress: toggleFollowingProgressAC,
        getUsers: getUsersThunk
    })
)(UsersContainer);