const marvelHeros = ['thor', 'ironmain', 'spiderman'];
const dcHeros = ['superman', 'flash', 'batman' ];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros); // [ 'thor', 'ironmain', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros[3][0]);

// 1) .concat() : returns a new array

// const concatHeros = marvelHeros.concat(dcHeros);
// console.log(concatHeros);


// Spread Operater : kaanch ka glass drop karo spread ho jaega

const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros);

// Nested arrays
const anotherArr = [1,2,3, [4,5,6], 7, [6, 7, [8,9,9]]];

// .flat(depth)-> Infinity
const realAnotherArray = anotherArr.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray('Mukul'));
console.log(Array.from('Mukul'));
console.log(Array.from({name: 'Mukul', age: 23})); // we need to tell which array we need keys or values interesting case
 
let score1 = 100;
let score2 = 200;
let score3 = 300;

 console.log(Array.of(score1, score2, score3));




