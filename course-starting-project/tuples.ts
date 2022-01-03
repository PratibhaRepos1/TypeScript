//Tuples in typescript
const drink = {
    color:'brown',
    corbohydrated: true,
    sugar:40
};

type Drink = [string, boolean, number];

const Pepsi: Drink =['brown', true, 40];
const sprite: Drink = ['clear', true, 13];
const Tea: Drink = ['brown', false, 0]
