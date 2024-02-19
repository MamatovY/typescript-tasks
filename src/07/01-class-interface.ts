interface ICar {
    go(speed: number): void
}

export class Car implements ICar {
    go(speed: number) {
        console.log('go', speed.toFixed());
    }
    stop() {
        console.log('stop');
    }
}

const car = new Car