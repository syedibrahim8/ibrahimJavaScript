// variables and constant's

/*
there are 3 types of variables in js
1.var
2.let
3.const

variables are cotainers (storage areas) for data/text/value
variables basically store ==> number/text and other data types
*/

//1.var

// how to declare a variable
// semi colons are optional in javascript

var bin = 1;
var Bin = 2;
console.log(bin)
console.log(Bin)

// to store a string 
var firstname = "Syed Ibrahim"
var lastname = 'Ali'
var city = `Hyderabad`

console.log(firstname);
console.log(lastname);
console.log(city);

// college name
var college = `svits`
console.log(college);

// age 
var age = 20;
console.log(age);

// phone number
var mobile = "8143962005"
console.log(mobile);

// address
var addr = "Hyderabad"
console.log(addr);

// favourite food
var food = `kabsa`
console.log(food);

// using one console log for one time to print all at once
console.log(firstname, lastname, city, college, age, mobile, addr, food);

// if you want to use variables in string with a sentence
// use backticks ``
// `` ==> are called template literals
console.log(`My name is ${firstname} ${lastname}, my age is ${age}, I belong from ${addr}, I love to eat ${food} and my contact number is ${mobile}`);