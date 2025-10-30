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
console.log(arr3.sort((a, b)=> b + a));
// IIFE - Imediately Invoked Function Expression

// 15. flat() method
let arr4 = ["hello","hi",["bye","test"],"ok"]
console.log(arr.flat());

// 16. Array.of() method
// A method is to used to create a new array
// without initializing array.
let element = Array.of("hi","hello",23,54,false);
console.log(element);


