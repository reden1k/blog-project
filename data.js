export const users = [];
export let posts = [];

/**
 * Structure of users: (Maybe add likedPosts: [])
    [
        {
            userID: id,
            userName: name,
            email: email, 
            pass: pass,
            regDate: date,
            userType: type,
        }
    ]

    Structure of posts:
    [
        {
            postID: id += 1,
            date: getDate(),
            title: title,
            text: text,
            postedBy: postBy,
            editedTime: null,
            likesByUsers: [],
            comments: [],

        }
    ]
 */

    /**
 * Проект написал с представлением того как работает сайт, на котором есть админы модераторы и пользователи.
 * 
 * Пользователи моугт, лайкать и комментировать посты.
 * Модераторы могут, лайкать, комментировать, изменять посты, баннить пользователей и удалять комментариию
 * 
 * Админы могут, лайкать, комментировать, постить, изменять посты, баннить пользователей, удалять комментарии, смотреть списки пользователей,
 * смотреть кол-во лайков и кто лайкал, смотреть комментарии.
 */