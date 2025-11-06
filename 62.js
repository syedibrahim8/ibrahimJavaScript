/*
Javascript ES6(also known as ECMAScript2015 orECMAScript6) is the sixth edition
of Javascript introduced in June 2015.

ECMAScript (European Computer Manafactures Association Script)
is the standard specification of javascript to ensure compatibility in all browsers and environments.

This tutorial provides a summary of commonly used features and syntax improvements of ES6.
*/

// 1. let & const
// 2. Arrow function
// 3. Template literals
// 4. Default parameter

// 5. Destructing Assignment
// for objects
let person = {
    fname : "Syed",
    age : 20,
    isAlive : null,
    isSleeping : true
};

//

let {fname,age,isAlive, isSleeping} = person;
console.log(fname,age,isAlive, isSleeping);

//  for array

let detail = ["Syed",20,null,true];

let [a,b,c,d] = detail;
console.log(a,b,c,d);

