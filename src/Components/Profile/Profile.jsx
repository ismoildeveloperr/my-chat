import React from "react";
import img1 from "./img/img1.png";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img className={styles.img1} src={img1} alt="Profile" />
        </div>
    );
};

export default Profile;
