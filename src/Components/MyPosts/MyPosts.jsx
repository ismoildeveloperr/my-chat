import React from "react";
import styles from "./MyPosts.module.css";
import img1 from "../Profile/img/img1.png";
import Posts from "./Post/Post";



const MyPosts = (props) => {
    let postsElements = props.posts.map(p => (
        <Posts
            key={p.id}
            message={p.message}
            likeCount={p.likeCount}
        />
    ));

    const newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };

    return (
        <div>
            <div className={styles.profile}>
                <img className={styles.img1} src={img1} alt="Profile"/>
            </div>
            <div className={styles.profile}>
                <h1>My posts</h1>
                <textarea
                    className={styles.textarea}
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                />
                <br/>
                <button className={styles.btn} onClick={onAddPost}>Добавить пост</button>
            </div>

            <div className={styles.posts}>
                {postsElements} <br/>
                <b>Всего сообщений: {props.posts.length}</b>
            </div>
        </div>
    );
};


export default MyPosts;
