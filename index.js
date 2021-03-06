const chalk = require('chalk');
let moment = require('moment');
moment().format();
moment().isDST();


let current_time = new moment().format("LLLL"); //first
let now = moment(new Date()); //second
let end = moment("2017-01-01");
let duration = moment.duration(now.diff(end));
let days = Math.round(duration.asDays());

let hour = now.format('H');
let minute = now.format('m');
let second = now.format('s');
let secondTotal = hour * minute + second;

function daylight() {
    if ((now.isDST()) === true) {
      console.log('It ' + chalk.green('is') + ' during Daylight Savings Time.')
    }  else { console.log('It ' + chalk.red('is not') + ' during Daylight Savings Time.');
}
}

function leap() {
  if ((now.isLeapYear()) === true) {
    console.log('It' + chalk.green('is') + ' a leap year.')
  } else { console.log('It ' + chalk.red('is not') + ' a leap year.');
}
}

console.log("It is " + chalk.blue(current_time)+ ".");
console.log(chalk`It is the {red ${days}th} day of the year.`);
console.log(chalk`It is {cyan ${secondTotal}} seconds into the day.`);
daylight();
leap();
