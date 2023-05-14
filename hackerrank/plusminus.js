var arr = [1, 1, 0, -1, -1];
var n = arr.length;
var positive = 0;
var negative = 0;
var zeros = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negative += 1;
    }
    else if (arr[i] > 0) {
        positive += 1;
    }
    else {
        zeros += 0;
    }
}
positive = (positive / n);
negative = (negative / n);
zeros = (zeros / n);
console.log(positive, "/n", negative, "/n", zeros);
