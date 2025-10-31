console.time("Start")
let x = 5;
for(i = 1;i<=1000;i++){
    console.log(`${x} X ${i} = ${x*i}`);
}
console.timeEnd("Start")

//
console.time("foreach")
let num = Array.from({length:1000},(_,i)=> i+1);
num.forEach((n)=>{
    console.log(`5 X ${n} = ${5*n}`);
})
console.timeEnd("foreach")

//
console.time("map")
let num1 = Array.from({length:1000},(_,i)=> i+1);
let table = num.map((y)=>{
    return `5 X ${y} = ${5*y}`;
})
console.log(table);
console.timeEnd("map")