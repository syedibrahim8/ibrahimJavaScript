// What is a switch statement?
/* A switch statement is used to compare one value against multiple possible cases.
its often cleaner than writing multiple if...else if conditions.
*/

// Basic syntax
/*
switch (expression){
 case value1:
    // Code block if expressions === value1
    break;

 case value2:
    // Code block if expressions === value2
    break;
    
 default:
    //code block if no case matches
}
*/
let day = "Sunday";

switch (day) {
  case "Sunday":
    console.log("It's a Sunday");
    break;
  case "Monday":
    console.log("It's a Monday");
    break;
  case "Tuesday":
    console.log("It's a Tuesday");
    break;
  case "Wednesday":
    console.log("It's a Wednesday");
    break;
  case "Thursday":
    console.log("It's a Sunday");
    break;
  case "Friday":
    console.log("It's a Friday");
    break;
  case "Saturday":
    console.log("It's a Saturday");
    break;
  default:
    console.log("Invalid! Enter correct day");
}

let day1 = "Thursday";
if (day1 === "Sunday") {
  console.log("It's a Sunday");
} else if (day1 === "Monday") {
  console.log("It's a Monday");
} else if (day1 === "Tuesday") {
  console.log("It's a Tuesday");
} else if (day1 === "Wednesday") {
  console.log("It's a Wednesday");
} else if (day1 === "Thursday") {
  console.log("It's a Thursday");
} else if (day1 === "Friday") {
  console.log("It's a Friday");
} else if (day1 === "Saturday") {
  console.log("It's a Saturday");
} else {
  console.log("Enter correct day");
}
