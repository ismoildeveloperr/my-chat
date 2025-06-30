import React from "react";
import styles from "./MyPosts.module.css";
import img1 from "../Profile/img/img1.png";
import Posts from "./Post/Post";

const MyPosts = () => {
    const postsData = [
        { id: 1, message: "Hi, how are you?", likeCount: 3 },
        { id: 2, message: "It's my first post", likeCount: 5 },
        { id: 3, message: "It's my second post", likeCount: 2 }
    ];

    return (
        <div>
            <div className={styles.profile}>
                <img className={styles.img1} src={img1} alt="Profile" />
            </div>
            <div className={styles.profile}>
                <h1>My posts</h1>
                <textarea className={styles.textarea}></textarea><br />
                <button className={styles.btn}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsData.map(post => (
                    <Posts key={post.id} message={post.message} likeCount={post.likeCount} />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;
