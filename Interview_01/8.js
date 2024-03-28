const mukul = {
  fullName: "Mukul Padwal",
  sayName: function () {
    console.log(this.fullName);
  },
};

setTimeout(mukul.sayName, 3 * 1000);
/*
OUTPUT: 

undefined after 3 seconds
-> context changed as the setTimeout() function runs seperately...
*/


setTimeout(mukul.sayName.bind(mukul), 3000);
/*
OUTPUT: 

Mukul Padwal after 3 seconds
-> bind gives us a functionInstance with a context which can be executed 
*/

setTimeout(() => mukul.sayName(), 3000);
/*
OUTPUT: 

Mukul Padwal after 3 seconds
-> closure
*/


/*
CONCEPTS : bind(), closures, setTimeout
*/