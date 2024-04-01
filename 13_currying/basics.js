// Suppose we want to run the below function only when we get all the three parameters

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

// One way can be to wait for all the three arguments and then execute the function

// Other way is that we can make the function curry
function addCurry(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(addCurry(1)(2)(3));

// DEFINITION
// currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each.
