var s = "12:45:54AM";
//split the string
var timeSplit = s.split(":", 3);
var hours = (timeSplit[0]);
var minutes = timeSplit[1];
var seconds = timeSplit[2].substring(0, 2);
var addHousrs;
var result;
hours = (hours == "12") ? "00" : hours;
if (s.substring(s.length - 2, s.length) === 'PM') {
    addHousrs = 12 + Number(hours);
    console.log(addHousrs);
    result = addHousrs + ":" + minutes + ":" + seconds;
}
else {
    result = hours + ":" + minutes + ":" + seconds;
}
console.log(result);
