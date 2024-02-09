const User = {
    _email: "mukul@gmail.com",
    _password: "password123",
    get email (){
        return this._email;
    },
    set email(value){
        this.password = value;
    }
}

console.log(User);
console.log(User.email);


const user1 = Object.create(User);

console.log(user1);
console.log(user1.email);