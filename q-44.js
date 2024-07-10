// Function Expressions

const greet = function() {
    console.log('Hello, world!');
};

greet();

// 
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5));