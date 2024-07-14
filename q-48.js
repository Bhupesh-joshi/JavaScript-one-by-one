// Hoisting

// Actual code
console.log(message);
var message = 'Hello, world!';

// After hoisting
var message;
console.log(message);
message = 'Hello, world!';
