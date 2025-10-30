// String methods

// 1. charAt()

let str1 = "Hello";
console.log(str1.charAt(0));

// 2. concat() method
let a1 = "Hello ";
let b1 = "World";
console.log(a1.concat(b1));

// 3. includes 
let c1 = "Hello Iam CFI Student";
console.log(c1.includes("CFI"));

// 4. length
let d1 = "Hello"
console.log(d1.length);

// 5. indexOf
let e1 = "hell0 everyone"
console.log(e1.indexOf("l"));

// 6. lastIndexOf
let f1 = "hello everyone"
console.log(f1.lastIndexOf("l"));

// 7. repeat() method
let g1 = "Test CFI "
console.log(g1.repeat(10));

// 8. replace() method
let h1 = "Hello world";
console.log(h1.replace("world", "CFI"));

// 9. split()
let i1 = "Hello,I,am,ibrahim"
console.log(i1.split(","));
// it makes an array and elements are based on the argument

// 10. toUpperCase() method
let j1 = "Hello everyone"
console.log(j1.toUpperCase());

// 11. toLowerCase() method
console.log(j1.toLowerCase());

// 12. trim() method
let k1 = " Hello Iam CFI ";
console.log(k1.trim());

// 13. slice() method
let m1 = "hello";
//index   01234
//le      12345
console.log(m1.slice(0,4)); // syntax console.log(variablename.slice(index,length))

// 14. padStart method()
let n1 = "Hello"
let n2 = n1.padStart(10,"*") // *****hello
let n3 = n1.replace("Hello","*****") // *****
console.log(n2.concat(n3)) // *****hello*****