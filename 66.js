// Promises in JS

/*
A promise iis an object that represents the eventual completion or failure of an asynchronous operation

"I,ll fetch the data (pending)... if it works, I'll resolve it, if it fails, I'll reject it"
*/

const promise = new Promise((a,b) => {
    let success = true;
    if (success){
        a("task completed")
    }else{
        b("rejected")
    }
})
console.log(promise);

// example v1 ==> callback
function timerCallBack(callback,seconds){
    console.log(`Waiting for ${seconds} seconds...`);
    setTimeout(()=>{
        callback(`Done after ${seconds} seconds!`);
    }, seconds * 1000);
}
// timerCallBack((msg)=>{
//     console.log(msg);
// },2);

// example v2 ==> promises

function timerPromise (second){
    return new Promise ((resolve,reject)=>{
        if (second < 0){
            reject("Invalid time!")
        }else{
            setTimeout(()=>{
                resolve(`Done after ${second} seconds!`)
            },second * 1000);
        }
    })
}

// timerPromise(2)
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));


// v3 ==> promise chaining

// timerPromise(1)
// .then((msg)=>{
//     console.log(msg);
//     return timerPromise(2);
// }).then((msg)=>{
//     console.log(msg);
//     return timerPromise(3);
// })
// .then((msg)=>console.log(msg))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("All timers done!"))

// v4 ==> Promise.all()
// run all timers together and wait for all to finish.

// Promise.all([timerPromise(1),timerPromise(2),timerPromise(3)])
// .then((msg)=>console.log("All done:",msg))
// .catch((err)=>console.log(err));

// v5 ==> Promise.race()

// Run all timers together, but only get the first one that finish.
// Promise.race([timerPromise(1),timerPromise(2),timerPromise(3)])
// .then((msg)=>console.log(`First finished:${msg}`))
// .catch((err)=>console.log(err));

// v6 ==> async / await (Modern Syntax)

async function finalRunner(){
    try{
        let timer1 = await timerPromise(3);
        console.log(timer1);

        let timer2 = await timerPromise(2);
        console.log(timer2);

        let timer3 = await timerPromise(1);
        console.log(timer3);
    }catch(error){
        console.log(error)
    }
}
finalRunner()