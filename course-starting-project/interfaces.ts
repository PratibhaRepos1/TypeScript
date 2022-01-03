interface Vehicle {
    name:string,
    year: number,
    broken: boolean,
    sumarry():string;
}

const Skoda = {
    name:'Rapid',
    year: 2021,
    broken: true,
    sumarry():string{
        return `Name: ${this.name}`;
    }
}

const printVehicle = (vehicle:Vehicle): void =>{
    console.log(`Name: ${vehicle.name}`);
    console.log(`year: ${vehicle.year}`)
    console.log(`broken: ${vehicle.broken}`)
    console.log(vehicle.sumarry());
    }

    printVehicle(Skoda);

    //interfaces help to reuse of the code
interface Reportable{
    summary(): string;
}

const Honda = {
    name:'Creta',
    year: 2021,
    broken: true,
    summary():string{
        return `Name: ${this.name}`;
    }
}
const drinks = {
    color:'brown',
    corbohydrated: true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printsummary = (item:Reportable): void =>{
   
    console.log(item.summary());
    }

    printsummary(Honda);
    printsummary(drinks);