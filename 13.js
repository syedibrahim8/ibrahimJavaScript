// Comparison Operator
// Comparison Operators compare two values 
// and returns a boolean value either true or false
/*
| Operator |      Description      |  Example  |
|----------|-----------------------|-----------|
|    ==    |       Equals to       |  x == y   |
|----------|-----------------------|-----------|
|    !=    |     NOt equals to     |  x != y   |
|----------|-----------------------|-----------|
|          |   Returns true only   |           |
|    ===   |   if value and data   |  x === y  |
|          |     type are same     |           |
|----------|-----------------------|-----------|
|          |   Returns true only   |           |
|    !==   |   if value and data   |  x !== y  |
|          |    type aren't same   |           |
|----------|-----------------------|-----------|
|    <     |       Less than       |   x < y   |
|----------|-----------------------|-----------|
|    <=    |   Less than equal to  |  x <= y   |
|----------|-----------------------|-----------|
|    >     |     Greater than      |   x > y   |
|----------|-----------------------|-----------|
|    >=    | Greater than equal to |  x >= y   |
*/

let a = 5;       // number
let b = "5";     // string
let c = 3;       // number
let d = 2;       // number
let e = 5;       // number
  
console.log(a==e);
console.log(a==b);
console.log(a===b);
console.log(a!=d);
console.log(a!==b);
console.log(a<c);
console.log(a<=c);
console.log(a>c);
console.log(a>=c);