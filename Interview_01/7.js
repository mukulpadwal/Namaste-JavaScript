const mukul = {
  name: "Mukul",
  sayName: function () {
    console.log(this.name);
  },
};

const gaurangi = {
  name: "Gaurangi",
  sayName: function () {
    console.log(this.name);
  },
};

gaurangi.sayName.call(mukul);

/*
OUTPUT :

Mukul
*/

/*
CONCEPTS : call(), execution context
*/
