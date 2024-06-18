// Main 5 Types of Loops in JavaScript 

// 1 For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2 While Loops
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// 3 do...while loop
let j = 0;
do {
    console.log(i);
    j++;
} while (j < 5);

// 4 for...in loop
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

// 5 for...of loop
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}