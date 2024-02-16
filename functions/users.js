import readlineSync from 'readline-sync';
const dataOfUsers = [];
const userType = {ADMIN: 'admin', MODERATOR: 'moderator', MEMBER: 'member'};
 
export const registration = () => {
    const o = {};
    o.userName = readlineSync.question('Username: ');
    o.email = readlineSync.question('Email: '); // do regexp for correct email
    o.pass = readlineSync.question('Password: ');
    if (o.pass.endsWith('ADMIN')) {
        o.userType = userType.ADMIN;
    } else if (o.pass.endsWith('MODERATOR')) {
        o.userType = userType.MODERATOR;
    } else {
        o.userType = userType.MEMBER;
    }
    o.regDate = new Date().toLocaleString("ru-EU", { timeZone: "Europe/Moscow" })
    dataOfUsers.push(o);
    console.log('\nRegistration succesfully!')
    return dataOfUsers;
}

export const login = () => { // giving a current account ({}) if already logged in, return 'Already logged in account!'
    const userNameOrEmail = readlineSync.question('Type your email or username: ');
    const pass = readlineSync.question('Type password: ')
    if (dataOfUsers.length !== 0) {
        for (const user of dataOfUsers) {
            if ((user.userName === userNameOrEmail || user.email === userNameOrEmail) && user.pass === pass) {
                console.log('\nYou logged in account!');
                return user;
            }
        }
        
        return '\nWrong data!';
    }
    return '\nRight now we have no accounts in our data base!';
}

export const logout = (currentAccount) => { // giving current account ({some data...}) if account is {} return 'You not logged in account!'
    console.log('You logged out!')
   return currentAccount = {};
}
