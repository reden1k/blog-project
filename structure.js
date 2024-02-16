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

if (userType.ADMIN) {
    /**
     * delete function, edit function, add function, delete comments
     */
}

if (userType.MODERATOR) {
    /**
     *  editPost function, delete comments
     */
}

if (userType.MEMBER) {
    /**
     * like, repost, comment
     */
}
