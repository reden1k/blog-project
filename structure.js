const regUser = {
    name: name,
    email: email, 
    pass: pass, 
    userType: userType
}

const login = {
    userNameOrEmail: nameOrEmail,
    pass: pass
}

const logout = {
    //just exit from account
}

const userType = {ADMIN: 'admin', MODERATOR: 'moderator', MEMBER: 'member'};

[postObj = {
    date: date, // cant be more then current time
    title: title, // can be null
    text: text,  // can be null
    postedBy: {
        userName: name,
        userType: type,
    },
    comments: [
        {
            commentBy: userName,
            text: text,
        },
    ],
    likes: [
        {
            likedBy: userName,
        }
    ],
    reposts: [
        {
            repostBy: userName,
        }
    ],

}]


/**
 * Проект написал с представлением того как работает сайт, на котором есть админы модераторы и пользователи.
 * 
 * Пользователи моугт, лайкать и комментировать посты.
 * Модераторы могут, лайкать, комментировать, изменять посты, баннить пользователей и удалять комментариию
 * 
 * Админы могут, лайкать, комментировать, постить, изменять посты, баннить пользователей, удалять комментарии, смотреть списки пользователей,
 * смотреть кол-во лайков и кто лайкал, смотреть комментарии.
 */
