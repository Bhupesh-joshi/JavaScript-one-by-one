// Arrow Function

const greet = () => {
    console.log('Hello, world!');
};
greet();

// Parameters
const greetPerson = name => {
    console.log(`Hello, ${name}!`);
};

const add = (a, b) => {
    return a + b;
};

greetPerson('Alice');
console.log(add(5, 3));

// Implicit Return
// const add = (a, b) => a + b;

// console.log(add(5, 3));

