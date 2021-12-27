console.log('Your code goes here and here again...');
function add(n1: number,n2:number, showResult: boolean, phrase: string){
   // console.log(typeof(n1));
//    if(typeof n1 !== 'number' || typeof n2 !== 'number')
//    {
//       throw new Error('Incorrect input!');
//    }
const result = n1 + n2;
        if(showResult){
            console.log(phrase + result);
        }
        else{
            return n1 + n2;
        }
   
}

const num1 = 2;
const num2 = 3.5;
const printResult = true;
const phraseResult = 'Result is: ';

add(num1, num2, printResult, phraseResult);
//console.log(result);