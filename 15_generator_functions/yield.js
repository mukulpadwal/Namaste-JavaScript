function* count() {
  yield 2;
  yield 4;
  yield 6;
}

const even = count();

for (const eve of even) {
  console.log(eve);
}
