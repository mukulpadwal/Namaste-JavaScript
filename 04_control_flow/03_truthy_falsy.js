// Sometimes in condition we explicitely don't check for true or false we only pass our variable. javascriot automatically takes treats them as trur or false

const userEmail = "mukul@mukul.com";

if(userEmail){
    console.log(`Welcome ${userEmail}`);
} else {
    console.log(`No email found`);
}

// NOTES : 
    // Falsy Values
    // false, "", 0, -0, BigInt 0n, null, undefined, NaN

    // Truthy Values
    // {}, [], true, "0",  1, 'false', " ", function(){}, 


// Way to check for empty array : .length property
const userData = [];

if(userData.length === 0){
    console.log(`Array is Empty`);
}

// Way to check for empty object : get the keys an then apply .length property
const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log(`Object is Empty`);
}


// Good to know
console.log(false == 0); // true
console.log(false == ''); // true
console.log(0 == ''); // true


// Nullish Coalescing Operator (??) : null undefined
// It takes the first non null or undefined value if present and assign it to the variable
// null and undefined acts as fallback mechanism
let val1;

val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 10;
console.log(val1); // 10

val1 = undefined ?? 15; // 15
console.log(val1); 

val1 = undefined ?? null; // null
console.log(val1); 

val1 = null ?? undefined; // undefined
console.log(val1);

val1 = null ?? undefined ?? 15; // 15
console.log(val1); 


// Terniary Operator : short form for if-else
// condition ? eval if true : eval if false
// Do not confuse it with nullish coalescing operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`Sasti Chai`) : console.log(`Mengi Chai`); 