// Objects in JS

let person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};
console.log(person);



let userProfile = {
    username: "johndoe123",
    email: "john@example.com",
    loggedIn: true,
    lastLogin: "2024-06-29"
};
console.log(userProfile);


let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getCarInfo: function() {
        return `${this.brand} ${this.model}, Year: ${this.year}`;
    }
};
console.log(car.getCarInfo());
