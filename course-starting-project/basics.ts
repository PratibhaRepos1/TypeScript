console.log('Your code goes here!');
//core types in typescript: number, boolen, string
// all in lowercase

// type assignment & type Inference (in built feature: type inference)

function addNums(n1: number, n2:number, showResult:boolean, phrase: string) {

    let result = n1 + n2;

    if(showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8; // type infer
const printsResult = true;
const resultPhrase = 'Result is: ';

addNums(number1, number2, printsResult, resultPhrase);



