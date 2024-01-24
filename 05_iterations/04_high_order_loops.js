const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

// for in loop

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
}


// On arrays

const myArr = ['js', 'ruby', 'puthon', 'java', 'cpp'];

for (const key in myArr) {
    console.log(key);
    console.log(myArr[key]);
}


// ON maps

// const map = new Map();
// map.set('IN', 'India');
// map.set('US', 'Unites States of America');
// map.set('FR', 'France');
// map.set('IN', 'India');

// for (const key in map) {
//     console.log(key); // Not iteratable
// }

