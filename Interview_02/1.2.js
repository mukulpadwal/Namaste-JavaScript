console.log("A");
console.log("B");

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");

/*
OUTPUT:

A
B
D
C after 0 seconds (it will wait for the Call Stack to get empty)
*/

/*
CONCEPTS: eventloop, webapis, Task Queue
*/
