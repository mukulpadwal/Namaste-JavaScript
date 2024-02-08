// Interview Question
// Can we change the value of Math.PI.
// If yes how? If no why?


console.log(Math.PI); // 3.141592653589793
Math.PI = 7;
console.log(Math.PI); // 3.141592653589793


// We have a property named getOwnPropertyDescriptor(ObjectName, PropertyName) that gives us some hidden details obout the property of an object.
// console.log(Math); // Object [MATH] {}
const description = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(description);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

NOTE : here we can see the properties have been set to false. This is the reason for the question.
*/




// Let us try to create our custom object and see if we can do the same
const obj1 = {
    name: "mukul",
    age: 23,
    email: "mukul@mukul.com",
    sayHi: function () {
        console.log(`Hello, ${this.name}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(obj1, 'name'));

// Let us iterate through this object

for (const [key, value] of Object.entries(obj1)) {
    // edge case
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

// Now let us stop the iteration of any property

Object.defineProperty(obj1, 'name', {
    writable: false,
    enumerable: false
})


for (const [key, value] of Object.entries(obj1)) {
    // edge case
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

