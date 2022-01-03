const carMakers = ['Ford', 'BMW','Skoda'];
for(let i=0; i<carMakers.length; i++){
    console.log(carMakers[i]);
}
const day = new Date();
const dates = [new Date(), day.getDay()]
console.log(dates[0], ' and day is ', dates[1]); 

//flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2022-01-03');
importantDates.push(new Date());