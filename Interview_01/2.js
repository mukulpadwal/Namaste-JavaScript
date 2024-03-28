var number = 10;

(() => {
    console.log(`value of number is ${number}`);

    number = 20;

    console.log(`value of number is ${number}`);
})();

console.log(`value of number is ${number}`);

var number = 30;

console.log(`value of number is ${number}`);

/* 
OUTPUT : 

value of number is 10
value of number is 20
value of number is 20
value of number is 30
*/

/* 
CONCEPTS : iife, execution context
*/