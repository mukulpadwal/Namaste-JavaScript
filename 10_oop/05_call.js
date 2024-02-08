function SetUsername(username) {
    // Complex DB calls
    this.username = username;
    console.log('CALLED');
}

function createUser(username, email, password){
    // called and execution context removed
    SetUsername(username);
    
    // to hold the reference
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}


const mukul = new createUser("MUKUL", "m@m.com", "popat");

console.log(mukul);