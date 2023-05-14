
function breakingRecords(scores: number[]) : number[] {
    let currentHigh = scores[0];
    let currentLow = scores[0];
    let highCount = 0;
    let lowCount = 0;

    for(let score of scores) {
        if(score > currentHigh) {
            currentHigh = score;
            highCount +=1;
        } else if (score < currentLow) {
            currentLow = score;
            lowCount +=1;
        }

    }
    console.log([highCount, lowCount]);
    return [highCount, lowCount];

}
let scores: number[] = [12,24,10,24];

breakingRecords(scores);