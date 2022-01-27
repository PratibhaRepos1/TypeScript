class Vehicle {
    //color: string = 'red'; //refactor
    constructor(public color: string) {
        // this.color = color; //refactor

    }
    drive1(): void {
        console.log(this.color);

        console.log("Fast Drive");
    }
    protected honk() {
        console.log("Beep Beep");
    }
}
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    //derived method
    private drive(): void {
        console.log("Slow Drive");
    }
    startDriving(): void {
        this.drive();
        this.honk();
    }

}

const vehicle = new Vehicle('orange');
//vehicle.honk();
vehicle.drive1();

const car = new Car(4, 'pink');
car.startDriving();