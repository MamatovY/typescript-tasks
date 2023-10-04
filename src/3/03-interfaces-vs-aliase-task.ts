interface IProduct {
    price: number,
    isNew: boolean,
    isSale: number,
    title: string
}

interface IVehicle {
    wheels: number,
    year: Date,
    brand: string
}

interface ICar extends IVehicle, IProduct {
    type: string,
    model: string
}


type Product = {
    price: number,
    isNew: boolean,
    isSale: number,
    title: string
}

type Vehicle = {
    wheels: number,
    year: Date,
    brand: string
}

type Cars = {
    type: string,
    model: string
} & Vehicle & Product

