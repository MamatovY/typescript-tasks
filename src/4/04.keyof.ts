type WindowProp = keyof Window

const windowProp: WindowProp = 'ontoggle'

interface PC {
    brand: string,
    year: string
}

type Typ1 = keyof PC

const typ1: Typ1 = 'year'

type Tup1 = keyof [string, number]

const tup1: Tup1 = '0'