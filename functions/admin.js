/**
 * ADMIN:
 * getPostLikes(postID)
 * getSiteUsers()
 * getPostComments(postID)
 * banUser()
 * deleteComment(),
 * 
 */
import readlineSync from 'readline-sync'; 
import { userType } from './users.js';
import { getPostById } from './postFunctions.js';
import { users } from '../data.js';

export const getLikesOnPost = (currentAccount) => {
    if (currentAccount.userType === userType.ADMIN) {
        const id = readlineSync.question('Type id of post for check likes: '); // Need add check for correct input
        const post = getPostById(Number(id)); //make sure if getPostId() not correct it stops here!
        return post.likesByUsers;
    }
    console.log('You dont have permissions for this!');
    return undefined;
}

export const getSiteUsers = (currentAccount) => {
    if (currentAccount.userType === userType.ADMIN) {
        if (!users.length === 0) {
            for (const user of users) {
                console.log(user);
            }
        }
        console.log('We dont have any users in our data base!');
        return undefined;
    }
}

export const getPostComments = (currentAccount) => { //move to postFunctions.js 
    if (currentAccount.userType === userType.ADMIN) {
        const id = readlineSync.question('Type id of post for check comments: '); // Need add check for correct input
        const post = getPostById(Number(id)); //make sure if getPostId() not correct it stops here!
        const comments = post.comments;
        if (comments.length !== 0) {
            for (const comment of comments) {
                console.log(comment);
            }
        }
        console.log('No comments yet');
        return undefined;
    }
}

export const banUser = (currentAccount) => {
    if (currentAccount.userType === userType.ADMIN) {
        //some logic
    }
}

export const deleteComment = (currentAccount) => {
    if (currentAccount.userType === userType.ADMIN) {
        const id = readlineSync.question('Type id of post for delete comment: '); // Need add check for correct input
        const post = getPostById(Number(id)); //make sure if getPostId() not correct it stops here!
        const comments = post.comments;
        // some logic
    }
}