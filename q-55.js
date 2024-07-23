// Differences between Rest Parameters and Arguments Object

function oldStyleSum() {
    const args = Array.prototype.slice.call(arguments);
    return args.reduce((total, num) => total + num, 0);
}

function newStyleSum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// console.log(oldStyleSum(1, 2, 3));
console.log(newStyleSum(1, 2, 3));
