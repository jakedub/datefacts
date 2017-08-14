const chalk = require('chalk');
let moment = require('moment');
moment().format();


let current_time = new moment().format("LLLL"); //first
let now = moment(new Date()); //second
let end = moment("2017-1-1");
let duration = moment.duration(now.diff(end));
let days = Math.round(duration.asDays());

let secondStart = moment ("2017-14-08");
let secondDuration = moment.duration(now.diff(end));
let secondTotal = Math.round(duration.asSeconds());


console.log(`It is ${current_time}.`);
console.log(`It is the ${days}th day of the year`); //something broken but correct
console.log(`It is ${secondTotal} seconds into the day`);//number is the count of seconds in today
console.log(`It is during Daylight Savings Time`);//assuming is in reference to whether it's DSL
console.log(`It is not a leap year`);//is not is checking if it's currently a leap year
