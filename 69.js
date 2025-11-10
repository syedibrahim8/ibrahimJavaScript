/**
 * JSON methods in Javascript
 * Javascript provides two main global methods under the JSON object:
 * 1. JSON.stringify()
 * converts a Javascript object -> JSON string
 * 
 * 2. JSON.parse()
 * converts a JSON string -> Javascript object
 */

let person  = {
    fullName:"Syed",
    age : 20,
    isAlive : true
}
console.log(typeof person, person);
let output = JSON.stringify(person)
console.log(typeof output, output);

let jsonDetails =`{
    "fullName":"Syed",
    "age" : 20,
    "isAlive" : true
    }`
console.log(typeof jsonDetails, jsonDetails);
let final = JSON.parse(jsonDetails)
console.log(typeof final, final);