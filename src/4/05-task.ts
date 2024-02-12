export function keys<O extends object>(obj: O): Array<keyof O> {
    const currentKeys = []

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) currentKeys.push(key)
    }

    return currentKeys
}

export function value<O extends object>(obj: O): Array<O[keyof O]> {
    const currentValues = []
    for (let key in obj) {
        currentValues.push(obj[key])
    }

    return currentValues
}

const obj2 = { a: 1, b: 2, c: 3 }

keys(obj2)

value(obj2)