function head(value: string): string
function head(value: number[]): number
function head(value: boolean[]): boolean


function head(value: any): any {
    return value[0]
}

const x = head([0, 3, 5])
