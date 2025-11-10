// Dates in Javascript
/**
 JavaScript Date and time
 In Javascript, date and time are represented by the date object. the date object provides
 the date and time information and also provides various methods.

 A Javascript date defines the ECMAScript epoch that represents milliseconds since 1 january 1970 UTC.
 This datw time is the same as the UNIX eopch (predominant base value for computer - recorded date and time values)

 creating date objects
 there are four ways to create a date object.

 new Date()
 new Date(milliseconds)
 new Date(Date string)
 new Date(year,month,day,hours,minutes,seconds,milliseconds)

 Javascript has a built in date object to handle dates and times.
 */

const currentDate = new Date();
console.log(currentDate);
const date1 = new Date(2025,11,10)
console.log(date1);
const date2 = new Date(1760000000000)
console.log(date2);
let date3 = new Date("2025-11-10T11:23:45.45Z")
console.log(date3);

// Date methods
// 1. getMilliseconds()
// 2. getFullYear()
// 3. getMonth()
// 4. getDate()
// 5. getHours()
// 6. getDay()
// 7. getMinutes()
// 8. getSeconds()

let now = new Date();
console.log(now);

let milliSeconds = now.getMilliseconds()
console.log(milliSeconds);

let fullYear = now.getFullYear()
console.log(fullYear);

let month = now.getMonth()
console.log(month);

let date = now.getDate()
console.log(date);

let hours = now.getHours()
console.log(hours);

let day = now.getDay()
console.log(day);

let minutes = now.getMinutes()
console.log(minutes);

let seconds = now.getSeconds()
console.log(seconds);

// How to get till now milliseconds

let millSeconds = now.getTime()
console.log(millSeconds);

let millSSeconds = Date.now();
console.log(millSSeconds);

let nowMillSeconds = +new Date()
console.log(nowMillSeconds);