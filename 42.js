// 21. map() method

// map method
// transform each element and 
// returns a new array

// return value : new array
// chainable : yes
// change original : yes
// common use case : creating new arrays

// ex : creates a new array with modified values and
// returns in a new array by default

let numbers = [1,2,3,4,5];
// numbers.forEach((x)=>{
//     console.log(x);
// })
let final = numbers.map((x)=>x*2)
//console.log(final);

// Mutability 
// Mutating vs non-mutating
// 1.push
// 2.pop
// 3.shift
// 4.unshift
// 5.splice
// 6.sort
// 7.reverse
// 8.foreach(forcefully)

// Non-Mutating
// 1.map
// 2.filter
// 3.slice
// 4.concat
// 5.reduce


// 22. filter()
/* A filter() methods creates a new array filled with elements that passes a test (a condition you define in a function).
It does not change the original array. 
*/
let arr = [1,2,3,4,5,6,7,8,9,10];
let output = arr.filter((x)=>x>5);
console.log(output);

let classRoom = [
    {
        fname: "Syed",
        age: 65,
        college: "JNTUH"
    },
    {
        fname: "Ibrahim",
        age: 40,
        college: "MJ"
    },
    {
        fname: "Ali",
        age: 20,
        college: "LRDS"
    },
    {
        fname: "kaifu",
        age: 25,
        college: "Drop"
    }
]

console.log(classRoom.filter((x)=>x.age < 40));