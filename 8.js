/*
Global Scope
Inside of Function
Inside of Blocks
*/

var a = 10;
let b = 20;
const c = 30;

// Inside block
{
    console.log(a);
    console.log(b);
    console.log(c);
}

// Inside function
function hi() {
    console.log(a, b, c);
 }
 hi();

// Anywhere
 console.log(a, b, c);