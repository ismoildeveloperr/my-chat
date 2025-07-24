import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import axios from 'axios';
import {
    followAC,
    unfollowAC,
    setUserAc,
    setCurrentPageAc,
    setTotalUsersCountAC,
    toggleIsFetchingAC
} from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader />: null}

            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
        </>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUserAc,
    setCurrentPage:setCurrentPageAc,
    setTotalUsersCount:setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
