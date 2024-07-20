// Block Scope and Function Scope

// Function Scope

function greet() {
    var message = 'Hello, world!';
    console.log(message);
}
// greet();
// console.log(message);


// Block Scope

{
    let message = 'Hello, world!';
    // console.log(message);
}
console.log(message);