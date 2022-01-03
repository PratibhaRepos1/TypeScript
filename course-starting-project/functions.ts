//type annotations and type inference
//creating function
const add = (a:number,b:number) =>{
    return a+b;
}

const substraction = (a:number,b:number) =>{
    return a-b;
}

function divide(a:number,b:number):number{
    return a/b;
}

const Multiplication = function (a:number,b:number) {
    return a*b;
}

//return type void

const logger = (message:string) =>{
console.log(message);
}

const ThrowError = (message:string):never =>{
    throw new Error(message);
}

const forcast = {
    date:new Date(),
    weather:'sunny'
}

const logWeather =(forcast: {date:Date, weather:string}): void => {
    console.log(forcast.date);
    console.log(forcast.weather);
}

logWeather(forcast);
