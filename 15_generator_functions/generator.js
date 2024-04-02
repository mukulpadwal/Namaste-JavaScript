function* customGeneratorFunction(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

const one = customGeneratorFunction(1, 5, 1);

for (const v of one) {
  console.log(v);
}
