// Objects Inside Arrays Looping

let students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Jane", age: 22, grade: "B" },
    { name: "Jim", age: 21, grade: "A" }
];

students.forEach(students => {
    console.log(`Name: ${students.name}, Age: ${students.age}, Grade: ${students.grade}`);
});

