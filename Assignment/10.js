const moment = require('moment');

moment.updateLocale("en", { week: {
    dow: 0, 
    // First day of week is Monday
    doy: -54// First week of year must contain 4 January (7 + 1 - 4)
  }});
/*
    10) Imaginary World
    Imagine that the world was different and the first day of the year is March 1st. Given a date, write a function to return which week of the year it is.

    
*/

// First Day of Week and First Week of Year

function getWeekOfYear(date) {
    // const newYears = moment("2023-01-01 00:00");
    // const newYearsDayofWeek = 
    let m = moment(date);
    console.log(m.toString())
    // console.log(m.weeksInYear());
    console.log(m.week());
}


getWeekOfYear("2023-12-30 00:00");
getWeekOfYear("2023-01-02 00:00");
getWeekOfYear("2023-01-03 00:00");
getWeekOfYear("2023-01-04 00:00");
getWeekOfYear("2023-01-05 00:00");
getWeekOfYear("2023-01-06 00:00");
getWeekOfYear("2023-01-07 00:00");
getWeekOfYear("2023-01-08 00:00");
getWeekOfYear("2023-02-01 00:00");
getWeekOfYear("2023-02-28 00:00");
getWeekOfYear("2023-03-01 00:00"); // Week 9
getWeekOfYear("2023-03-02 00:00"); // Week 9
getWeekOfYear("2023-03-03 00:00"); // Week 9
getWeekOfYear("2023-03-04 00:00"); // Week 9
getWeekOfYear("2023-03-05 00:00"); // Week 9
getWeekOfYear("2023-03-06 00:00"); // Week 9
getWeekOfYear("2023-03-07 00:00"); // Week 9
getWeekOfYear("2023-03-08 00:00"); // Week 9
getWeekOfYear("2023-03-09 00:00"); // Week 9
getWeekOfYear("2023-04-01 00:00");
getWeekOfYear("2023-05-01 00:00");