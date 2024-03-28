const obj1 = {
  height: 10,
};

console.log(obj1.height);

delete obj1.height;

console.log(obj1.height);

/*
OUTPUT:

10
undefined
*/

const obj2 = Object.create({
  height: 10,
});

console.log(obj2.height);

delete obj2.height;

console.log(obj2.height);

/*
OUTPUT:

10
10
*/

/* 
CONCEPT: prototype, object
*/
