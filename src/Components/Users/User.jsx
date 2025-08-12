import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png';
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.userPhoto}
                            alt=""
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? (
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => unfollow(user.id)}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => follow(user.id)}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{/* страна */}</div>
                    <div>{/* город */}</div>
                </span>
            </span>
        </div>
    );
};

export default User;
