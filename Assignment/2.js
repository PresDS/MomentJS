const moment = require("moment");

/*
    2. First Monday of Year
    
    Given a year, write a function to get the first Monday of the year. Display the date in mm/dd/yyyy format.
*/

function getFirstMondayOfYear(year) {
    let dateString = `01/01/${year}`;
    let m = moment(dateString, 'mm/dd/yyyy').day("Monday");

    if(moment(m).year() < year) {
        m = moment(m).day(8)
    }

    return moment(m).format("MM/DD/YYYY");

}

const test1 = getFirstMondayOfYear(2016);
const test2 = getFirstMondayOfYear(2017);
const test3 = getFirstMondayOfYear(2018);
const test4 = getFirstMondayOfYear(2019);
const test5 = getFirstMondayOfYear(2020);

console.log('First Monday of 2016: ', test1);
console.log('First Monday of 2017: ', test2);
console.log('First Monday of 2018: ', test3);
console.log('First Monday of 2019: ', test4);
console.log('First Monday of 2020: ', test5);

