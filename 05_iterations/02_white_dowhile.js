// while loop

/*
    SYNTAX:  

    initialization
    while (condition) {
    
        increment/decrement
    }
*/

// Printinf numbers from 10 to 0
let a = 10;
while(a >= 0){
    // console.log(`${a}`);
    a--;
}

// Traversing array

let myArr = ["flash", "batman", "superman"];
let index = 0;
while (index < myArr.length) {
    console.log(`${myArr[index]}`);
    index++;
}


// --------------------


// do-while loop : it will always run at-least once

/*
    SYNTAX:

    initialization
    do {
        increment/decrement
    } while (condition);
*/


// Printing from 1 to 10
let score = 1;

do {
    console.log(`Score : ${score}`);
    score++;
} while (score <=10);

score = 11;

do {
    console.log(`Score : ${score}`);
    score++;
} while (score <=10);