//
let myDetails ={
    myName : "Syed Ibrahim Ali",
    myAge : 10,
    isAlive : true,
    isAwake : null,
    isSleeping : undefined
}
console.log(myDetails);

myDetails.myAge = 20;
console.log(myDetails);

myDetails.mobile = 9876543210;
console.log(myDetails);

delete myDetails.myName;
console.log(myDetails);
