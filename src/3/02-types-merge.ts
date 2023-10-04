type Union1 = 'a' | 'b' | 'c' | 'd'
type Union2 = 'a' | 'e' | 'c' | 'f'
type Union3 = Union1 | Union2 //All variant - "a" | "b" | "c" | "d" | "e" | "f"
type Union4 = Union1 & Union2 //Похожие варианты - "a" | "c"

//С объектами всё наоборот. В отличии от юноинов знак & в объекте объединяет
type Union = { a: string, b: string, c: number } & { a: string, t: boolean, z: null }



type User = {
    readonly email: string,
    readonly login: string,
    password: string
}

type Person = {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number
}

type Employee = {
    contractStart: Date
} & User & Person

type Developer = {
    skills: string[],
    phone: string,
    level?: 'junior' | 'middle' | 'senior',
    say(): void,
    code?: (arg: string) => string
} & Employee

