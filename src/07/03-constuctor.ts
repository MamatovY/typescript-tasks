export class Vehicle {
    drive(speed: number): void {
        console.log('drive', speed.toFixed());
    }
    stop() {
        console.log('stop');
    }
    log(speed: number) {
        console.log('log', speed);
    }
    alternativeLog(text: string) {
        console.log(text.toUpperCase());
    }
}

export class Car extends Vehicle {


    constructor(public readonly color: string, public maxSpeed: number) {
        super();
    }
}

const car1 = new Car('red', 100)

