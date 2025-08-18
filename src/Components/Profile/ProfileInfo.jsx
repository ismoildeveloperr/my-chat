import React, { useState } from 'react';
import Preloader from "../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../assets/images/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png';
import styles from './Profile.module.css';
import ProfileDataFormRedux from './ProfileDataForm';

const ProfileInfo = ({ profile, savePhoto, saveProfile, isowner, status, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) return <Preloader />;

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) savePhoto(e.target.files[0]);
    };

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => setEditMode(false))
            .catch(error => {
                console.error("Ошибка при сохранении профиля:", error);
                alert(error); // Показываем пользователю
            });
    };

    return (
        <div>
            <img src={profile.photos?.large || userPhoto} alt="avatar" className={styles.avatar}/>
            {isowner && <input type="file" onChange={onMainPhotoSelected}/>}

            {editMode
                ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile} isowner={isowner} goToEditMode={() => setEditMode(true)} />
            }

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );
};

const ProfileData = ({ profile, isowner, goToEditMode }) => {
    return (
        <div>
            {isowner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div><b>Full name:</b> {profile.fullName}</div>
            <div><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</div>
            {profile.lookingForAJob && <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>}
            <div><b>About me:</b> {profile.aboutMe}</div>
            <div><b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => (
                    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                ))}
            </div>
        </div>
    );
};

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={styles.contactinfo}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

export default ProfileInfo;
