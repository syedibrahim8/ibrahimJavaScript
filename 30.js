// 4. function expressions 
// A Function can also be stored in a variable

// simple
function mul(x, y){
    return x*y;
}
let final = mul(2, 3);
console.log(final*2);

// // function expression
let div = function (x, y){
    return x/y;
}
let total = div(4, 2);
console.log(total*2);