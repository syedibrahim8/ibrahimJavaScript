// 4.Object.freeze()
/*
Freezes an object so that:you cannot add, remove, or change properties.
It makes the object completely immutable
*/

let person ={
    fname : "Syed",
    age : 20,
    city : "Hyderabad"
}
console.log(person);
Object.freeze(person);
person.mobile = 987654320;
person.age = 22;

// 5.Object.isFrozen()
// checks whether the object is frozen or not
// returns in boolean value
console.log(Object.isFrozen(person));