// Synchronous vs Asynchronous
/*
In synchronous code, each line runs one after another, waiting
for the previous one to finish before moving on

JS waits for each line to complete before running to next one.

These run immediately, line by line, and block the next task untill they finish.
*/

// Ex

console.log("step1");
console.log("step2");
console.log("step3");

// Synchronus
/*
|           Type             |                    Example                    |
|----------------------------|-----------------------------------------------|
| Normal code execution      |`console.log()`,variable decleration           |
| Math operations            | `let sum = a + b;`                            |
| Loops                      |`for`,`while,`do.....while`                    |
| conditional statements     | `if`,`else`,`switch`                          |
| Function calls (normal)    | `function myfunc(){}`->`myfunc()`             |
| JSON parsing               | `JSON.parse()`,`JSON.stringify()`             |
| DOM manipulation (usually) |`document.getElementById(), element.innerHTML = "..." |
| Error handling             | try{...} catch(err){...}                      |
| Blocking alerts            | alert(), prompt(), confirm()                  |
|----------------------------|-----------------------------------------------|

These executes in order and block the call stack until done
*/