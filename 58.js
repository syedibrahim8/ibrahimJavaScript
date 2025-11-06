// throw in Javascript
/*
throw is used to manually create (throw) an error in your code.

you can think of it like saying:
"if something goes wrong here, stop everything and jump to catch block"
*/

try{
    let age = 15;
    if (age < 18){
        throw "You must be 18 years older";
    }
    console.log("welcome");
}catch(error){
    console.log(error);
}