import React from 'react';
import Preloader from "../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../assets/images/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png';
import styles from './Profile.module.css';

const ProfileInfo = ({ profile, status, updateStatus, isowner, savePhoto }) => {
    if (!profile) {
        return <Preloader />;
    }
const onmainPhotoSelected = (e)=> {
    if (e.target.files.length) {
        savePhoto(e.target.files[0]);
    }

}
    return (
        <div>
            <img src={profile.photos?.large || userPhoto} className={styles.avatar} alt="" />
            {isowner && <input type="file" onChange={onmainPhotoSelected} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );
};

export default ProfileInfo;
