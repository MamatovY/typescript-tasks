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