function len<T extends { length: number }>(arg: T): number {
    return arg.length
}

len('asdfsa')
len([1, 2, 3])
len({ length: 12 })