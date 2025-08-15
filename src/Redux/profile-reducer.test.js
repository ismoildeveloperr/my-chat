import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
    postsData: [
        { id: 1, message: "Привет", likeCount: 3 },
        { id: 2, message: "Как дела?", likeCount: 5 },
        { id: 3, message: "Это первый мой пост", likeCount: 2 }
    ]
};


test('length of posts should be incremented', () => {
    let action = addPostActionCreator("newPostText");

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(4);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("newPostText");

    let newState = profileReducer(state, action);

    expect(newState.postsData[3].message).toBe("newPostText");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, deletePost);

    expect(newState.postsData.length).toBe(3);
});

// test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
//     let action = deletePost(1);
//
//     let newState = profileReducer(state, deletePost);
//
//     expect(newState.postsData.length).toBe(3);
// });

test('after1 deleting length of messages should be decrement', () => {

});