// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*
    A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
*/

// ==================================================================== //

/*
    BASIC SYNTAX
    
    const promise = new Promise(function (resolve, reject) {
        // Perform the action you want and based on the response either resolve it or reject it
        if(condition){
            resolve(data);
        } else {
            reject(data);
        }
    });
*/

// ==================================================================== //

// CREATING A PROMISE
const promise1 = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function () {
        console.log('Async Task 1 Completed');
        resolve()
    }, 1000);

});

// CONSUMING A PROMISE
promise1.then(function () {
    console.log('Promise 1 Consumed!!!');
})


// ==================================================================== //


// Directly creating and consuming a promise
new Promise(function (resolve, reject) {
    // Do an async task
    setTimeout(function () {
        console.log('Async Task 2 Completed');
        resolve();
    }, 1000);
}).then(function () {
    console.log('Promise 2 Consumed');
})


// ============================================================ // 

// CREATING A PROMISE AND SENDING SOMETHING IN RESPONSE
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Mukul Padwal",
            age: 23,
            email: "mukul@gmail.com"
        })
    }, 1000);
});

// CONSUMING THE PROMISE
promise3.then(function (response) {
    console.log(response);
})


// ============================================================ // 


// CREATING A PROMISE AND SENDING DATA BASED ON SUCCESS
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({
                username: "Mukul Padwal",
                age: 23,
                email: "mukul@gmail.com"
            })
        } else {
            reject('ERROR : something went wrong!!!');
        }
    }, 1000);
});

// CONSUMING IT : CHAINING
promise4
    .then(function (response) {
        console.log(response);
        return response.username;
    })
    .then(function (username) {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log(`The Promise is either Resolved or Rejected`);
    })


// ============================================================ // 

// CREATING A PROMISE AND SENDING DATA BASED ON SUCCESS
const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: "javascript",
                age: 23,
                email: "mukul@gmail.com"
            })
        } else {
            reject('ERROR : javascript went wrong!!!');
        }
    }, 1000);
});

// async/await : they do not handle errors gracefully. this is a drawback.
// We need to handle this by wrapping our code in try/catch block

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5();

// ============================================================ // 



// HERE WE ARE FETCHING THE DATA FROM A PROMISE
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.org/users#');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();


fetch('https://jsonplaceholder.org/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error.message))
.finally(() => console.log('KHATAM TATA GOOD BYE.'))