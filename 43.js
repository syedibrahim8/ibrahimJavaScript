console.time("Start")
let x = 5;
for(i = 1;i<=100;i++){
    console.log(`${x} X ${i} = ${x*i}`);
}
console.timeEnd("Start")

// foreach
console.time("foreach")
let num = [1,2,3,4,5,67,8,9,10];
num.forEach((n)=>{
    console.log(`5 X ${n} = ${5*n}`);
})
console.timeEnd("foreach")

// 
console.time("map")
let num1 = [1,2,3,4,5,67,8,9,10];
let table = num.map((y)=>{
    return `5 X ${y} = ${5*y}`;
})
console.log(table);
console.timeEnd("map")