/*
Function Scope         VAR   LET   CONST
Inside of Function      Y     Y      Y
Outside of Function     N     N      N
*/

// function decleration 
// VAR
function hello(){
    var a = 10;
    console.log(a);
}
// function calling
hello();

// LET
function hey(){
    let a = 20;
    console.log(a);
}
hey();

// CONST
function yo(){
    const a = 30;
    console.log(a);
}
yo();