const moment = require("moment");
// https://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
/*

5. Closest to Now
Write a function to generate two random dates and returns the date which is closest to right now.

*/

// Alternatively we can try the isAfter or isBefore methods
// https://www.youtube.com/watch?v=fPSX6fLHxDc&list=PLVvjrrRCBy2LWFkR7opQxWp4z0en6OHgw&index=6&ab_channel=dcode

function closestToNow() {
    let year = Math.floor(Math.random() * 100);
    
    let randomDate1 = moment(Math.floor(Math.random()*10000000000 * year))//.format('MM/DD/YYYY');
    let randomDate2 = moment(Math.floor(Math.random()*10000000000 * year))//.format('MM/DD/YYYY');
    let now = moment();
    console.log(`randomDate1: ${randomDate1} \n randomDate2: ${randomDate2} \n now: ${now}`);

    let diff1 = now.diff(randomDate1);
    let diff2 = now.diff(randomDate2);

    // console.log(`diff1: ${diff1} \n diff2: ${diff2} `);

    if(diff1 <= diff2) {
        return moment(randomDate1).format('MM/DD/YYYY');
    }else{
        return moment(randomDate2).format('MM/DD/YYYY');
    }


}
console.log(closestToNow());