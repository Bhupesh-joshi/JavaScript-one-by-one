// Object Destructuring

// let person = {
//     name: "John",
//     age: 30,
//     occupation: "Developer"
// };

// let { name, age, occupation } = person;

// console.log(name);
// console.log(age);
// console.log(occupation);


// let person = {
//     name: "John",
//     age: 30
// };

// let { name, age, occupation = "Unemployed" } = person;

// console.log(name);
// console.log(age);
// console.log(occupation);


let person = {
    name: "John",
    age: 30
};

let { name: fullName, age: years } = person;

console.log(fullName);
console.log(years);
