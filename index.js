const chalk = require('chalk');
let moment = require('moment');
moment().format();
moment().isDST();


let current_time = new moment().format("LLLL"); //first
let now = moment(new Date()); //second
let end = moment("2017-01-01");
let duration = moment.duration(now.diff(end));
let days = Math.round(duration.asDays());

let secondStart = moment ("2017-14-08");
let secondDuration = moment.duration(now.diff(end));
let secondTotal = Math.round(duration.asSeconds());

function daylight() {
  (now.isDST()) ? console.log('It ' + chalk.green('is') + ' during Daylight Savings Time.') : console.log('It ' + chalk.red('is not') + ' during Daylight Savings Time.');
}

function leap() {
  (now.isLeapYear()) ? console.log('It' + chalk.green('is') + ' a leap year.') : console.log('It ' + chalk.red('is not') + ' a leap year.') ;
}

console.log("It is " + chalk.blue(current_time)+ ".");
console.log(chalk`It is the {red ${days}th} day of the year.`);
console.log(chalk`It is {cyan ${secondTotal}} seconds into the day.`);
daylight();
leap();
