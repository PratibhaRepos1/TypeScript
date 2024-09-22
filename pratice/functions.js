//How do you define a function with a return type in TypeScript?
function add(a, b) {
    return a + b;
}
var result = add(2, 3);
console.log(result);
//functions with void return type
function logMessage(err) {
    console.log(err);
}
logMessage('error occured!');
function createUser(name, age) {
    return { name: name, age: age };
}
var user = createUser("Alice", 30);
console.log(user);
//function with a Tuple Return Type
function getCoordinates() {
    return [40.9889, -74.067677];
}
var coordinates = getCoordinates();
console.log(coordinates);
