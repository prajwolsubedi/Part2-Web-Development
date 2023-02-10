'use strict';


var x = 1;
let y = 2;
const z = 3;
// console.log(this);
//This will point the window (global)object.

const calcAge = function(birthYear){
    // console.log(2022-birthYear);
    // console.log(this);
};
//Normal function get it's own this keyword.
calcAge(2003);


const calcAgeArrow = (birthYear) => {
    // console.log(2022-birthYear);
    // console.log(this);
};
calcAgeArrow(2003);
//Arrow function doesn't get it's own this function.
//Instead it uses lexical this keyword i.e it uses the this
//keyword of its parent function or parent scope.

const jonas = {
    year: 2002,
    calcAge :function(){
        console.log(this);
        //Here this keyword is the object that is calling the method.
        //so when we have method call the this keyword inside of the method will be the object that is calling the method.
        console.log(2022 - this.year);
    }
}
// jonas.calcAge();


const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
//This is called method borrowing.

matilda.calcAge();
//This keyword always points to the object that is calling the method.

const f = jonas.calcAge;
f();
//This happens(this keyword undefined) because f function is just a regular function call. It is not attached to any object.


