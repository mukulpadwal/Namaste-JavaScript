age = 100;

console.log(`Value of age is : ${age}`);

let age = 30;

console.log(`Value of age is : ${age}`);

/*
OUTPUT : 

age = 100;
    ^
ReferenceError: Cannot access 'age' before initialization
*/

/* 
CONCEPT : Temporal Dead Zone
-> A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
*/
