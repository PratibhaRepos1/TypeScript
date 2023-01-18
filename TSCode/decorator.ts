
function MenuItem(itemID: string) {
    
    return (target: Function) => {
    target.prototype.id = itemID;
    }
}

@MenuItem('b')
class Pizza {
    id:string;
}

console.log(new Pizza().id);

class Burger {
    id:string;
}

