import React from "react";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                isowner={props.isowner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
