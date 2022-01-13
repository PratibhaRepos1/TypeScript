class Vehicle {
    drive():void{
        console.log("Fast Drive");
    }
    honk(){
        console.log("Beep Beep");
    }
}
class Car extends Vehicle{
    //derived method
    drive(): void {
        console.log("Slow Drive");
    }
}

const vehicle = new Vehicle();
vehicle.honk();
vehicle.drive();

const car = new Car();
car.drive();