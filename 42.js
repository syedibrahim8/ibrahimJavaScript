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
console.log(final);

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

