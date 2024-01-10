// Strings are useful for holding data that can be represented in text form.

const name = "Mukul"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Template Literals

const gameName = new String('Mukul-MP-com')

// console.log(gameName[0]); // M
// console.log(gameName.__proto__);


// console.log(gameName.length);  // 12
// console.log(gameName.toUpperCase()); MUKUL-MP-COM
console.log(gameName.charAt(2)); // k
console.log(gameName.indexOf('t')); // -1

const newString = gameName.substring(0, 4) // Muku
console.log(newString);

let anotherString = gameName.slice(-8, 4) // 
console.log(anotherString);


const newStringOne = "   mukul    "
console.log(newStringOne); //     mukul      
console.log(newStringOne.trim()); // mukul

const url = "https://mukul.tech/about%20me"

console.log(url.replace('%20', '-')) // https://mukul.tech/about-me

console.log(url.includes('sundar'))  // false

console.log(gameName.split('-')); // [Mukul, MP, com]