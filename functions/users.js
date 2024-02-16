import readlineSync from 'readline-sync';
const dataOfUsers = [];
export const userType = {ADMIN: 'admin', MODERATOR: 'moderator', MEMBER: 'member'};
 
let id = 0;
export const registration = () => {
    const account = {};
    account.userID = id += 1;
    account.userName = readlineSync.question('Username: ');
    let email = readlineSync.question('Email: ');
    while (!checkEmail(email)) {
        email = readlineSync.question('Wrong email format, type correct again: ');
    }
    account.pass = readlineSync.question('Password: ');

    if (account.pass.endsWith('ADMIN')) {
        account.userType = userType.ADMIN;
    } else if (account.pass.endsWith('MODERATOR')) {
        account.userType = userType.MODERATOR;
    } else {
        account.userType = userType.MEMBER;
    }

    account.regDate = new Date().toLocaleString("ru-EU", { timeZone: "Europe/Moscow" })

    dataOfUsers.push(account);

    console.log('\nRegistration succesfully!')
    return dataOfUsers;
}

export const login = (currentAccount) => {
    if (currentAccount) {
        if (dataOfUsers.length !== 0) {
        const userNameOrEmail = readlineSync.question('Type your email or username: ');
        const pass = readlineSync.question('Type password: ')
            for (const user of dataOfUsers) {
                if ((user.userName === userNameOrEmail || user.email === userNameOrEmail) && user.pass === pass) {
                    console.log('\nYou logged in account!');
                    return user;
                }
            }
            console.log('\nWrong data!')
            return undefined;
        }
        console.log('\nRight now we have no accounts in our data base!');
        return undefined;
    }
    console.log('\nYou\'re already logged in!');
    return currentAccount;
}

export const logout = (currentAccount) => {
    if (!isEmpty(currentAccount)) {
        console.log('You logged out!')
        return {};
    }
    console.log('\nYou\'re not logged in account!');
    return currentAccount;
}

export const isEmpty = (obj) => {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}

const checkEmail = (email) => {
    const pattern = /\b[A-Za-z0-9._%+-]+@(?:mail\.ru|gmail\.com)\b/;

    return pattern.test(email);
}