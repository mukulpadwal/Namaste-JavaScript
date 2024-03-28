foo = 30;

console.log(`FOO ${foo}`);

var foo = 100;

console.log(`FOO ${foo}`);


/*
OUTPUT:

FOO 30
FOO 100
*/

/*
CONCEPTS : hoisting in var
-> here temporal dead zone does not work like in let, const
*/