//Write a function that takes a string as input and returns the string reversed.

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));
