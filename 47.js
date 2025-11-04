// factorial in js

// function factorial(n){
//     let fact = 1
//     for (i = n ; i >= 1; i--){
//         fact *= i
//     }
//     console.log(fact);
// }
// factorial(5);

// function using recursion

function factori(n){
    if (n == 0){
        return 1;
    }
    return n * factori(n - 1);
}
let output = factori(7);
console.log(output);
// console.log(factori(7));