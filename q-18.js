// for-in loop

// Syntax
// for(key in object){
//     // code to be executed
// }

const person = {
    name : "John",
    age : 13,
    city : "New York"
};

for(let key in person){
    console.log(key + ': ' + person[key]);
};