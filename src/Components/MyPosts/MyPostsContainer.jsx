import { addPostActionCreator } from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    posts: state.profilePage.postsData,
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
    },
});

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;
