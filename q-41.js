// Objects inside array for of loop

let students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Jane", age: 22, grade: "B" },
    { name: "Jim", age: 21, grade: "A" }
];

for(let student of students) {
    console.log(`${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
}


// students.forEach(students => {
//     console.log(`Name: ${students.name}, Age: ${students.age}, Grade: ${students.grade}`);
// });

