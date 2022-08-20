import { customcar } from './customcar';
import { valueHolder } from './valueHolder';

// basic types in TS
const myName: string = 'pratibha';
const data: any = undefined;
const ten: number = 10;
const negative: number = -99;
const decimal: number = 35.564654;
const isEntered: boolean = true;
const nothinghere: null = null;
const noDefination: undefined = undefined;

//functions
const add = (a:number, b:number) => {
    return a + b;
}
console.log(add(2,5));

const joinString = function (a: string, b: string):string  {
    return a + ' ' +  b;
}

console.log(joinString('Pratibha', 'Jadhav'));

// const post = {
//     title: 'Latest Typescript News',
//     daysOld: 10,
//     published: true
// };

// const printPost = (postToPrint:any) => {
//     return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// }

//console.log(printPost);

//Interface
interface Post {
    title:string,
    daysOld: number,
    published: boolean
}

const post = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true
};

const printPost = (postToPrint:Post) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
}

console.log(printPost(post));

//classes and Properties
class Car {
    color:string;
    private year:number;
    constructor(color:string, year:number) {
        this.color = color;
        this.year = year;
    }
    drive(){
        console.log(this.year);
        console.log('Vroom');
        this.manageGear();
    }
    private manageGear() {
        console.log('Alert! You are in 5th Gear!');
    }
}

const myCar = new Car('red', 2015);
myCar.drive();
//myCar.manageGear() // error as its a private function
console.log(myCar.color);

//	Enabling the Decorator support

const Component = (target: any) => {
    console.log(target);
}

// @Component
// class Fruit {}

//Module System

const custom = new customcar();
console.log(custom.year);


interface Driveable {
    speed: number;
    drive(): string;
}

class pCar implements Driveable {
    speed = 10;
    drive() {
        return `I am driving ar ${this.speed}`;
    }
}

const objCar = new pCar();

const startDriving = (vehicle: Driveable) => {
    vehicle.drive();
};

console.log(objCar.drive());

//Class Generics

const numberholder = new valueHolder<number>();
numberholder.value = 10;

const stringholder = new valueHolder<string>();
stringholder.value = 'My Generics Class';

const booleanholder = new valueHolder<boolean>();
booleanholder.value = true;

console.log(numberholder.value);
console.log(stringholder.value);
console.log(booleanholder.value);