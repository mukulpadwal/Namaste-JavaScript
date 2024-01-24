// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((c) => {
//     // console.log(`${c}`);
//     return c;
// })

// console.log(values); // undefined

// forEach does not return any values


// MAP

const myNums = [1,2,3,4,5,6,7,8,9,10];

const filterNums = myNums.filter((num) => {
    return num > 4
});

console.log(filterNums);

// Problems that usually peple face
// if using {} in arrow function make sure you return