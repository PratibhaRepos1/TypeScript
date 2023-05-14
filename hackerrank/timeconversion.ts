let s: string = "12:45:54AM";

//split the string
let timeSplit = s.split(":", 3);
   let hours = (timeSplit[0]);
    let minutes: string = timeSplit[1];
    let seconds: string = timeSplit[2].substring(0,2);
    let addHousrs: number | string;
    let result: string;
      hours =  (hours == "12") ? "00" : hours;

    if(s.substring(s.length-2, s.length) === 'PM') {
   
     addHousrs = 12 + Number(hours);
     console.log(addHousrs);
     
    result = addHousrs + ":" + minutes + ":" + seconds;
    } else {
      
        result = hours + ":" + minutes + ":" + seconds;
    }
    
    console.log(result);




