// Asynchronus (non blocking)
/*
These are delegated to the browser or Node.js API's and run in the background, allowing
JS to move on.

|           Type             |                         Example                          |
|----------------------------|----------------------------------------------------------|
| Timers                     | setTimeout(), setInterval()                              |
| Promises                   | Promise.resolve(), Promise.reject(), .then(), .catch()   |
| Async functions            | async function getData() {await fetch(...)}              |
| Fetch API                  | fetch("https://api.example.com")                         |
| Network requests           | XMLHttpRequest, axios.get()                              |
| File system (Node.js)      | fs.readFile(), fs.writeFile() (async versions)           |
| Database queries           |MongoDB, MySQL queries, etc.                              |
| Event listeners            | button.addEventListener("click",...)                     |
| Animation frames           | requestAnimationFrame()                                  |
| Web Workers                | Background threads for heavy computation                 |
|----------------------------|----------------------------------------------------------|
*/