// Default Parameters

function greet(name = "Developers") {
    console.log(`Hello, ${name}!`);
}

greet();
greet("John");





function calculateArea(width = 10, height = 20) {
    return width * height;
}

console.log(calculateArea());
console.log(calculateArea(5));
console.log(calculateArea(5, 5));
