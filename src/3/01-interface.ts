
interface User {
    readonly email: string,
    readonly login: string,
    password: string
}

interface User {
    isOnline?: boolean
}

interface Person {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number
}

interface Employee extends User, Person {
    contractStart: Date
}

export interface Developer extends Employee {
    skills: string[],
    phone: string,
    level?: 'junior' | 'middle' | 'senior',
    say(): void,
    code?: (arg: string) => string
}