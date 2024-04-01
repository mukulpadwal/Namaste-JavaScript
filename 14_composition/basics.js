// function composition is a powerful technique that allows developers to combine multiple functions into a single function.

function add(a, b) {
  return a + b;
}

function square(val) {
  return val * val;
}

function composeTwoFunction(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

// Modern syntax

const composeTwoFunctionAdv = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

// SITUATION : first we need to add 2 numbers and square the output

// const addResult = add(1, 2);
// console.log(square(addResult));

const task1 = composeTwoFunction(add, square);
console.log(task1(2, 3));

const task2 = composeTwoFunctionAdv(add, square);
console.log(task2(2, 3));
