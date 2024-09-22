/* 
Write a function that takes an array of numbers and returns the largest number in the array.
*/

function findMax(numbers: number[]): number {
    return Math.max(...numbers);
}

console.log(findMax([45,3,99,33]));

var x: number = 12;
let w = 23;
function add(a: number, b: number): number { return a + b; }
let arr: Array<number> = [1, 2, 3];
type I = { name: string; age: number; }
//class Person { Person(name: string) { this.name = name; } }
class Person { constructor(public name: string) {} }