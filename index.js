const chalk = require('chalk');
var moment = require('moment');
moment().format();

define(['require', 'moment'], function(require, moment) {
  // Inside some module after the locale is detected. This is the
  // case where the locale is not known before module load time.
  require(['moment/locale/de'], function(localeModule) {
    // here the locale is loaded, but not yet in use
    console.log(moment().format('LLLL'));  // 'Friday, June 24, 2016 1:42 AM'

    moment.locale('de');
    // Use moment now that the locale has been properly set.
    console.log(moment().format('LLLL')); // 'Freitag, 24. Juni 2016 01:42'
  })
});
