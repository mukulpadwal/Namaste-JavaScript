console.log("A");
console.log("B");

setTimeout(() => {
  console.log("C");
}, 0);

Promise.resolve().then(() => console.log("D"));

/*
OUTPUT:

A
B
D
C
*/

/*
CONCEPTS: eventloop, webapis, Task Queue
*/
