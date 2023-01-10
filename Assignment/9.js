const moment = require('moment');

/* 
    9) All Days Of The Week of the Month
    Given a year, month, and day-of-week, write a function to return all day-of-week of that month. For example, if the input is 2022, 3, "Tuesday", then the result should be:
    ['3/1/2022', '3/8/2022', '3/15/2022', '3/22/2022', '3/29/2022']
    
*/

function getAllSpecificDays(year, month, dayOfWeek){
    let result = [];
    // Initialize moment object to be first of the month
    let monthDT = moment().month(month-1).year(year).date(1);
    console.log(monthDT);

    let daysinMonth = monthDT.daysInMonth();

    if( monthDT.month() < month - 1) {
        monthDT.day(7).day(dayOfWeek);
    }
    
    while(monthDT.date() <= daysinMonth && monthDT.month() == month - 1 ) {
        let targetDay = moment(monthDT).day(dayOfWeek);
        if(targetDay.month() == month - 1) {
            console.log(monthDT.month())
            result.push(targetDay.format("M/DD/YYYY"));

        }

        // monthDT.day(7);
        monthDT.day(7).day(dayOfWeek);

    }

    return result;


}

let test1 = getAllSpecificDays(2022, 3, "Tuesday");
let test2 = getAllSpecificDays(2021, 8, "Monday");
let test3 = getAllSpecificDays(2020, 1, "Sunday");
let test4 = getAllSpecificDays(2015, 9, "Wednesday");
console.log('All Tuesdays in 3/2022', test1);
console.log('All Mondays in 8/2021', test2);
console.log('All Sundays in 1/2020', test3);
console.log('All Wednesdays in 9/2015', test4);