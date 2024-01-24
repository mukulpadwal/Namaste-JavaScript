const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const $Num = myNums.map((num) => {
//     return num+10
// })




// Chainig

const newNums = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => (num % 2 === 1));

console.log(newNums);