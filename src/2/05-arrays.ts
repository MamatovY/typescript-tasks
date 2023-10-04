const numbers = [1, 2, 3, 4]
const strs: string[] = []
const strs2: Array<string> = []
strs.push('dsd')

const cars: Car[] = []
cars.push({ brand: 'Audi', wheels: 4, type: '' })

const arrOfArr: string[][] = []
arrOfArr.push(['sa', '2'])

function printArr(arr: unknown[]): void {
    arr.forEach((el, index) => {
        console.log(el, index);
    })
}