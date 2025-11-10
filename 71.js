// Math methods

/*
In javascript, the Math object provides a set of built-in mathematical methods and cnstant
for performing common math operations - like rounding numbers generating random values, 
trignometry, lgorithms, etc
*/

// basic math methods
/**
Math.abs(x)-> returns absolute(positive) value 
Math.round(x)-> rounds to  nearest integer
Math.ceil(x)-> rounds up 
Math.floor(x)-> rounds down
Math.trunc(x)-> removes decimal part
Math.sign(x)-> return 1,-1, or 0(sign of number) 
*/

let a = Math.abs(-7)
console.log(a);
let b = Math.round(4.7)
console.log(b);
let c = Math.ceil(5.1)
console.log(c);
let d = Math.floor(4.9)
console.log(d);
let e = Math.trunc(4.9)
console.log(e);
let f = Math.sign(-5)
console.log(f);

// Random number
/*
Math.random()- returns random number between 0(inclusive) and 1 (exclusive)
custom range - random between min and max-> Math.random()*(max-min)+min
*/
//

let max = 10;
let min = 1;

let output = Math.random()*(max+1-min)+min; // used +1 in syntax at max because to get the range of max number also
console.log(output); 