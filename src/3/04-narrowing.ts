function example1(x?: number | string) {
    if (typeof x === 'string') {
        x.toUpperCase()
    } else if (typeof x === 'number') {
        x.toFixed()
    } else if (x === undefined) {
        console.log('no value');
    } else {
        x //never
    }
}

function example2(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {
        strs.concat([])
    } else if (typeof strs === 'string') {
        strs.toLowerCase()
    }
}