/*
Write a function that takes an array of numbers and returns the largest number in the array.
*/
function findMax(numbers) {
    return Math.max.apply(Math, numbers);
}
console.log(findMax([45, 3, 99, 33]));
