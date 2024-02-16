import { registration, login, logout } from './functions/users.js';
import readlineSync from 'readline-sync';

const program = () => {
    let input;
    let currentAccount = {};
    console.log('Type command (/help for see commands)\n');
    while(input !== '/exit') {
        input = readlineSync.question('command: ')
        switch (input) {
            case '/registration': 
                registration();
                break;
            case '/login': 
                currentAccount = login();
                console.log(currentAccount)
                break;
            case '/logout': 
                currentAccount = logout();
                console.log(currentAccount)
                break;
            case '/exit':
                break;
            case '/help':
                console.log('/registration - Регистрация \n/login - вход в аккаунт \n/logout - выйти из аккаунта');
                break;
            default: console.log('Unknown command\n');
        }
    }
};

program();