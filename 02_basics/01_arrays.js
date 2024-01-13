// Arrays : storing a collection of multiple items under a single variable name


// Ways to declare an array

const myArr = [0, 1, 3, 5 ,7];
const myHeros = ['shaktiman', 'perman', 1, true];
const myArr2 = new Array(1, 2, 3, 4, 5);

// Some important points
    // -> 0 based index
    // -> shallow copies : share the same reference
    // -> deep copy : do not share the same reference


// console.log(typeof myArr); // object
// console.log(myArr.length); // 5
 

// Some Array Methods

// 1) .push() => Adds and element at the end of the array
myArr.push(6);
myArr.push(7);

console.log(`myArr after pushing 6 and 7 =>  ${myArr}`);


// 2) .pop() => removes the last element from the array. Good to know that It also returns the element it removes
console.log(`popped element from myArr => ${myArr.pop()}`);
console.log(`myArr after the use of .pop() method => ${myArr}`);

// 3) .unshift() => adds the element to the start of the array
myArr.unshift(0)
console.log(`myArr after unshifting 0 => ${myArr}`);

// 4) .shift() => removes the element from the start of the array. Good to know that It also returns the element it removes
console.log(`shifted element from myArr => ${myArr.shift()}`);
console.log(`myArr after the use of .shift() method => ${myArr}`);

// 5) .includes(element) => returns true/false based of the availability of the elemet in the array
console.log(`myArr.includes(value) => ${myArr.includes(9)}`);

// 6) .indexOf(element) => retuns the index at which the element is present in the array. Returns -1 if not present
console.log(`myArr.indexOf(value) => ${myArr.indexOf(9)}`);

// 7) .join() => returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
const newArr = myArr.join(); // converts into string
const newArr2 = myArr.join('');
const newArr3 = myArr.join('-');

console.log(`Original myArr => [${myArr}]`);
console.log(`when we use join on myArr => ${newArr}`);
console.log(`when we use join on myArr => ${newArr2}`);
console.log(`when we use join on myArr => ${newArr3}`);


// slice vs splice

// 1) slice : returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const originalArray = [1, 2, 3, 'Mukul', "Padwal"];
console.log(`Condition before using .slice() [${originalArray}]`);

const mySlicedArray = originalArray.slice(1, 3) // does not include the last

console.log(`mySlicedArray .slice() [${mySlicedArray}]`);

console.log(`Condition after using .slice() [${originalArray}]`);

// 2) splice : changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

console.log(`Condition before using .splice() [${originalArray}]`);

const mySplicedArray = originalArray.splice(1, 3) // it include the last
console.log(`mySlicedArray .slice() [${mySplicedArray}]`);
console.log(`Condition after using .splice() [${originalArray}]`);



