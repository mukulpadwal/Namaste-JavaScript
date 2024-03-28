for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(`var ${i}`);
  }, 0);
}

/*
OUTPUT : 

10 times var 10
*/

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(`let ${i}`);
  }, 0);
}

/*
OUTPUT : 

let 0 to let 9
*/

/*
CONCEPT : execution context
-> var it is global
-> let it is block scoped
*/
