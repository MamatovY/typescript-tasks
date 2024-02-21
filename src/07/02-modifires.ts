export class Vehicle {
    public drive(speed: number): void {
        console.log('drive', speed.toFixed());
    }
    public stop() {
        console.log('stop');
    }
    private log(speed: number) {
        console.log('log', speed);
    }
    protected alternativeLog(text: string) {
        console.log(text.toUpperCase());
    }
}


class Car extends Vehicle {
    public changeSpeed(speed: number) {
        this.drive(speed)
        this.alternativeLog('speed')
    }
}

const car1 = new Car()

car1.changeSpeed(100)
car1.drive(12)
