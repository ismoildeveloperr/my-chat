import { connect } from "react-redux";
import { addPostActionCreator } from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
    posts: state.profilePage.postsData,
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
