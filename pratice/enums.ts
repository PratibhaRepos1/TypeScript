//Declaring an enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

//accessing enum

let dir: Direction = Direction.Up;

console.log(dir);
console.log(Direction[0]);

enum Direction1 {
    Up1 = 1,
    Down1,
    Left1 =6,
    Right
}

console.log(Direction1.Left1);

//let sum = (x:number, y:number) => x + y;

let sum = (x:number, y:number) => { return  x + y };

enum Color { Red, Green, Blue }
