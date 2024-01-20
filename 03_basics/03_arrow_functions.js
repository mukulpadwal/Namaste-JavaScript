// Arrow Functions aka fat arrow function : Introduced with ES6
// this keyword : current context ke baare batata hai

// First let's understand this keyword

const user = {
    username: 'Mukul',
    price: 999,
    
    welcomeMessage: function (){
        console.log(`${this.username} , welcome to my Website`);
        console.log(this);
    }
}

// user.welcomeMessage // Will return reference of the function
// user.welcomeMessage(); // Mukul , welcome to my Website

// user.username = "Akaisha"

// user.welcomeMessage() // Akaisha , welcome to my Website

// NOTE --------------------
// In Browser the global context this refers to window object
// in node the global context this refers to an empty object


// console.log(this); // in node environment global context is empty {}


// Working of this in functions is different than objects

function chai() {
    let username= "mukul";
    // console.log(this); // Here we will get an object containing reference to an object
    // console.log(this.username); // undefined
}

// chai()

// 

const cuttingChai1 = function () {
    let username= "mukul";
    console.log(this); // Here we will get an object containing reference to an object
    console.log(this.username); // undefined
}

// cuttingChai1()


// working of this in Arrow Functions

const cuttingChai2 = () => {
    let username= "mukul";
    console.log(this); // {}
    console.log(this.username); // undefined
}

// cuttingChai2();


// ================= More about Arrow Functions ===============================

// const name = (param1, param2) => {}

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo);
console.log(addTwo());
console.log(addTwo(null,1));
console.log(addTwo(null,null));
console.log(addTwo(undefined,null));
console.log(addTwo(8,7));


// Implicit return
const addTwoNum = (num1, num2) => num1 + num2;

// () = return likhne ki zaroorat nhi
// {} = return likhna hai
const addTwoNumR = (num1, num2) => (num1 + num2);

// return object
// const returnObject = () => {username: "mukul"} // cannot return object like this
const returnObject = () => ({username: "mukul"})





