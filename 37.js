// Array methods

//1. at() method

let arr = ["hi","hello","bye"];
// console.log(arr.at(0));
// console.log(arr.at(2));
// syntax ==> arrayname.methodname(index)

//2. concat() Method
let arr1 = [10,20,30];
let arr2 = [40,50,60];

// let total = arr1.concat(arr2);
// console.log(total);

//3. fill() method
let fruits = ["Apple","Mango","Orange"];
// let total1 = fruits.fill("Pineapple");
console.log(fruits.fill("Pineapple"));
// fill is an array method which replace all the elements

//4. indexOf() method
let num = ["one","two","three","four"];
console.log(num.indexOf("one"));
// indexOf() is an array method which takes the value element and returns index number

//5. lastIndexOf()
let arr3 = [10,20,30,50,60,20,10,20];
console.log(arr3.lastIndexOf(10));

//6. length
let arr4 = [10,20,30,40,50,60];
console.log(arr4.length);
// it gives the count of number of elements in an array

//7. push()
// push is an array method 
// which adds a new element
// in the last position of the array
let arr5 = [10, 20, 30];
arr5.push(40);
console.log(arr5);

//8. pop()
// pop is an array method which deletes the last
// element from the array
arr5.pop();
console.log(arr5);

// 9. unshift()
let arr6 = [10,20,30];
arr6.unshift(5);
console.log(arr6);

// 10. shift()
let arr7 = [10,20,30];
arr7.shift();
console.log(arr7);


