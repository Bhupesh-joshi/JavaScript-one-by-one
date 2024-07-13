// Immediately Invoked Function Expressions (IIFE)

(function() {
    var message = 'Hello, world!';
    console.log(message);
})();



(function(name) {
    console.log(`Hello, ${name}!`);
})('Alice');



var result = (function(a, b) {
    return a + b;
})(5, 3);

console.log(result);
