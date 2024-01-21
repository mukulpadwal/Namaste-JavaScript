// Immediately Invoked Function Expressions (IIFE)

// Why IIFE
// Sometimes we have problem through pollution of Global Scope, to avoid the pollution we use iife

// One way to invoke the function that we usually use.
function one() {
    console.log(`DB Connected`);
}
one();

// Error : SYNTAX ERROR
// function one() {
//     console.log(`DB Connected`);
// }()

// Valid
// This is also known as named IIFE
(function one() {
    console.log(`DB Connected`);
})();

// Definition Execution 
// () ()

// Arrow Function IIFE
// Also known as unnamed IIFE
(() => {
    console.log(`DB Connected TWO`);
})();


// Note : "use ;" sometime what happens when we are calling two iife one after other without using semicolon is it does not know the scope where to end it and throws and error so to avoid that error we use explicitly use semicooon to end the scope

// Passing parameters in IIFE
((PORT) => {
    console.log(`DB Connected TWO ${PORT}`);
})(1234);
