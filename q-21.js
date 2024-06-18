// OR Operator 

function isWeekend(day){
    return day === "Saturday" || "Sunday";
}

let today = "Sunday";

if(isWeekend(today)){
    console.log("It's a Weekend");
    } else {
    console.log("It's a Weekday");
}