// Scope in JavaScript refers to the visibility of variables and functions. In JavaScript, there are two types of scopes: global and local.

/*
1) Global scope:
1) Variables declared outside of any function are said to be in the global scope. These variables can be accessed from anywhere in the program.

2) Local scope:
2) Variables declared inside a function are said to be in the local scope. These variables can only be accessed from within the function in which they are declared.


There are also two types of variables in JavaScript: let and const.
-> let: variables are block-scoped, which means they can only be accessed from within the block in which they are declared.
-> const: variables are also block-scoped, but they cannot be reassigned.
*/

// --------------------------------------------------------------------------------------------------

// Let's understand this with an example
// Scope : {} -> do not compare it with objects

let a1 = 10
const b1 = 20
var c1 = 30

// We will always go inside this if and it has its own scope
if(true) {
    console.log(`Inside if let a1 value = ${a1}`);  // 10 
    console.log(`Inside if const b1 value = ${b1}`); // 20
    console.log(`Inside if var c1 value = ${c1}`); // 30
}

console.log(`Outside if let a1 value = ${a1}`);  // 10 
console.log(`Outside if const b1 value = ${b1}`); // 20
console.log(`Outside if var c1 value = ${c1}`); // 30


// Here we have no problem the variables a,b,c are avaiable in both the global and local scope

// -----------------------------------------------------------------------------------------------------------


// We will always go inside this if and it has its own scope
if(true) {
    let a2 = 10
    const b2 = 20
    var c2 = 30
    console.log(`Inside if let a2 value = ${a2}`);  // 10 
    console.log(`Inside if const b2 value = ${b2}`); // 20
    console.log(`Inside if var c2 value = ${c2}`); // 30
}

// console.log(`Outside if let a2 value = ${a2}`);  // ReferenceError : a1 is not defined 
// console.log(`Outside if const b2 value = ${b2}`); // ReferenceError : b2 is not defined
console.log(`Outside if var c2 value = ${c2}`); // 30

// Here the problem arised  the var c2 got leaked out of it's scope which can cause serious issues while coding in a team. So we should avoid using var keyword for declaring variables unless needed.

// -----------------------------------------------------------------------------------------------------------


// Nested Scope : And the concept of closures
// Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.

function one(){
    const username = "Mukul";
    function two() {
        const website = "GitHub CodeSpaces";
        console.log(username);
    }
    // console.log(website); // ReferenceError: website is not defined

    two();

    // console.log(website); // ReferenceError: website is not defined
}

// one();



if (true) {
    const username = "Mukul";

    if (username === "Mukul") {
        const website = " CodeSpace";
        console.log(username + website); 
    }

    // console.log(website); // ReferenceError: website is not defined
}

// console.log(username); // ReferenceError: username is not defined



// ======================= Interesting Example =======

// Here we are introducing the concept of hoisting
// Hoisting : Hoisting in JavaScript is a mechanism where all variable and function declarations are moved to the top of their scope before code execution. This means that variables and functions can be used before they are declared.

addOne(5); // It will run without any error
function addOne(num) {
    return num + 1;
}


// addTwo(5); // Here we can not use it like this because initially when we are addTwo is undefined which is yet to be declared as we are storing it in a variable
const addTwo = function (num) {
    return num + 2;
}
