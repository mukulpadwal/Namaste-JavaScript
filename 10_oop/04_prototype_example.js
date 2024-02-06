/*
    GOAL : 
        let's say we have a string `myName = "     Mukul     "`

    CASE : we need to create a custom method that returns us the trueLength of the string after triming the values
*/


// let myName = "Mukul";
// console.log(myName.length); // 5

// let sayMyName = "Mukul           ";
// console.log(sayMyName.length); // 16


const heros = ['thor', 'spiderman'];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mukul = function () {
    console.log('Mukul is present in all objects');
}

console.log(heroPower.mukul()); // Mukul is present in all objects
console.log(heros.mukul()); // Mukul is present in all objects



Array.prototype.heyMukul = function () {
    console.log('Mukul says hello');
}

// console.log(heroPower.heyMukul()); // TypeError: heroPower.heyMukul is not a function
// console.log(heros.heyMukul()); // Mukul says hello






// INHERITANCE

const User = {
    name: "mukul",
    email: "mukul@gmail.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;


// New Approach modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);






// SOLUTION OF OUR USE CASE
const n = "mukul   ";

String.prototype.trueLength = function () {
    console.log(this);
    console.log(`${this.trim().length}`)
}

n.trueLength();
"MUK".trueLength();