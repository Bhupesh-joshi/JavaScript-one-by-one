// spread operator with Objects

// clone
let person = { name: "John", age: 30 };

// 3 Adding or Overwriting Properties
let updatedPerson = { ...person, age: 35, occupation: "Developer" };
console.log(updatedPerson);