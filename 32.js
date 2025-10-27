// Hoisting

// let a = 10
// console.log(a);

hello(); // hoisting

function hello(){
    console.log("Hello");
}
hello();

// hello1() hoisting doesnt work here
let hello1 = () => {
    clg("Hello");
}
hello1();