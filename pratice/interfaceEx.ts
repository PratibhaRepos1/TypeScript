//define interface
interface Person {
    readonly id: number;
    name: string;
    age: number;
    greet?: () => void;

}

//using an interface

const person: Person = {
    id:1,
    name: "Alice",
    age: 30,
    greet: () => {
        console.log('Hi');
    }
}

function printPerson(person: Person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    //person.greet();
}

printPerson(person);

interface Employee extends Person {
    empId: number;
    department: string;
}

const employee: Employee = {
    id: 11,
    name: "Bob",
    age: 25,
    empId: 123,
    department: "IT",
    greet: () => {
        console.log('Hey');
    }
}