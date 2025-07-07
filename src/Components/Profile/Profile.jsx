import React from "react";
import img1 from "./img/img1.png";
import styles from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div>
            <MyPosts
                posts={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                updateNewPostText = {props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;

