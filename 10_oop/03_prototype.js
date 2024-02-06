// Prototypal Behaviour
// This topic is to understand the working of javascript

// NOTE : In javascript everything is object

function sayMyName(name) {
    console.log(`Hello ${name}`);
}


sayMyName.lastName = "Padwal";

sayMyName('Mukul'); // Hello Mukul
console.log(sayMyName.lastName); // Padwal
console.log(sayMyName.prototype); // {}




// Let's go deeper

function createUser(username, score) {
    this.username = username;
    this.score = score;
}


// Adding custom functionality
createUser.prototype.increment = function () {
    // score++ // will not know the context
    this.score++
}

createUser.prototype.printMe = function () {
    // console.log(`${score}`); // kis ka score batau
    console.log(`${this.score}`); // jis ne bulaya hai uska
}

// const mukul = createUser('Mukul', 90);
// const padwal = createUser('Padwal', 10);


// this -> jisnei bhi bulaya hai uska score badha do


// mukul.printMe(); // TypeError: Cannot read properties of undefined (reading 'printMe')


const mukul = new createUser('Mukul', 90);
const padwal = new createUser('Padwal', 10);

mukul.printMe();