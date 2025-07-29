import React from "react";
import s from "./Post.module.css";
import img from "./img/img1.jpg";

const Post = ({ message, likeCount }) => {
    return (
        <div className={s.item}>
            <img src={img} alt="post" />
            <p>{message}</p>
            <div>
                <span>Нравится: {likeCount} ❤️</span>
            </div>
        </div>
    );
};

export default Post;
