myFun();

var myFun = function () {
  console.log("First...");
};

myFun();

function myFun() {
  console.log("Second...");
}

myFun();

var myFun = () => {
  console.log("Third...");
};

myFun();

/* 
OUTPUT :

Second...
First...
First...
Third...
*/

/* 
CONCEPT : EXECUTION CONTEXT & HOISTING
*/