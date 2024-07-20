// difference bt var, let and const

// var example
function exampleVar() {
    if (true) {
        var message = 'Hello, world!';
    }
    console.log(message);
}
exampleVar();

// let and const example
function exampleLetConst() {
    if (true) {
        let messageLet = 'Hello, world!';
        const messageConst = 'Hello, world!';
    }
    console.log(messageLet);
    console.log(messageConst);
}
exampleLetConst();
