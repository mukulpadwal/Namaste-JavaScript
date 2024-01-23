// if, if-else, if-elseif-else
// Used to run block of code based on certain conditions


// 1. if

/*
SYNTAX : 
    condition : should be true in order to execute the code inside scope

    if (condition) {
        // SCOPE
    }
*/

const isUserLoggedIn = true;

if(isUserLoggedIn) {
    console.log(`Hello`);
}

// Conditional Operators
// <, >, >=, <=, ==, !=, ===, !==

const score = 200;

if(score > 100){
    const power = "fly";
    // console.log(`User Power : ${fly}`);
}
// console.log(`User Power : ${fly}`); // fly is not defined : Reference Error 


// Implicit Scope

const balance = 1000

// if(balance > 500) console.log('test');

// Not Good Code Practice
// if(balance > 500) console.log('test'), console.log("test2");

// 2. if-elseif-else


/*
SYNTAX : 
    condition : should be true in order to execute the code inside scope

    if (condition) {
        // SCOPE
    } else if(condition) {
        //
    } else if(condition) {
        //
    } else {
        //
    }
*/

if(balance < 500) {
    console.log(`less than 500`);
} else if(balance < 750) {
    console.log(`less than 750`);
} else if(balance < 900) {
    console.log(`less than 900`);
} else {
    console.log(`default`);
}

// 3. if-else

/*
SYNTAX : 
    condition : should be true in order to execute the code inside scope

    if (condition) {
        // SCOPE
    } else {
        // 
    }
*/

if(balance < 500) {
    console.log(`less than 500`);
} else {
    console.log(`default`);
}


// Logical Operators : &&, ||, !

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

// Both should be true then only the code inside if will execute
if(userLoggedIn && debitCard) {
    console.log(`Ja Karle Shopping`);
}

// Any one should be true to run the code
if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log(`Kaarle login`);
}


