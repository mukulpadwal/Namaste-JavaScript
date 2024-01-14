// Singleton : object made from a constructor
// Object.create()

// Object Literals
const jsUser = {
    fName: 'Mukul',
    lName: 'Padwal',
    'full name': 'Mukul Padwal',
    age: 23,
    location: 'Dalhousie',
    email: 'mukul@mukul.com',
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Saturday']
}

// // Accessing Objects
// console.log(`With dot notation ${jsUser.email}`);
// console.log(`With ['key'] notation ${jsUser['email']}`);
// console.log(`With ['key'] notation ${jsUser['full name']}`); // We can't use the dot notation to access this key so the only way is by this notaion


// Using symbol as key in an object? How can you do it interview question
const mySym = Symbol('key1');

const newUser = {
    [mySym]: 'MuKey1',
    age: 23,
    location: 'Dalhousie',
    email: 'mukul@mukul.com',
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Saturday']
}

// console.log(newUser[mySym]);
// console.log(typeof newUser[mySym]);

// Changing value of object

newUser.email = 'mukul@google.com';
// Object.freeze(newUser);
newUser.email = 'mukul@micro.com';

// console.log(newUser);


newUser.greeting1 = function () {console.log('Hola user');}
newUser.greeting2 = function () {console.log(`Hola user ${this.email}`);}

// console.log(newUser);
// console.log(newUser.greeting1);
// console.log(`Hola user ${newUser.greeting1()}`);
console.log(`Hola user ${newUser.greeting2()}`);
console.log(`${console.log('Mukul')}`);