// console.time("time")
// let num = Array.from({length:1000},(_,i)=> i+1);
// console.timeEnd("time")

for (let i = 1;i<=5;i++){ // loop initialized
    let row = ""; // think row is empty for now
    console.log(row,`outerloop`);
    for(let j = 1;j<=i;j++){
        row += "*";
        console.log(row,`innerloop`);
    }
    console.log(row,"answer");
}