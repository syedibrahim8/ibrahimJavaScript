// 3. callback function
/*
A calback function is a function passed as an argument to another function, and is called ("called back") later inside that function.
*/

function greet(fname,callback){
    console.log("Hello" + fname);
    callback(); // == aftergreeting()
}
function aftergreeting(){
    console.log("Welcome");
}
greet("Syed", aftergreeting)