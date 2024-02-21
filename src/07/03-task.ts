export class Rectangle {
    constructor(public width: number, public height: number) { }

    area() {
        return this.height * this.width;
    }

    private log() {
        console.log(`Create at ${new Date()}`);
    }
}

class Square extends Rectangle {
    constructor(public width: number, public color: string) {
        super(width, width);
    }

    parseInt(newColor: string) {
        this.color = newColor
    }
}