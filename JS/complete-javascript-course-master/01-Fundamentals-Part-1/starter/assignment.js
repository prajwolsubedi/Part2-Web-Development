//Nested functions in JavaScript. Nested functions have access to the scope "above" them.
/*
function add (){
    let counter = 0;
    function plus(){
        counter += 1;
    }
        plus();
        return counter;
}
console.log(add());
*/


//Class.
//Method chaining.
/*
class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'Score is now', this.score);
        return this;
    }
}


*/
//Inheritance
/*
class Admin extends User{
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        })
    }
}
var userOne = new User('prajwol@gmail.com', 'prajwol');
var userTwo = new User('lale@gmail.com', 'lale');
var admin = new Admin('admin@gmail.com', 'Khatra');
var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);
console.log(users);
*/

//Without using class
/*
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

var userOne = new User('prajwol@gmail.com', 'prajwol');
var userTwo = new User('lale@gmail.com', 'lale');

console.log(userOne);
userTwo.login();
*/

//prototype
// function User(email, name){
//     this.email = email;
//     this.name = name;
//     this.online = true;
//     this.login = function(){
//         console.log(this.email, 'has logged in');
//     }
// }
// var userOne = new User('prajwolsubedi@gmail.com', 'prajwol');
// var userTwo = new User('lale@gamil.com', 'Lale');
// userTwo.login();

const arr = [1,2,3,4]
console.log(arr.length);