// 11. includes() method
let arr = ["syed","ibrahim","ali"];
console.log(arr.includes("syed"));
console.log(arr.includes("bro"));

// 12. join() method
let arrn = ["syed","ibrahim","ali"];
console.log(arr.join(" "));

// // 13. reverse() method
let arr1 = [10,9,8,7,6,5,4,3,2,1,0];
console.log(arr1.reverse());
// //
let arr2 = [24,12,6,43,8]
console.log(arr2.reverse());

// 14. sort()
let arr3 = [10,9,8,7,6,5,4,3,2,1];
console.log(arr3.sort((a, b)=> a-b));
// IIFE - Imediately Invoked Function Expression

// 15. flat() method
let arr4 = ["hello","hi",["bye","test"],"ok"]
console.log(arr.flat());

// 16. Array.of() method
// A method is to used to create a new array
// without initializing array.
let element = Array.of("hi","hello",23,54,false);
console.log(element);

// 17. every() method
// check if every element in the array passes a test (return true/false)
// returns : true if all elements pass the condition, otherwise false

let numbers = [2,4,6,8];
let check = numbers.every((x)=>x>0);
console.log(check);
// or
// let check1 = numbers.every(test);
// function test(x){
//     return x > 0;
// }
// console.log(check1);

// 18. find() method
// returns the first element that satisfies a condition.
// return: the element itself, or undefined if not found.

let num = [2,3,4,5,6,7,8]
let check2 = num.find((y)=> y >4 );
console.log(check2);

// 19. findIndex
/* 
Returns the index of the first index that satisfies a condition
returns : the index number, or -1 if not found */
let check3 = num.findIndex((y)=> y >4 );
console.log(check3);

// 20. forEach() method
// purpose : Executes a function for each element 
// Return value : undefined
// chainable : No
// changes original array : no
// common use : Logging, saving data

// ex : forEach just : just loops - doesn't return anything.

let number = [1,2,3,4,5]
number.forEach((x)=>{
    console.log(x*2); // doesn't change the original array
})
console.log(number);
//
let names = ["ibbu","syed","ali"];
names.forEach((x)=>{
    console.log(x);
})


