// Number methods
// 1. parseFloat()
// They are built in Javascript functions that convert strings into numbers.


// Convert to decimal number
// convert string to number

console.log(parseFloat("43.5"));
console.log(parseFloat("99cm"));
console.log(parseFloat("a1b2"));

// 2. parseInt ... converts to number
// we use parseInt for number systems

console.log(parseInt("1111",2));
console.log(parseInt("1010",2));
console.log(parseInt("1000",2));
console.log(parseInt("1100100",2));
console.log(parseInt("1100011",2));

console.log(parseInt("45.6789"));


// 3. toFixed()
// converts number to string and round off the the decimal part & gives approximat value

let num = 67.73829;
console.log(num.toFixed());
console.log(num.toFixed(1));
console.log(num.toFixed(3));

console.log((20.678).toFixed());


// 4. toLocaleString()
/*
toLcaleString() is a number method that formats a number according to a specific locale (country/language) or style - like adding commas, currency, or percentage 
*/

// syntax => number.toLocaleString([locales],[options])

/*
locales -> optional string like "en-US", "hi-IN", "de-DE", etc.
(define language and region format)

options -> optional object to control formatting style
(currency, decimals, etc..)
*/

let n = 12345678.987;
console.log(n.toLocaleString("hi-IN"));

let price = 2500;
console.log(price.toLocaleString("hi-IN", { style : "currency", currency : "INR"}));
console.log(price.toLocaleString("ar-SA", { style : "currency", currency : "SAR"}));
console.log(price.toLocaleString("en-US", { style : "currency", currency : "USD"}));



