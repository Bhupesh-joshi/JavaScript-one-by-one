// AND Operator

function isAdult(){
    return myAge >= 18;
}

function hasPermission(){
    return permission === true;
}

let myAge = 110;
let permission = true;

if(isAdult(myAge) && hasPermission(permission)){
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}