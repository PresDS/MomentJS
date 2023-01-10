const moment = require("moment");
/*

4. Difference between two dates
Given two dates and two time markers, write a function to find the difference between two dates in the following format: "x Years, X Months, X Days, X Hours, and X Minutes"
Example:
differenceBetweenTwoDates("03/01/2022","13:03", "03/01/2022", "15:04")
Result:
0 Years, 0 Months, 0 Days, 2 Hours, and 1 Minute

//Fix month and year diffs (may help with days calculation)
https://github.com/moment/moment/pull/571

*/
1
function differenceBetweenTwoDatesAndTime(date1, time1, date2, time2){
    // https://momentjs.com/docs/#/parsing/object/
    let dateTime1 = moment({ 
        year: date1.substring(6,10),
        month: parseInt(date1.substring(0,2)) - 1, 
        day: date1.substring(3,5),
        hour: time1.substring(0,2),
        minute: time1.substring(3,5) 
    });
    let dateTime2 = moment({ 
        year: date2.substring(6,10),
        month: parseInt(date2.substring(0,2)) - 1,
        day: date2.substring(3,5),
        hour: time2.substring(0,2),
        minute: time2.substring(3,5) 
    });

    let diff = (dateTime2.diff(dateTime1));
    // console.log("DIFF", diff);

    let day1 = moment(dateTime1).format("D");
    let day2 = moment(dateTime2).format("D");


    let year = Math.abs(dateTime2.diff(dateTime1, "year"));
    let month = Math.abs(dateTime2.diff(dateTime1, "month"));
    // let day = (dateTime2.diff(dateTime1, "day"));
    let day = Math.abs(day2 - day1);
    let hour = Math.abs(dateTime2.diff(dateTime1, "hour"));
    let minute = Math.abs(dateTime2.diff(dateTime1, "minute"));
    // console.log('day1 ', day1, 'day2', day2, 'day2 - day1', day2 - day1)
    // console.log( year, month, day, hour, minute);

    minute = minute % 60; 
    hour = hour % 24; 
    day = day % 30; 
    month = month % 12; 

    // console.log( year, month, day, hour, minute);

    return `${year} Years, ${month} Months, ${day} Days, ${hour} Hours, and ${minute} Minute`;


}

const test1 = differenceBetweenTwoDatesAndTime("03/01/2022","13:03", "03/01/2022", "15:04");
const test2 = differenceBetweenTwoDatesAndTime("01/01/2021","11:03", "08/02/2022", "12:04");
const test3 = differenceBetweenTwoDatesAndTime("12/01/2002","09:03", "03/02/2007", "16:04");
const test4 = differenceBetweenTwoDatesAndTime("11/01/2022","10:03", "03/02/2022", "15:04");
const test5 = differenceBetweenTwoDatesAndTime("01/30/2022","10:03", "03/02/2022", "15:04");

console.log('input: "03/01/2022","13:03", "03/01/2022", "15:04"\nresult: ', test1);
console.log('input: "01/01/2021","11:03", "08/02/2022", "12:04", "15:04"\nresult: ', test2);
console.log('input: "12/01/2002","09:03", "03/02/2007 16:04"\nresult: ', test3);
console.log('input: "11/01/2022","10:03", "03/02/2022", "15:04"\nresult: ', test4);
console.log('input: 01/30/2022","10:03", "03/02/2022", "15:04"\nresult: ', test5);

