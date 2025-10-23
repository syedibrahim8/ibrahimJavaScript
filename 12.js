// Bitwise Operator
// Bitwise Operator treat its opereands as a set of 32 bit binary digits (zero's and one's)
// and perform action. Therefore, the result is shown as a decimal.
/*
| Operator |     Name    |   Example   |
|----------|-------------|-------------|
|    &     | Bitwise AND |    x & y    |
|    |     | Bitwise OR  |    x | y    |
|    ^     | Bitwise XOR |    x ^ y    |
|    ~     | Bitwise NOT |    x ~ y    |
*/
/* Note : JavaScript minimum and maximum number ranges from 
        ==> -(2^53-1) to (2^53-1)
        ==> -9,007,199,254,740,991
    but, Bitiwse only works till
    ==> -(2^31) to (2^31-1)
    ==> -2147483648 to 21474883647     
*/


// Example
let a = 10;
let b = 2;
console.log(a & b);           // AND operator
console.log(a | b);           // OR operator
console.log(a ^ b);           // XOR  operator
console.log(~a);              // (~x) = -(x+1) NOT operator

