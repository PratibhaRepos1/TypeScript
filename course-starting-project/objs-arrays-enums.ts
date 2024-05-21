// object type in TS
//Array type in TS
// Tuples type in TS
// Enums type in TS

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Pratibha',
//     age: 30,
//     hobbies: ['Cooking', 'Reading'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN=5, READ_ONLY, AUTHOR };

const person = {
    name: 'Pratibha',
    age: 30,
    hobbies: ['Cooking', 'Reading'],
    role: Role.ADMIN
};


//person.role.push('admin');
//person.role[1] = 10;

//person.role = [0, 'admin'];


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN) {
    console.log('is admin')
}