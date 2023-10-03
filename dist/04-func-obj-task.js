"use strict";
const user1 = {
    email: 'yym@csa',
    login: 'MY',
    password: '1234',
    isOnline: true,
    lastVisited: new Date()
};
const user2 = {
    email: 'ydsaym@csa',
    login: 'Acs',
    password: '1234',
    isOnline: false,
    lastVisited: new Date(),
    role: 'Admin'
};
console.log(user2.lastVisited);
function loginFunc(user) {
    if (user.login && user.password) {
        console.log(`Привет, ${user.login}`);
    }
}
loginFunc(user1);
