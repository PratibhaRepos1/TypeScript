/*
    Write a function that takes an array of numbers and returns the sum of all the numbers.
*/

function sumArray(arr:number[]): number {
    let result =0;

    for(let i=0; i< arr.length; i++) {
        result = result+ arr[i];

    }
    return result;

}


console.log(sumArray([1,2,3]));