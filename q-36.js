// bracket and dot notation

// let person = {
//     name: "John",
//     age: 30
// };

// console.log(person.name);
// console.log(person.age);

// person.age = 31;
// console.log(person.age);


let person = {
    name: "John",
    age: 30,
    "favorite color": "blue"
};

console.log(person["name"]);
console.log(person["age"]);
console.log(person["favorite color"]);

person["age"] = 31;
console.log(person["age"]);