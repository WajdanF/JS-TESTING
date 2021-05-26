class User {
    constructor(username,email){
        this.username = username;
        this.email = email;
        this.score= 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
    }
    logout(){
        console.log(`${this.username} just logged out`);
    }
    incScore(){
        this.score++;
        console.log(`${this.username} has this score`);
        return this;//return "this" to chain
    }
}

const userOne = new User('wajdan','wajdan@gmail.com');
const userTwo = new User('wajdan1','wajdan1@gmail.com')

console.log(userOne);
userOne.login();
userOne.logout();

//CHAINING
userOne.incScore().incScore().incScore()

//SUBCLASSES

class Admin extends User{
constructor(username,email,title){
    super(username,email);//calls the constructor of the parent class and pass in the things
    this.title=title;
}

deleteUser(user){
    users = users.filter((i)=>{
        return i.username !== user.username
    })

}
}

let users = [userOne,userTwo]
let userThree = new Admin('wajdan2','wajdan3@gmail.com','black-bel');
userThree.deleteUser(userOne);
console.log(users);