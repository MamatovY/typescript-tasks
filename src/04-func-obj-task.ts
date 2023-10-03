

interface User {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date
}

interface Admin {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
    role: string
}

const user1: User = {
    email: 'yym@csa',
    login: 'MY',
    password: '1234',
    isOnline: true,
    lastVisited: new Date()
}
const user2: Admin = {
    email: 'ydsaym@csa',
    login: 'Acs',
    password: '1234',
    isOnline: false,
    lastVisited: new Date(),
    role: 'Admin'
}

console.log(user2.lastVisited);

function loginFunc(user: { login: string, password: string }): void {
    if (user.login && user.password) {
        console.log(`Привет, ${user.login}`);
    }
}

loginFunc(user1)