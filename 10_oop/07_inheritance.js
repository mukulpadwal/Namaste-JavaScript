class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}


const chai = new Teacher("MUKUL", "mukul@yteacher.com", "jkjk");

chai.addCourse("JS");
chai.logMe();


const tea = new User("masala chai");

tea.logMe();



console.log(chai === tea);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
