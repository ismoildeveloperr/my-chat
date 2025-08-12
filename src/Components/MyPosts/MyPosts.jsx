import React, {PureComponent} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsControls/FormControls";

const maxLength20 = maxLengthCreator(20)

function AddNewPostFormComponent(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength20 ]}
                    name="newPostText"
                    component={Textarea}
                    placeholder="Введите сообщение"
                />
                <br />
                <button className={styles.btn} type="submit">Добавить пост</button>
            </div>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostFormComponent);


class MyPosts extends PureComponent {
    render() {
        console.log("hello world");

        const postsElements = this.props.posts.map(p => (
            <Post key={p.id} message={p.message} likeCount={p.likeCount}/>
        ));

        const onAddPost = (values)  => {
            this.props.addPost(values.newPostText);
        };

        return (
            <div>
                <div className={styles.profile}>
                    <h1>My posts</h1>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>

                <div className={styles.posts}>
                    {postsElements}
                    <br/>
                    <b>Всего сообщений: {this.props.posts.length}</b>
                </div>
            </div>
        );
    }
}

export default MyPosts;
