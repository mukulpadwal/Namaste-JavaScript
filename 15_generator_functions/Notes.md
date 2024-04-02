# Iterators and generators

- Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.

## Iterators

- In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

- Specifically, an iterator is any object which implements the Iterator protocol by having a `next()` method that returns an object with two properties:

-- `value`
-- The next value in the iteration sequence.

-- `done`
-- This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.


```
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

---------------------------------------------------------

const iter = makeRangeIterator(1, 10, 2);

let result = iter.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

```


## Generator functions
- While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the function* syntax.

- When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

```
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
```

