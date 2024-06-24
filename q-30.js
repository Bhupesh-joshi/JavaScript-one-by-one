// spread operator with functions

function add(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
console.log(add(...numbers));


let nums = [4, 7, 1, 9];
let maxNum = Math.max(...nums);
console.log(maxNum);