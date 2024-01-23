type TypeFactory<T> = T
type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>

export function toArray<T>(...arg: T[]): T[] {
    return arg
}

toArray(1, 2, 3)
const a = toArray('sda', 'dsad', 'dsda')


function head(value: string): string
function head(value: readonly []): undefined
function head<T>(value: readonly T[]): T
function head(value: any): any {
    return value[0]
}

const head1 = <T>(value: T[]): T => value[0]

interface ModelData<T> {
    title: string,
    value: T,
}

const obj1: ModelData<number> = {
    title: '1dsadas',
    value: 213
}

const obj2: ModelData<Array<number>> = {
    title: '1dsadas',
    value: [323]
}