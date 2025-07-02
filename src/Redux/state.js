let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi, how are you?", likeCount: 3},
            {id: 2, message: "It's my first post", likeCount: 5},
            {id: 3, message: "It's my second post", likeCount: 2}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: "Исмоил"},
            {id: 2, name: "Фирдавс"},
            {id: 3, name: "Фирӯз"},
            {id: 4, name: "Шоҳин"},
        ],
        messagesData: [
            {id: 1, text: "Привет"},
            {id: 2, text: "Как дела?"},
            {id: 3, text: "Доброе утро"},
            {id: 4, text: "Бегаю"}
        ]
    }
};

export default state;