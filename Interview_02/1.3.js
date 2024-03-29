async function getData() {
  return 1;
}

console.log("A");
console.log("B");

// Sent to task/callback queue which has low priority
setTimeout(() => {
  console.log("C");
}, 0);

// Promises are Sent to Micro Task Queue which has higher priority than task queue
getData().then(() => console.log("Data Received Successfully..."));

console.log("D");

/*
OUTPUT:

A
B
D
Data Received Successfully...
C 
*/

/*
CONCEPTS: eventloop, webapis, Task Queue, Micro Task Queue (Promises)
*/
