class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

    // this method will not be accessible
    static createId() {
        return `123`;
    }
}


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email
    }
}


const mukul = new User("mukul");
// console.log(mukul.createId());




const padwal = new Teacher("padwal", "padwal@p.com");
padwal.logMe();
console.log(padwal.createId());