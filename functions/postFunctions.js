import { isEmpty, userType } from "./users.js";
import readlineSync from 'readline-sync';

let id = 0;
export const makePost = (postBy) => {
    if (!isEmpty(postBy)) {
        const title = readlineSync.question('Type title: ');
        const text = readlineSync.question('Type text: ');
        if (postBy.userType === userType.ADMIN) {
            posts.push({
                postID: id += 1,
                date: getDate(),
                title: title,
                text: text,
                postedBy: postBy,
                editedTime: null,
                likesByUsers: [],
                comments: [],
            });
            console.log('Post created!');
            return posts;
        }
        console.log('You dont have permission for this!');
        return undefined;
    }
    console.log('Something went wrong, try make post later.');
    return undefined;
};

export const editPost = (currentAccount) => {
    if (posts.length !== 0) {
        const changePart = {TITLE: 'title', TEXT: 'text'};
        if (!isEmpty(currentAccount)) {
            if (currentAccount.userType === userType.ADMIN || currentAccount.userType === userType.MODERATOR) {
                getPosts();
                const id = readlineSync.question('Which post do you want edit? (type postID) '); // Need add check for correct input
                const post = getPostById(Number(id)); //make sure if getPostId() not correct it stops here!
                console.log('You can only change: title, text')
                const what = toUpperCase(readlineSync.question('What you want to change?: '));
                let to;
                if (Object.hasOwn(changePart, what)) {
                    what.toLowerCase() === changePart.TITLE ? to = readlineSync.question('Type new title: ') : to = readlineSync.question('Type new text: ');
                    post[what] = to;
                    post.editedTime = getDate();
                    return post;
                }
                console.log('You trying change something wrong, make it correctly!');
                return undefined;
            }
            console.log('You dont have permission for this!');
            return undefined;
        }
        console.log('Something went wrong, try edit post again later.');
        return undefined;
    }
    console.log('We didnt post anything yet!');
    return undefined;
};

export const likePost = (currentAccount) => {
    if (posts.length !== 0) {
        if (!isEmpty(currentAccount)) {
            getPosts();
            const id = readlineSync.question('Which post you want to like? (type postID) '); // Need add check for correct input
            const post = getPostById(Number(id)); //make sure if getPostId() not correct it stops here!
            const o = {
                account: currentAccount,
                likeDate: getDate(),
            }
            post.likesByUsers.push(o);
            return post;
        }
        console.log('Something went wrong, you cant like this post right now.');
        return undefined;
    }
    console.log('We didnt post anything yet!');
    return undefined;
    
}

export const commentPost = (currentAccount) => {
    if (posts.length !== 0) {
        if (!isEmpty(currentAccount)) {
            getPosts();
            const id = readlineSync.question('Which post you want to comment? (type postID) '); // Need add check for correct input
            const post = getPostById(Number(id)); //make sure if getPostId() not correct it stops here!
            const input = readlineSync.question('Type your comment: ');
            const o = {
                account: currentAccount,
                comment: input,
                commentDate: getDate(),
            }
            post.comments.push(o);
            return post;
        }
        console.log('Something went wrong, try to type comment later.');
        return undefined;
    }
    console.log('We didnt post anything yet!');
    return undefined;
};

export const deletePost = (postID, currentAccount) => {
    if (!isEmpty(currentAccount) && posts.length !== 0) {
        if (currentAccount.userType === userType.ADMIN) {
            posts = posts.filter((post) => post.id !== postID);
            console.log('Post deleted!');
            return posts;
        }
    }
    console.log('Something went wrong, try to delete post later.');
    return undefined;
};

export const getPosts = () => {
    if (posts.length !== 0) {
        let count = 0;
        for (const post of posts) {
            console.log(post);
            count += 1;
        }
        return count > 1 ? console.log(`${count} Post printed!`) : console.log(`${count} Posts printed!`);
    }
    console.log(`We didnt post anything yet`);
    return posts;
}

export const getPostById = (postID) => {
    if (posts.length !== 0) {
        for (const post of posts) {
            if (post.id === postID) {
                return post;
            }
        }
        console.log('Post with this ID didnt exist');
        return undefined;
    }
    console.log('We didnt post anything yet');
    return undefined;
}

const getDate = () => new Date().toLocaleString("ru-EU", { timeZone: "Europe/Moscow" });