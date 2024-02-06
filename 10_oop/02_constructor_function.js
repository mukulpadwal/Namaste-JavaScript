// const promise1 = new Promise();
const date = new Date();

// new : constructor function
// create multiple instances from a single object


// Let's create a constructor function named User
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}


// NOTE : without using new keyword it uses the same context and the values are affected
// const userOne =  User('Mukul', 1, true);
// const userTwo =  User('Chai', 8, false);



// NOTE : new keyword gives us seperate instances for every call
const userOne = new User('Mukul', 1, true);
const userTwo = new User('Chai', 8, false);
console.log(userOne.constructor);
// console.log(userTwo);


// STEPS : 
// 1) Empty object is created when we use new keyword
// 2) constructor function is called by new keyword
// 3) all arguments are injected in this keyword
// 4) this is returned


// instanceof keyword : good to know