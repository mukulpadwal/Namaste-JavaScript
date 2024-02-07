// The primitive datatypes are stored in the Stack Memory
// The non-primitive/reference datatypes are stored in the Heap Memory

let myName = 'Mukul'
let myNameCopy = myName
myNameCopy = 'MP'

console.log(myName);
console.log(myNameCopy);

// In a nutshell the copy of the value is passed to the other variable keeping the original one as it is

let userOne = {
    name : 'xyz',
    upiId : 'xyz@ybl'
}

let userTwo = userOne;

userTwo.name = 'Mukul';

console.log(userOne.name);
console.log(userTwo.name);

// In a nutshell the location reference of the userOne is given to userTwo