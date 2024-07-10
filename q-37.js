// computed properties

// ex 1

let propName = "age";

let person = {
    name: "John",
    [propName]: 30
};

console.log(person);

// ex 2

let key1 = "firstName";
let key2 = "lastName";

let user = {
    [key1]: "John",
    [key2]: "Doe"
};

console.log(user);