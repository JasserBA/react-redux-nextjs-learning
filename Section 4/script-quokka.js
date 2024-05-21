// Asynchronous JavaScript: Promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => res.json())
.then((data) => console.log(data))

// It works log first then data of json
console.log("data");


// Asynchronous JavaScript: Async/Await
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
    return data;
}
// the log it shows first before inside function
const todos  = getData();
// It will show promise because it will called todos that is not responsing a fetch yet
console.log(todos);

console.log("test");