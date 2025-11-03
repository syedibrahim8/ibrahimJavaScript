// 23. slice method
// The slice () method is used to copy or extract aportion of an aray
// without changing the original one

let arr = [10,20,30,40];
//index    0   1  2  3
// len     1   2  3  4

let output = arr.slice(1,3);
console.log(output);


// 24. some() method
/* 
the some () method checks if at least one element in an array passes atest (condition).
it returns :
true => if any element passes the condition 
false => if none do
*/

let arr1 = [2,4,6,8,11];
let result1 = arr1.every((x)=> x%2==0); // every method
let result2 = arr1.some((x)=> x%2==0);
console.log(result1); // for differentiate between every() and some() method
console.log(result2);
