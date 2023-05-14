let arr: number[] = [7, 69, 2, 221, 8974];

//[1,3,5,7,9];
let min = 0;
let max = 0;

let arrNum: number [] =  arr.sort((n1,n2) => n1 - n2);

for(var i=0; i< arrNum.length - 1; i++) {
    min = min + arrNum[i];
}
for(var j=1; j < arrNum.length; j++) {
    max = max + arrNum[j];
}

console.log(min, ' ', max);