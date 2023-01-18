function addShipping(price: number, shipping: number) : number {
    return price + shipping;
}

console.log(addShipping(10,5));

//array
let arr = [4, 'luis'];

//interface

interface IAccount {
    name:string,
    age:number,
    status?:string,
    deposit?: () => void
};

const account: IAccount = {
    name: 'luis',
    age: 24
};

let accounts: IAccount[];

class IvestmentAccount implements IAccount {
    
    constructor(public name, public age) {

    }
    private withdraw() {
        
    }
}



