const today = new Date();
class color {
    shade:'red';
    id:101
};

const c = new color;
//type annotations
let apples: number = 5;

let speed: string = 'fast';
 let hasName: boolean = true;
 let nothingMuch: null = null;
 let nothing: undefined = undefined;

 //built in object

 const todaydate = new Date();

 //array - annotation
 let colours: string[] = ['red', 'green', 'blue'];

 let myNumbers: number[] = [1,2,3];

 //class annotations

 class Car {

 }

 let car:Car = new Car();

  //object annotations
  let point:{x:number; y:number} = {
      x:10,
      y:20
     // z:30 //annotations error is here
  };

 //function annotations
 const logNumber = (i) => {
    console.log(i);
 }

 //variable whose type can not be inferred correctly
 let numbers = [-1,-12, 12];
 let numbersAboveZero: boolean | number = false;
 for(let i = 0; i < numbers.length; i++){
     if(numbers[i] > 0)
     numbersAboveZero = numbers[i]; //Type 'number' is not assignable to type 'boolean'. so use one more type here to avoid this error
     console.log(numbersAboveZero);
 }

