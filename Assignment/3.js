const moment = require("moment");
/*

3. Last Monday of Year
Given a year, write a function to get the last Monday of the year. Display the date in mm/dd/yyyy format.

*/
function getLastMondayOfYear(year) { 

    let dateString = `01/01/${year+1}`;
    let m = moment(dateString, 'mm/dd/yyyy').day("Monday");
    if(year < moment(m).year()) {
        m = moment(m.day(-6));
    }

    return moment(m).format("MM/DD/YYYY");
}

const test1 = getLastMondayOfYear(2016);
const test2 = getLastMondayOfYear(2017);
const test3 = getLastMondayOfYear(2018);
const test4 = getLastMondayOfYear(2019);
const test5 = getLastMondayOfYear(2020);

console.log('Last Monday of 2016: ', test1);
console.log('Last Monday of 2017: ', test2);
console.log('Last Monday of 2018: ', test3);
console.log('Last Monday of 2019: ', test4);
console.log('Last Monday of 2020: ', test5);