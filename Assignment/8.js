const moment = require('moment-timezone');

/*

8) Time Zone Difference
Given a date and two timezones write a function to return the hour difference between the
timezones

Example #1:
timezoneHourDifference("03/02/2022 03:45pm","America/Los_Angeles","Asia/Shanghai")
Result:: 8 
Example #2:
timezoneHourDifference("03/22/2022 03:45pm","America/Los_Angeles","Asia/Shanghai")
Result:: 9
function timezoneHourDifference(dateAndTime, timezone1, timezone2) {
}

*/

function timezoneHourDifference(date, timezone1, timezone2) {

    //Separating time from date
    let timeString = date.substring(11,18);
    //Setting time to 24 hour format
    if( timeString.substring(5,7) == 'pm' ) {
        let x = parseInt(timeString.substring(0,2)) + 12;
        timeString = x + ':' + timeString.substring(3,5);
        console.log(timeString)
    } 
    //Parsing Date into UTC Time
    let UTCDateTime = moment.utc({ 
        year: date.substring(6,10),
        month: parseInt(date.substring(0,2)) - 1, 
        day: date.substring(3,5),
        hour: timeString.substring(0,2),
        minute: timeString.substring(3,5) 
    });

    //Parsing Date into UTC Time
    let dateTime1 = moment.tz({ 
        year: date.substring(6,10),
        month: parseInt(date.substring(0,2)) - 1, 
        day: date.substring(3,5),
        hour: timeString.substring(0,2),
        minute: timeString.substring(3,5) 
    }, timezone1);

    // Getting DateTime in Different Time Zones
    // let dateTime1 = moment.tz(UTCDateTime, timezone1);
    let dateTime2 = moment.tz(UTCDateTime, timezone2);
    console.log('before conversion (in UTC moment object) ',dateTime2)


    /* Now that I have the DateTime in two different time zones, I can parse dateTime2, so I can convert 
    * into the same timezone as dateTime1, but still have the different time, otherwise the difference 
    * will calculate just the difference of hours between the two timezones
    */

    dateTime2 = moment(dateTime2).format('MM/DD/YYYY HH:mm');
    console.log('before conversion ',dateTime2)

    timeString = dateTime2.substring(11,18);

    console.log(`year: ${dateTime2.substring(6,10)},
    month: ${parseInt(dateTime2.substring(0,2)) - 1}, 
    day: ${dateTime2.substring(3,5)},
    hour: ${timeString.substring(0,2)},
    minute: ${timeString.substring(3,5)} `)
    
    
    dateTime2 = moment.tz({ 
        year: dateTime2.substring(6,10),
        month: parseInt(dateTime2.substring(0,2)) - 1, 
        day: dateTime2.substring(3,5),
        hour: timeString.substring(0,2),
        minute: timeString.substring(3,5) 
    }, timezone1);

    console.log('after conversion ',dateTime2)
     

    console.log('timezone1 ', dateTime1);
    // console.log('timezone1 UTC', moment.utc(dateTime1));
    console.log('timezone2 ', dateTime2);
    // console.log('timezone2 UTC',moment.utc(dateTime2));
    let diff = dateTime2.diff(dateTime1);
    // let diffUTC = dateTime1UTC.diff(dateTime2UTC);
    console.log('diff ', moment.duration(diff).hours());
    // console.log('diff UTC', moment.duration(diffUTC).hours());
    // // date = moment.tz();

}

// try this https://momentjs.com/docs/#/manipulating/utc-offset/
timezoneHourDifference("04/22/2022 03:45pm", "America/Los_Angeles", "Africa/Asmara" );
