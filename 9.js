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
 a = 20;                  // reassigned let but can't redeclare let
 console.log(a);
 
// Const cannot be redeclared or reassigned
 const aadharcard = "1234567890";
 console.log(aadharcard);
 /*
 aadharcard = "0987654321"; // can't redeclare & can't reassign
 console.log(aadharcard); ❌ doesn't execute 
 */ 
