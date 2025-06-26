import React from "react";
import styles from "./MyPosts.module.css";
import img1 from "../Profile/img/img1.png";
import Posts from "./Post/Post";

const MyPosts = () => (
    <div>
        <div className={styles.profile}>
            <img className={styles.img1} src={img1} alt="Profile"/>
        </div>
        <div className={styles.profile}>
            <h1>My posts</h1>
            <textarea className={styles.textarea}></textarea><br/>
            <button className={styles.btn}>Add post</button>
        </div>
        <div className={styles.posts}>
            <Posts message='Hi, how are you?' />
            <Posts message='Its my frist post'/>
            <Posts message='Its my frist pos2t'/>
        </div>
    </div>
)
export default MyPosts;