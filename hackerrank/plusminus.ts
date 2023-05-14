let arr = [1, 1, 0, -1, -1];
let n = arr.length;
let positive: number = 0;
let negative: number = 0;
let zeros: number = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
        negative += 1;
    } 
    else if(arr[i] > 0 ) {
        positive += 1;
    } else {
        zeros += 0;
    }
}


positive = (positive / n);
negative = (negative / n);
zeros = (zeros / n);

console.log(positive, negative, zeros);


