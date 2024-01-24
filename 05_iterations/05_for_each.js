const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach((lang) => {
//     console.log(`${lang}`);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);



// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });



const myCoding = [
    {
        languageName: "javascript",
        languageFileName : "js"
    },
    {
        languageName: "java",
        languageFileName : "java"
    },
    
    {
        languageName: "python",
        languageFileName : "py"
    }
]

myCoding.forEach((obj, index, arr) => {
    console.log(obj);
    console.log(obj.languageName);
    console.log(obj.languageFileName);
})