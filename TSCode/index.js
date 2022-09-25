"use strict";
exports.__esModule = true;
var customcar_1 = require("./customcar");
var valueHolder_1 = require("./valueHolder");
// basic types in TS
var myName = 'pratibha';
var data = undefined;
var ten = 10;
var negative = -99;
var decimal = 35.564654;
var isEntered = true;
var nothinghere = null;
var noDefination = undefined;
//functions
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 5));
var joinString = function (a, b) {
    return a + ' ' + b;
};
console.log(joinString('Pratibha', 'Jadhav'));
var post = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true
};
var printPost = function (postToPrint) {
    return "".concat(postToPrint.title, " (").concat(postToPrint.daysOld, " days old)");
};
console.log(printPost(post));
//classes and Properties
var Car = /** @class */ (function () {
    function Car(color, year) {
        this.color = color;
        this.year = year;
    }
    Car.prototype.drive = function () {
        console.log(this.year);
        console.log('Vroom');
        this.manageGear();
    };
    Car.prototype.manageGear = function () {
        console.log('Alert! You are in 5th Gear!');
    };
    return Car;
}());
var myCar = new Car('red', 2015);
myCar.drive();
//myCar.manageGear() // error as its a private function
console.log(myCar.color);
//	Enabling the Decorator support
var Component = function (target) {
    console.log(target);
};
// @Component
// class Fruit {}
//Module System
var custom = new customcar_1.customcar();
console.log(custom.year);
var pCar = /** @class */ (function () {
    function pCar() {
        this.speed = 10;
    }
    pCar.prototype.drive = function () {
        return "I am driving ar ".concat(this.speed);
    };
    return pCar;
}());
var objCar = new pCar();
var startDriving = function (vehicle) {
    vehicle.drive();
};
console.log(objCar.drive());
//Class Generics
var numberholder = new valueHolder_1.valueHolder();
numberholder.value = 10;
var stringholder = new valueHolder_1.valueHolder();
stringholder.value = 'My Generics Class';
var booleanholder = new valueHolder_1.valueHolder();
booleanholder.value = true;
console.log(numberholder.value);
console.log(stringholder.value);
console.log(booleanholder.value);
