import { registration, login, logout } from './functions/users.js';
import { makePost, likePost, editPost, deletePost, commentPost } from './functions/postFunctions.js';
import readlineSync from 'readline-sync';

const program = () => {
    let input;
    let currentAccount = {};
    console.log('Type command (/help for see commands)\n');
    while(input !== '/exit') {
        input = readlineSync.question('command: ')
        switch (input) {
            case '/reg': 
                registration();
                break;
            case '/login': 
                currentAccount = login(currentAccount);
                console.log(currentAccount)
                break;
            case '/logout': 
                currentAccount = logout(currentAccount);
                console.log(currentAccount)
                break;
            case '/makePost':
                console.log(makePost(currentAccount)); //delete this after check func
                break;
            case '/editPost': 
                console.log(editPost(currentAccount));
            case '/exit':
                break;
            case '/help':
                console.log('/reg - Регистрация \n/login - вход в аккаунт \n/logout - выйти из аккаунта');
                break;
            default: console.log('Unknown command\n');
        }
    }
};

program();