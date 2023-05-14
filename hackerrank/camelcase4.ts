/*
Camel Case is a naming style common in many programming languages. 
In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter 
(example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format

Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed
by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split 
into a space-delimited list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters 
that you need to combine into the appropriate camel case String. 
Methods should end with an empty set of parentheses to differentiate them from variable names.
Output Format

For each input line, your program should print either the space-delimited list of words (in the case of a split operation) 
or the appropriate camel case string (in the case of a combine operation).
Sample Input

S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame

Sample Output



Explanation

Use Scanner to read in all information as if it were coming from the keyboard.
Print all information to the console using standard output (System.out.print() or System.out.println()).
Outputs must be exact (exact spaces and casing).
*/

let input = 'S;V;iPad';
/* 
1. S;M;plasticCup() --> plastic cup
4. S;C;LargeSoftwareBook --> large software book
6. S;V;pictureFrame --> picture frame

2. C;V;mobile phone --> mobilePhone
3. C;C;coffee machine --> CoffeeMachine
5. C;M;white sheet of paper --> whiteSheetOfPaper()


*/
camelCaseFun(input);


function camelCaseFun(input: string) : string {
    let result = '';
    //step 1: split by ';'

    let str = input.split(';', 3);
    let uppercasePosition = 0;
    // step2: check: operation will either be S (split) or C (combine)

    if(str[0] === 'S') {
        //operation S - split
        if(str[1] === 'M') {
            let words = str[2];
            for(let i =0; i < words.length; i++) {
                if(words[i] == words[i].toUpperCase()) {
                   uppercasePosition = i;
                   break;
                }
            }
            result = str[2].substring(0,uppercasePosition) + ' ' + str[2].substring(uppercasePosition, str[2].length - 2).toLowerCase();
        } else if(str[1] === 'C' || str[1] === 'V') {
            let words = str[2];
            let wordsArr = str[2].split(/(?=[A-Z])/);
            for(let i=0; i < wordsArr.length; i++) {
                if(i <= 0) {
                    result = result + wordsArr[i].toLowerCase();
                } else {
                    result = result + ' ' + wordsArr[i].toLowerCase();
                }
                
            }
        }

    } 
    //operation C - Combine
    else {
        if(str[1] === 'M') {
            let words = str[2].split(' ');
             let uWords = '';
            for(let i=0; i< words.length; i++) {
                if(i == 0) {
                     uWords = words[i].toLowerCase();
                 }
                 else if(i > 0) { 
                        uWords = uWords + uppcaseWords(words[i]);
                 }
            }
            result = uWords + '()';

        } else if(str[1] === 'V') {
              let words = str[2].split(' ');
              let uWords = '';
              for(let i=0; i< words.length; i++) {
                 if(i == 0) {
                     result = words[i];
                 }
                 else if(i > 0) {
                     uWords = uWords + uppcaseWords(words[i]);
                     //words[i].charAt(0).toUpperCase() + words[i].slice(1);
                 }
              }
              result = result + uWords;
         } else if(str[1] === 'C') { 

             let words = str[2].split(' ');
              let uWords = '';
              for(let i=0; i< words.length; i++) {
                     uWords = uWords + uppcaseWords(words[i]);
              }
              result = result + uWords;

         }
    }
    console.log(result);
    return result;
}

function uppcaseWords(str:string):string {
let uppcaseWords = '';
uppcaseWords = uppcaseWords + str.charAt(0).toUpperCase() + str.slice(1);
return uppcaseWords;
}
