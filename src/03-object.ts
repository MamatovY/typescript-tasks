
interface Car {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,
    name?: string
}

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'M5',
    isNew: false
}

const car2: Car = {
    brand: 'MERCEDES',
    type: 'S-CLASS',
    wheels: 3
}