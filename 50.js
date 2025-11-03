// For of loop
/*
used to loop directly through the values of an iterable to an array
*/
let students = ["Syed","Ibrahim","Ali"]
for(let i of students){
 //   console.log(i);
}

// for in loop
/*
used to loop through the properties (keys) of an object or values
*/
let myDetails ={
    myName : "Syed Ibrahim Ali",
    myAge : 10,
    isAlive : true,
    isAwake : null,
    isSleeping : undefined
}

for (let x in myDetails){
    console.log(myDetails[x]);
}