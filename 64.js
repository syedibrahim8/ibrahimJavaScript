// Asynchronous function

// Timer functions
/*
Timer function let you schedule code execution - either after a delay or repeatedly at intervals.
They are part of the Web APIs (in browser) or Node.js global timers (in backend JS)
*/

// 1. setTimeout()
// console.log("step1");
// setTimeout(()=>console.log("step2"),0)
// console.log("step3");

// 2. setInterval()
/*
The setInterval() method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

It continues running untill you stop it using clearIntervals()
*/

let count = 1;
const timer = setInterval(()=>{
    console.log("Hello CFI");
    console.log(count);
    count++;
    if(count == 5){
        clearInterval(timer);
        console.log("Stopped");
    }
},1500)
