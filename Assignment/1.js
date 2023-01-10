const moment = require("moment");


function formatAnyInputToStandardDate(input) {
    // Quarter
    if(input[0] === "Q") {
        let year = input.substring(6,10);
        let month = "";

        if(input[1] === "1") {
            month = 0;
        }
        if(input[1] === "2") {
            month = 3;
        }
        if(input[1] === "3") {
            month = 6;
        }
        if(input[1] === "4") {
            month = 9;
        }
        let result = moment({
            year: year,
            month: month,
            day: 1
        }).format("MM/DD/YYYY");
        return result;
    }
    // Starting with Day of the Week
    if(input[0] === "M" || input[0] === "T" || input[0] === "W" || input[0] === "F" || input[0] === "S") {
        let day = input.substring(5,7);
        let month = input.substring(8,11);
        let year = input.substring(12,17);
        
        let result = moment().year(year).month(month).day(day).format("MM/DD/YYYY");
        return result;

    } else {
        result = moment(input, ["MM-DD-YYYY", "DD-MM-YYYY"]).format("MM/DD/YYYY");   
        return result;
    }

}

console.log("Input: 13/02/2022, result:", formatAnyInputToStandardDate("13/02/2022"));
console.log("Input: 03/04/2022, result:", formatAnyInputToStandardDate("03/04/2022"));
console.log("Input: Q4 of 2021, result:", formatAnyInputToStandardDate("Q4 of 2021"));
console.log("Input: Tue, 22 Feb 2022, result:", formatAnyInputToStandardDate("Tue, 22 Feb 2022"));

