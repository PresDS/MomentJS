// const moment = require("moment");
const moment = require('moment-timezone');

/*

6. Countdown Until 2026 in Miami
Write a function that would return the months, days, hours, minutes, and seconds until the beginning of the year in Miami.

https://momentjs.com/timezone/docs/
npm install moment-timezone

list of all moment.js timezones
https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a

*/

function countdownTo2026Miami () {
    let newYearsMiamiDateTime = moment.tz("2026-01-01 00:00", "America/New_York");
    let UTCDate = moment.utc(newYearsMiamiDateTime);
    let currentDateTime = moment();
    console.log('UTCDate: ',UTCDate);
    console.log('currentDateTime: ',currentDateTime);
    console.log('newYearsMiamiDateTime', newYearsMiamiDateTime);
   
    let diff = newYearsMiamiDateTime.diff(currentDateTime);    

    let month = (moment.duration(diff).months() + (moment.duration(diff).years() * 12));
    let day = (moment.duration(diff).days());
    let hour = (moment.duration(diff).hours());
    let minute = (moment.duration(diff).minutes());
    let second = (moment.duration(diff).seconds());


    return (`${month} Months, ${day} Days, ${hour} Hours, ${minute} Minutes, ${second} seconds`);

}

console.log(countdownTo2026Miami());