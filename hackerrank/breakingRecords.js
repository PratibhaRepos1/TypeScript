function breakingRecords(scores) {
    var currentHigh = scores[0];
    var currentLow = scores[0];
    var highCount = 0;
    var lowCount = 0;
    for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
        var score = scores_1[_i];
        if (score > currentHigh) {
            currentHigh = score;
            highCount += 1;
        }
        else if (score < currentLow) {
            currentLow = score;
            lowCount += 1;
        }
    }
    console.log([highCount, lowCount]);
    return [highCount, lowCount];
}
var scores = [12, 24, 10, 24];
breakingRecords(scores);
