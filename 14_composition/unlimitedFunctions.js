function multiply(args) {
  return args[0] * args[1];
}
function square(val) {
  return val * val;
}

function compose(...funs) {
  return function (...value) {
    return funs.reduce((a, b) => b(a), value);
  };
}

const task = compose(multiply, square);

console.log(task(2, 3));
