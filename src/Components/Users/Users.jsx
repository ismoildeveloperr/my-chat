import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'
import {NavLink} from "react-router-dom";
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // ← исправлено
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p ? styles.selectedPage : ""}
                        onClick={() => props.onPageChanged(p)}
                        style={{ cursor: "pointer", marginRight: "5px" }}
                    >
                        {p}
                    </span>
                ))}
            </div>

            {props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                           <NavLink to={'/profile/'+u.id}>
                               <img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}
                                alt=""
                            /></NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{/* страна */}</div>
                            <div>{/* город */}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
