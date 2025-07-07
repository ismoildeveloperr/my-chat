import React from "react";
import s from "./Post.module.css";
import img from "./img/img1.jpg"
const Posts = (props) => {
    return (
        <div className={s.item}>
            <img
                src={img}
            />

            {props.message}
            <div>
                <span>Нравится: {props.likeCount}❤️</span>
            </div>
            <br/>
        </div>
    );
};

export default Posts;
