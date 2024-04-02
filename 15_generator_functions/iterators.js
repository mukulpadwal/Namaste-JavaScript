// Iterators

// [1, 2, 3, 4, 5, 6];

// for (const val of [1, 2, 3, 4, 5, 6]) {
//   console.log(val);
// }

function makeIterator(start = 0, end = Infinity, step = 1) {
  let nextStart = start;
  let iterationCount = 0;

  return {
    next() {
      let result;
      if (iterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
}

const myIterator = makeIterator(1, 10, 1);
let res = myIterator.next();

while (!res.done) {
  console.log(res.value);
  res = myIterator.next();
}
