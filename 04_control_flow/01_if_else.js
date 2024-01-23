// if

/*
SYNTAX : 
Condition : should be true in order to execute the code inside scope

if (condition) {
    // SCOPE

}
*/

const isUserLoggedIn = true;

if(isUserLoggedIn) {
    console.log(`Hello`);
}


// <, >, >=, <=, ==, !=, ===, !==

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User Power : ${fly}`);
// }
// console.log(`User Power : ${fly}`);



const balance = 1000

// Implicit Scope
// if(balance > 500) console.log('test');


// Not Good Code Practice
// if(balance > 500) console.log('test'), console.log("test2");;


// if(balance < 500) {
//     console.log(`less than 500`);
// } else if(balance < 750) {
//     console.log(`less than 750`);
// } else if(balance < 900) {
//     console.log(`less than 900`);
// } else {
//     console.log(`default`);
// }




// REAL LIFE USE CASE

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;
// Logical Operators

if(userLoggedIn && debitCard) {
    console.log(`Ja Karle Shopping`);
}


if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log(`Kaarle login`);
}


