const chalk = require('chalk');
var moment = require('moment');
moment().format();


let current_time = new moment().format("LLLL");
let beginning = moment("January 1, 2017").format("LLLL");
let difference = current_time - beginning;


console.log(`It is ${current_time}.`);
console.log(`It is the ${difference} day of the year`); //number is the count of days
console.log(`It is number seconds into the day`);//number is the count of seconds in today
console.log(`It is during Daylight Savings Time`);//assuming is in reference to whether it's DSL
console.log(`It is not a leap year`);//is not is checking if it's currently a leap year
