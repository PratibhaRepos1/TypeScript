//string Enum
enum CardinalDirections {
    North = 'North',
    East = 'East',
    South = 'South',
    West = 'West',
}

let currentDirection = CardinalDirections.East;

console.log(currentDirection);

// Numeric Enum: Fully Initialize

enum StatusCodes {
    NotFound =404,
    Success =200,
    Accepted =202,
    BadRequest =400,
}

console.log(StatusCodes.Accepted);