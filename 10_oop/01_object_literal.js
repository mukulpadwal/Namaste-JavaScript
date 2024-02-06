// Object Literal : Base unit
const user = {
    username: "Mukul",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log('MUKUL');
        // console.log(username); // Error : username is not defined
        console.log(this.username);
        console.log(this);
    }
}

// Accessing properties from the object
console.log(user.username);
console.log(user['loginCount']);
console.log(user['getUserDetails']());
console.log(user.getUserDetails());



// this keyword : tells us about the current context
/*
Things to remember
-> In the browser this refers to the window objevt
-> In node this refers to an empty object
*/

console.log(this); // {}
