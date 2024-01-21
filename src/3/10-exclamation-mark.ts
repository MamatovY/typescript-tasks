//Оператор !
let word: string | null = null
const num = 10

if (num > 5) {
    word = 'abc'
}

console.log(word!.toLocaleUpperCase());

function printName(name?: string) {
    const fullName: string = name!
}

interface Person {
    name: string,
    age: number,
    gender: 'male' | 'female'
}

function printName2(person?: Person) {
    console.log(person!.name);
}

const people: Person[] = [
    {
        name: 'Gran',
        age: 70,
        gender: 'female'
    },
    {
        name: 'Gran2',
        age: 70,
        gender: 'male'
    },
    {
        name: 'Gran3',
        age: 70,
        gender: 'female'
    }
]

const femalePeople = people.find(person => person.gender === 'female')!