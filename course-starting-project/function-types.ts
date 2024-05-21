function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);

}

printResult(add(5,12));

//function as types
let combineValues:Function;

 combineValues = add;
console.log(combineValues(3,4));


