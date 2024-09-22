/*
tuples is fixed-length  array where element can have different type.
*/

//declaring tuple
let myTuple: [string, number];
//initalizing and using a Tuple

myTuple = ['Hello', 23];

console.log(myTuple[0]);
console.log(myTuple[1]);

//tuples with an optional element
let optionalTuples: [string, number?];
optionalTuples = ['elong'];
optionalTuples = ['elong', 3];

//Tuple with a rest element
let restTuple: [string, ...number[]];

restTuple = ['gg'];
restTuple = ['gg', 1,2,3];

