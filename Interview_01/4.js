variable = 10;

(() => {
  foo = 100;
  console.log(`value of variable is ${variable}`);
  var foo = 100;
  variable = 20;
  console.log(`value of variable is ${variable}`);
})();

console.log(`value of foo is ${foo}`);
console.log(`value of variable is ${variable}`);
var variable = 100;

/*
OUTPUT: 

value of variable is 10
value of variable is 20
D:\Namaste-JavaScript\Interview_01\4.js:11
console.log(`value of foo is ${foo}`);
                               ^

ReferenceError: foo is not defined
*/

/*
CONCEPTS : closure, execution context of functions
-> Each function execution creates a new execution context and discards it as soon as it gets fully executed
*/
