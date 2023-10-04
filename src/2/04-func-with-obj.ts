function printPoint(point: { x: string, y: string }): void {
    console.log(`x: ${point.x} ${point.y}`);
}

const obj1 = {
    x: '1',
    y: '2'
}

printPoint(obj1)

const obj2 = {
    x: '1',
    y: '2',
    z: '4'
}

printPoint(obj2)