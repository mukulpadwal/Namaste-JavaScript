// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const mukul = new User("mukul", "mukul@mukul.com", " jnnnj");

console.log(mukul.encryptPassword());
console.log(mukul.changeUsername());






// behind the scenes

function FunUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

FunUser.prototype.encryptPassword = function (){
    return `${this.username}abc`;
}

FunUser.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}


const padwal = new FunUser("padwal", "padwal@mukul.com", " jnnnj");

console.log(padwal.encryptPassword());
console.log(padwal.changeUsername());
