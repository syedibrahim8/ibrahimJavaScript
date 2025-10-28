// try catch in javascript

/*
the try...catch statement in javascript is used to handle runtime errors - it lets 
your code keep running even if something goes wrong
*/

// Basic Syntax
// 

// try{

// }catch (error){
//     console.log(error);
// }

try {
    let a = 10;
    console.log(b);
} catch (error){
    console.log("Bhai error agaya")
    console.log(error.name, error.message);
}
// console.log(error)
// console.log(error.stack)
