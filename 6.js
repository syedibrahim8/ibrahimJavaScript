// Scoping in JavaScript
/*There are 3  types of scoping in JS
 1.Block scope
 2.Functional scope
 3.Global scope
 */

 //Block Scope
 /*
 {}==> block
 {_______
  _________}
 */

/*
 Block Scope                VAR  LET  CONST
 Inside of Block             Y    Y     Y  
 Outside of Block            Y    N     N
*/

{
    let a = 10
    console.log(a);
}
// console.log(a) X can't access out of the blocks


{
    const b = 20   
    console.log(b);
}
// console.log(a) X can't access out of the blocks
