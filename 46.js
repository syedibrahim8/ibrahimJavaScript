// Recursion is when a function calls itself to solve a smaller version of the same problem
// untill it reaches a base case (a stopping point).
// function hello(){
//     console.log("Hello CFI")
//     hello()
// }
// hello()

function call (num){
    console.log(num);
    if (num == 1){
        return console.log("Stop");
    }
    console.log("Run");
    call (num - 1)
}
call(5)

