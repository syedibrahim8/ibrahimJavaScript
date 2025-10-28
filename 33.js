// Objects in javascript
// non ptimitive ==> you can store multiple data types
// object uses key value pair.
// left side is key
// right side is value
// to access value use the key
//key : value

let person = {
    fname: "Syed Ibrahim",
    phone: 9087654321,
    age: 10,
    isSleeping:null,
    bankBalance:1234567890987654n,
    isAlive:true,
    health:undefined
}
console.log(person);

// to access a specific object value

// 1. dot notation

console.log(person.bankBalance);

// 2. using bracket notation

console.log(person["fname"]);


