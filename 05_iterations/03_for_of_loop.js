// for...of loop

// ["", "", ""]
// [{}, {}, {}]

/*
SYNTAX: 
    for (const iteration of object) {

    }
*/

// Let's iterate through the array of numbers
const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(`${num}`);
}


const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`${greet}`);
}


// Data type Time
// Maps : object holds key-value pair. Remembers original order.
// No duplicate values in maps.

const map = new Map();
map.set('IN', 'India');
map.set('US', 'Unites States of America');
map.set('FR', 'France');
map.set('IN', 'India');

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":", value);
}



// Objects

const myObject = {
    'Game1': "mario",
    "Game2": "nfs",
    "Game2": "GTA"
}

// Not working with objects
// for (const [key, value] of myObject) {
//     // console.log(key, ":", value); // TypeError: myObject is not iterable
// }