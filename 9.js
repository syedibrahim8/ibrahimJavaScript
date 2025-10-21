// Redeclare vs Reassign

// Redeclare means using var let const 2 times
// While updating 
// Redeclare works in only var

// Reassign means without using var let
// While updating
// Reassign works in var let

// Redeclare 
 var age = 20;
 var age = 30;            // redeclared & updated var 
 console.log(age);

// Reassign
 let a = 10;
 a = 20;                  // reassigned let
 console.log(a);
 
// const cannot be redeclared and reassigned
 const aadharcard = "1234567890";
 /*
 aadharcard = "0987654321"; // can't redeclare & can't reassign
 console.log(aadharcard); 
 */ 
