var fullName = "Mukul Padwal";

var myObj = {
  firstName: "Hacked First Name...",

  prop: {
    firstName: "Inside Prop...",
    getFullName: function () {
      return this.firstName;
    },
  },

  getFullName: function gfn() {
    return this.firstName;
  },

  getFullNamev1: () => this.firstName,

  getFullNamev2: (() => {
    return this.firstName;
  })(),
};

console.log(myObj.getFullName());
console.log(myObj.prop.getFullName());
console.log(myObj.getFullNamev1());
console.log(myObj.getFullNamev2());

/*
OUTPUT : 

Hacked First Name...
Inside Prop...
undefined
undefined
D:\Namaste-JavaScript\Interview_01\6.js:27
console.log(myObj.getFullNamev2());
                  ^

TypeError: myObj.getFullNamev2 is not a function
*/

console.log(myObj.getFullName());
console.log(myObj.prop.getFullName());
console.log(myObj.getFullNamev1());
console.log(myObj.getFullNamev2);

/*
OUTPUT : 

Hacked First Name...
Inside Prop...
undefined
undefined
*/

/*
CONCEPTS : context and this keyword 
-> for arrow functions this refers to the window object in browser or the global context {} in node
*/
