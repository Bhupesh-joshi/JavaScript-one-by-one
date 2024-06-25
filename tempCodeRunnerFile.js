// Merging Objects
let address = { city: "New York", country: "USA" };
let personWithAddress = { ...person, ...address };
console.log(personWithAddress);



// 3 Adding or Overwriting Properties
let updatedPerson = { ...person, age: 35, occupation: "Developer" };
console.log(updatedPerson);
