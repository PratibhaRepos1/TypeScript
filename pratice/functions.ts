//How do you define a function with a return type in TypeScript?

function add(a: number, b:number): number {
    return a+b;
}
let result = add(2,3);
console.log(result);

//functions with void return type
function logMessage(err:string): void {
    console.log(err);
}
logMessage('error occured!');

//function with an object return type
interface User {
    name:string;
    age:number;
}

function createUser(name,age): User {
    return {name, age}
}

let user = createUser("Alice", 30);
console.log(user);

//function with a Tuple Return Type
function getCoordinates(): [number,number] {
    return [40.9889, -74.067677]
}

let coordinates = getCoordinates();
console.log(coordinates);
