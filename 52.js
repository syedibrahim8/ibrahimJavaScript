// Objects method

// 1. entries method
/*
Object.entries() in javascript is a built in method that returns an array of key - value pairs
from an object
 */

let person ={
    fname : "Syed",
    age : 20,
    isAlive : true,
};

let output = Object.entries(person);
console.log(output);

// multi demensional array
let arr =[
    ["Syed",10],
    ["Kaif",20],
    ["Afnaan",25]
]
console.log(arr[1][1])

// 2. Object.keys()
/*
Returns an array of keys (property names) of the object.
*/

let user ={
    fname : "Syed",
    age : 20
}
console.log(Object.keys(user));

// 3. Object.values
// returns an array of values from the object
let user1 ={
    fname : "Syed",
    age : 20
}
console.log(Object.values(user1));
