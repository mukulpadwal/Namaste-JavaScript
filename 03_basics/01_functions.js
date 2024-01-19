// Wrap your code in small package so that we can use that simple whenever we want to perform that action rather than writing the logic again and again. Make our code more modular. 

/*
SYNTAX : 

// Function declaration

function name(parameters) {
    // Your code here
}

name -> function reference
name(arguments) -> function execution
*/

function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("K");
    console.log("U");
    console.log("L");
}

// sayMyName()


// Let's make simple function to add two numbers which prints them

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers(); // Returns NaN
// addTwoNumbers(1, 2); // 3
// addTwoNumbers(1, '3'); // 13
// addTwoNumbers(1, 'a'); // 1a
// addTwoNumbers(1, null); // 1
// addTwoNumbers(null, 1); // 1
// addTwoNumbers(null); // NaN
// addTwoNumbers(1, undefined); // NaN
// addTwoNumbers(null, undefined); // NaN

// NOTE : if we does not pass a number to the above funtion then anamoly can occur. We need to do checking for proper inputs


// -----------------------------------------------


// Let's make simple function to add two numbers which return it

function returnAddTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    // if we write any code after the return statement it will never run
    console.log('Hello I am under the return. Please print me.');
}

returnAddTwoNumbers(3, 5) 
const result = returnAddTwoNumbers(3, 5) 
console.log("Result: ", result); // Result:  8


// --------------------------------------------------


// Let's make simple function to which has a default value in case the user does not pass it.

function loginUserMessage(username = "defaultUser"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("mukul")) // mukul just logged in
console.log(loginUserMessage()) // defaultUser just logged in


// ----------------------------------


// Shopping Cart Problem
// we do not know ki kitne argument aane wale hai

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 300, 400)); // [ 200, 300, 400 ]

// To solve this problem we have a rest operator ...


function calculateCartPrice1(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice1(200, 300, 400, 2000)); // [ 400, 2000 ]


// ---------------------------------------------


// Passing objects in function

const user = {
    username : "Mukul",
    item: 'shoes',
    price: 1000
}

function handleObject(anyObject) {
    console.log(`${anyObject.username} ${anyObject.price}`)
}

handleObject(user);
handleObject({
    username: 'l',
    price: 9090
});


// Passing Arrays in function

const myArray = [1, 2, 3, 4];

function handleArray(anyArray) {
    console.log(anyArray[1]);
}

handleArray(myArray);

