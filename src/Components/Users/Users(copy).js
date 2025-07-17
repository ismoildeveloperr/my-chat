import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'
import axios from 'axios';
const UsersCopy = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
                props.setUsers(response.data.items);
            });

        }
    }

    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
            {props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt=""/>
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
                           <div> {/*{u.location.country}*/}</div>
                           <div> {/*{u.location.city}*/}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default UsersCopy;
