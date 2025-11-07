// 25.reduce () method

/*
the reduce() method runs a function on each element of an array to reduce it to
a single value(like sum, product, or combined result).
*/
// Reduce method has 3 parameters
// 1. accumulator => stores the previous step
// 2. currentvalue => current array element
// 3. initialvalue => starting value

let numbers = [10,20,30,40,50];
let total = numbers.reduce((a,b)=>{
    return a * b
}, 1 )
console.log(total);

let str=["H","E","L","L","O"]
let total1 = str.reduce((x,y)=>{
    return x+y;
})
console.log(total1);

// 26.reduceRight()
let str1=["H","E","L","L","O"]
let total2 = str1.reduceRight((x,y)=>{
    return x+y;
})
console.log(total2);
