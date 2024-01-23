export function append<T>(el: T, list: T[]): T[] {
    return list.concat(el)
}

append(1, [2, 3])
append('132', ['323'])