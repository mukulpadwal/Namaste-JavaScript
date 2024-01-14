// Singleton Object

const tinderUser = new Object()

// console.log(tinderUser); // {}

tinderUser.id = '1a';
tinderUser.name = 'Mukul';
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '1a', name: 'Mukul', isLoggedIn: false }

const regularUser = {
    email: 'abc@abc.com',
    fullName: {
        userFullName : {
            firstName: 'Mukul',
            lastName: 'Padwal', 
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'a', 4: 'b'};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        name: "Mukul"
    },{
        id: 2,
        name: "Shashwat"
    },{
        id: 3,
        name: "Random"
    }, 
]

console.log(users[0].name);

// Some more methods

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty(1));