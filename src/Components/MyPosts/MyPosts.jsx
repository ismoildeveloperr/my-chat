import React from "react";
import styles from "./MyPosts.module.css";
import img1 from "../Profile/img/img1.png";
import Posts from "./Post/Post";

const MyPosts = (props) => {

    let postsElemets =
        props.posts.map(p => <Posts message={p.message} likesCount = {p.likesCount} />);
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
                {postsElemets}
                {/*{postsData.map(post => (*/}
                {/*    <Posts key={post.id} message={post.message} likeCount={post.likeCount} />*/}
                {/*))}*/}
            </div>
        </div>
    );
};

export default MyPosts;
