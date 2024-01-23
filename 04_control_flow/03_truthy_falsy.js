const userEmail = "mukul@mukul.com";

if(userEmail){
    console.log(`Welcome ${userEmail}`);
} else {
    console.log(`No email found`);
}


// Falsy Values
// false, "", 0, -0, BigInt 0n, null, undefined, NaN

// Truthy Values
// {}, [], true, "0",  1, 'false', " ", function(){}, 


const userData = [];

if(userData.length === 0){
    console.log(`Array is Empty`);
}



const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log(`Object is Empty`);
}


// Good to know
console.log(false == 0); // true
console.log(false == ''); // true
console.log(0 == ''); // true


// Nullish Coalescing Operator (??) : null undefined

let val1;

val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1); 

val1 = undefined ?? null;
console.log(val1); 

val1 = null ?? undefined;
console.log(val1);

val1 = null ?? undefined ?? 15;
console.log(val1); 



// Terniary Operator

// condition ? eval if true : eval if false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`Sasti Chai`) : console.log(`Mengi Chai`); 