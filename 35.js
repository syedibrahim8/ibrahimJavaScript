// Arrays in Javascript

//let person = ["Syed", 12345678, 10, true, null, undefined];

// Note: Arrays uses indexing in javascript 
// indexing starts from 0
// using the index number you can perform crud operations

// how to access any value from array (using index)
// index starts from 0

let person = ["Syed", 12345678, 10, true, null, undefined];
///             0        1      2     3    4        5 

// Acessing array values
console.log(person[0]);

// Adding a new value in array
person[6]= "ali"
console.log(person);

// Updating an array
person [2]= 20;
console.log(person);

// Delete an array
delete person[5];
console.log(person);
