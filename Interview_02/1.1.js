console.log('A');
console.log('B');

setTimeout(() => {
    console.log('C');
}, 5 * 1000);

console.log('D');



/*
OUTPUT:

A
B
D
C after 5 seconds
*/

/*
CONCEPTS: eventloop, webapis, Task Queue
*/