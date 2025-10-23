// Rules for naming Javascript variables
/*
1. Variables name must be start with either a letter, underscore or dollar symbol
*/

let a = "hello";
let _b = "hey";
let $c = "hi";

/*
2. Variable names can't start with numbers
 let 1a = "hello"; ❌ this gives error
3. Javascript is case-sensitive so 'y' & 'Y' are different
*/ 
let y = `bye`;
let Y = 'tata';
console.log(y);
console.log(Y);

/*
4. Keywords can't be used as variable names 
 let new = 5 // ❌ Error
 let let = 10 // ❌ Error
 let var = "20" // ❌ Error
 let for = "30" // ❌ Error
 
5. In Javascript, the variable names are generally written in camelCase if it has multiple words
For Ex:
      firstName, annualSalary 
