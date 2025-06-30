import React from "react";
import img1 from "./img/img1.png";
import styles from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import Posts from "../MyPosts/Post/Post";


const Profile = () => {

    return (
        <div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
