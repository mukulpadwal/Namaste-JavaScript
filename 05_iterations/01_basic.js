// Loops : when we want to perform a task N number of times we use loops
// There are many loops in javascript 

// 1. For Loop
/*
SYNTAX : 
    for (initialization; condition; incremnet/decrement) {
        // Code Logic
    }
*/

// Let's print number from 0 to 10

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element); 
}


// Nested Loops

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and Inner Loop ${i}`);
        // console.log(i + '*' + j + " = " + i*j);
    }
}


// Traversing through an array using for loop
const myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



// KeyWords : break and continue
// break : used to go out of the flow of loop at some certain condition
// continue : used to skip one iteration based on some specific condition

// 1. break
// This loop will stop as soon as the index value becomes 5
for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of index is ${index}`);
    
}

// 2. continue
// This loop will not print 5 and move to the increment part of the loop then print the remaining numbers
for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of index is ${index}`);
}


// NOTE : unlike other languages javascript does not through any error if we try to loop mor than the length of array it returns undefined instead (Which is not a good thing so we should check our conditions carefully.)