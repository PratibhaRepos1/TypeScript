//using an interface
var person = {
    name: "Alice",
    age: 30,
    greet: function () {
        console.log('Hi');
    }
};
function printPerson(person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    person.greet();
}
printPerson(person);
