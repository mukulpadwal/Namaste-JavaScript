// Dates

let myDate = new Date();
console.log(myDate);
console.log(`toString() => ${myDate.toString()}`);
console.log(`toDateString() => ${myDate.toDateString()}`);
console.log(`toISOString() => ${myDate.toISOString()}`);
console.log(`toLocaleString() => ${myDate.toLocaleString()}`);
console.log(`toJSON() => ${myDate.toJSON()}`);

console.log(typeof Date); // object


// declaring a specific date

// let myBirthday = new Date(2001, 1, 7);
// let myBirthday = new Date(2001, 1, 7, 1, 21);
// let myBirthday = new Date('2001-02-07');
let myBirthday = new Date('02-07-2001');

console.log(myBirthday.toLocaleString());


// Timestamps : polls, quiz

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myBirthday.getTime());

// Convert into seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

// Month start with 0
console.log(newDate.getMonth() + 1); // for simplicity


console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));


