
let userInput: unknown;
let userName: string;

userInput = 8;
userInput = 'King';

if(typeof userInput === 'string') {
    userName = userInput;
    console.log(userName);
}

function generateError(message:string, code: number): never {
    throw {message: message, errorCode: code}
}

const result = generateError('An error occurred!', 500);
console.log(result);

