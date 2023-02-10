'use strict';

//CONSTRUCTER FUNCTION.
//Constructer function starts with a capital letter.
//Arrow function will not work as a function constructor because it doesn't have it's own this keyword.
//Function declaration and function expression(where will assign a function value to a variable) will work.

/*

////////////////////////////////////////////////////
//Objects using constructor function
////////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  // console.log(this);
  //Instance properties
  this.firstName = firstName;
  this.birhYear = birthYear;

  //Don't create a method of inside the constructor function.
  //Because we will be creating thousand of function inside all the objects which will carry this function created from Person.
//   this.calcAge = function () {
//     console.log(2037 - this.birhYear);
//   };
};

//The only dif between regular and constructor function is we call constructor function by using 'new 'keyword

const prajwol = new Person('Prajwol', 2003);
//1. New {empty obj} is created.
//2. function is call, this = {empty obj}
//3. {empty obj} linked to prototype.
//4. function automatically return {empty obj(now it can also not be empty)}

const srijan = new Person('Srijan', 2002);
const sahin = new Person('Sahin', 2003);

console.log(prajwol, srijan, sahin);

//Here we make the object using the constructor function and we can say that prajwol is the instance of person.

//operator to test

console.log(prajwol instanceof Person);
console.log(srijan instanceof Person);

///////////////////////////////////////////////////////
//  PROTOTYPES  //

//EACH AND EVERY FUNCTION IN JS HAVE A PROPERTY CALLED PROTOTYPE. SO CONSTRUCTER FUNCTION ALSO HAS IT.

//EVERY OBJECT THAT'S CREATED BY A CERTAIN CONSTRUCTOR FUNCTION WILL GET ACCESS TO ALL THE METHODS AND PROPERTIES WE DEFINE ON THE CONSTRUCTOR PROTOTYPE PROPERTY.
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birhYear);
};

//this is set to the object that is called the method.
//WE can now calcAge method on Person object even though it is not on the Person object . It is because of the prototype inheritance.
prajwol.calcAge();
srijan.calcAge();

//proto property is set to the prototype property of the constructor function.
console.log(prajwol.__proto__);
console.log(prajwol.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(prajwol));
console.log(Person.prototype.isPrototypeOf(srijan));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototype property is as of.prototypeOfLinkedObjects.


//We can also set properties on the prototype not just methods.

//This property is not directly in the object. So it's not object's own property
Person.prototype.species = 'Homo Sapiens';
console.log(prajwol.species,srijan.species);

console.log(prajwol.hasOwnProperty('firstName'));
console.log(prajwol.hasOwnProperty('species'));
//It returns false because species properties is not inside of the prajwol object and it  get access to it because it is in the prototype property of the Person


//This works because of a prototype chain. Here.prajwol.__proto__.__proto__ is the prototype property of the object constucter which is the proto of Person object.

console.log(prajwol.__proto__.__proto__);
//Object.prototype is the top of the chain so it's prototype will return null
console.log(prajwol.__proto__.__proto__.__proto__);

//It will go back to the person itself and show the function itself.

//To inspect the function you have to use cl.dir
console.dir(Person.prototype.constructor);


//Each array will inherit all the methods from its prototype.
const arr = [3,3,3,23,5,5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//Array again have the prototype of the object.
console.dir(Array.prototype.__proto__);

//Then finally as object is the top of the chain it will return null;
console.log(Array.prototype.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);



/////////VERY IMP POINT/////////////////////
//We can add new method to the prototypes of the array and all the arrays will then inherit it.
Array.prototype.unique = function(){
   return [...new Set(this)]
};

console.log(arr.unique());
//Just wow we can take this to another lvl and make our own methods in js

//BAD practice though🥲🥲🥲
//Don't get in the habit of doing this because next version of js might add the new methods with same name.
//If you are working with multiple developpers then it is a bad idea cause you can create same methods with multiple name.

const h1 = document.querySelector('h1');
console.dir(h1);



*/

//////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is at speed of ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -=5;
  console.log(`${this.make} is at speed of ${this.speed} after the brake`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 130);

car1.accelerate();
car2.accelerate();

car1.brake();
car2.brake();

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ES6 CLASSES//////////////////////
//class are just special type of functions.

//class expression
// const PersonCl = class{}

/*
//class declaration
class PersonCl {
    //This is the method of the class PersonCl
    constructor(fullname, birthYear){
        // console.log(this);
        this.fullname = fullname;
        this.birthYear = birthYear;
    }
    //Adding methods in class (they will be added to .prototype property)
    //This methods we write outside of the constructor will be in the object prototype but not in the object itself

    //Instance method this will be added to the prototype property.
    calcAge(){
        console.log(2037-this.birthYear);
    }
    //NO commas between the methods

    greet(){
        console.log(`Hey ${this.fullname}`);
    }
    //Setter and getter can be very useful for data validation.
    get age(){
        return 2037 - this.birthYear;
    }

    //Setter property to check if it is full name or not
    //We are creating a setter for a property name that already exist.

    //imp point
    //So whenever we set this.fullname = fullname, the fullname method is going to be executed automatically.
    set fullname(name){
        console.log(name);
        if(name.includes(' ')) this._fullname = name;
        else alert (`${name} is not a full name!`)
    }

    get fullname(){
        return this._fullname;
    }

    // In class to create a static method we just have to add the static keyword

    //This will not be added to the prototype property
    static hey(){
        console.log('Hey there');
    }

}

PersonCl.hey();



///////////////////////////////////////////////////////
const jessica = new PersonCl('Jessica Davis', 1996)
//ADDING STATIC METHODS on class.
// PersonCl.hey = function(){
//     console.log('Hey there😁😁');
//     console.log(this);  //Object calling the method.
// }

//It is only availabe for PersonlCl not for jessica object cause it is not in the prototype so it is not inherited by jessica
// PersonCl.hey();

// jessica.hey();






console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();


//Getter and Setter in class
console.log(jessica.age);

const walter = new PersonCl('Walter pandit', 1999)


//1. Classes are not hoisted (both class declaration and class expresstion)

//2. Class are first-class citizens (i.e we can pass them into function and return them from the function that is because classes are just special type of functions)

//3. Classes are executed in strict mode.



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////  SETTER AND GETTER ////////////////////////



//THEY ARE BASSICALLY FUNCTION THAT SET AND GET VALUES.


const account = {
    owner: 'jonas',
    movements: [200,530,120,300],

    //using getter function
    get latest(){
        return this.movements.slice(-1).pop();
    },

    //using setter function
    //Setter function need to have one parameter.
    set latest(mov){
        this.movements.push(mov)
    }
}


//We use the method name as a property
//Using getter
console.log(account.latest);

//Using Setter
account.latest = 50;
console.log(account.movements);


*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Object.create



//Prototype of all the person object
const PersonProto = {
  calcAge() {
    console.log( 2022 - this.birthYear);
    console.log(this);
  },
  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
// console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();


//PersonProto aafai ma prototype ho yesma manually hamele prototype set garna sakxau
console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);


const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979)
sarah.calcAge();

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀



class Car{
    constructor(make,curr_speed){
        this.make = make;
        this.curr_speed = curr_speed;
    }
    accelerate(){
        return this.curr_speed += 10;
    }
    brake(){
        return this.curr_speed -= 5;
    }
    get speedUS(){
        return this.curr_speed / 16;
    }
    set speedUS(speed){
        this.curr_speed = speed * 1.6;
    }
}

const buggati = new Car('Buggati', 200);

console.log(buggati);
console.log(buggati.accelerate());
console.log(buggati.accelerate());
console.log(buggati.brake());
console.log(buggati.speedUS);
buggati.speedUS = 50;
console.log(buggati);
*/

//////////////////////// /////////////////////////////////////////////////////////////////////////////////////
////////////    INHERITANCE    ////////////////////////

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birhYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log(2037-this.birhYear);
};

const Student = function(firstName, birthYear, course){
    // Person(firstName,birthYear);
    // This doesn't work cause this is a regular function call and in regular func call this keyword is set to undefined
    Person.call(this,firstName,birthYear)
    this.course = course;
    console.log(this);
}

//linking prototypes
Student.prototype = Object.create(Person.prototype)
//We have to create this connection before we add any methods to the prototype object of student and that's becuase Object.create will return an empty object.

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);

}

const mike = new Student('Mike', 2020, 'Computer')
// console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.log(mike.__proto__.__proto__);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀


const Car = function(make, curr_speed){
    this.make = make;
    this.curr_speed = curr_speed;
}

const EV = function(make,curr_speed,charge){
    Car.call(this,make,curr_speed);
    this.charge = charge;
}

Car.prototype.accelerate = function(){
    this.curr_speed += 10;
    console.log(`${this.make} is going at speed ${this.curr_speed}`);
}

Car.prototype.brake = function(){
    this.curr_speed -= 10;
    console.log(`${this.make} is going at speed ${this.curr_speed}`);
}

//Do this before adding any new methods on EV.
EV.prototype = Object.create(Car.prototype);


EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
    console.log(`${this.make} is charged to ${this.charge}%`);
}

//This  will overwrite the accelerate method in Car prtotype
EV.prototype.accelerate = function(){
    this.curr_speed += 20;
    this.charge -= 0.1*this.charge;
    console.log(`${this.make} is going and spped ${this.curr_speed} and charge of ${this.charge}`);
}

const tesla = new EV('Tesla',100,30);
console.log(tesla.charge);
tesla.chargeBattery(80);
console.log(tesla.curr_speed);
tesla.brake();

tesla.accelerate();
tesla.accelerate();

*/

/*
//CLASSES ARE JUST ABSTRACTION OF CONSTRUCTER FUNCTION.
//////////////////////// /////////////////////////////////////////////////////////////////////////////////////
/////// INHERITANCE BETWEEN CLASSES/////////////////

class PersonCl {
  //This is the method of the class PersonCl
  constructor(fullname, birthYear) {
    // console.log(this);
    this.fullname = fullname;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullname}`);
  }
  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  //If you do not need any extra property in child class then you don't even need to write the constructor function in the child class
  constructor(fullName, birthYear, course) {
    //super() is the constructor function of the parent class.
    //The arguments we pass are the ones used in the parent's constructor function.

    //This needs to happens first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullname} and I study ${this.course}`);
  }
  calcAge(){
    console.log(`I am ${2022 - this.birthYear} years old, but as a Student I feel more like ${2022 - this.birthYear + 10}`);
  }
}

const martha = new StudentCl('Martha Jones', 2002, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

*/

//////////////////////////////////////////////////////
/////// INHERITANCE USING OBJEC.CREATE////////////////

/*
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
steven.init('Steven', 1999);


//Here StudentProto is the class that is inherting from PresonProto
const StudentProto = Object.create(PersonProto);


//We don't need to add methods in prototype while using Object.create()
StudentProto.init = function(firstName, birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science')
console.log(jay);
jay.introduce();
jay.calcAge();

*/

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ENCAPSULTAION: PRIVATE CLASS FIELD AND METHODS.

//1) Public fields
//2) Private fields
//3) Public methods
//4) Private methods

/*
class Account {
    //Public fields.(availabe in instances not on prototype)

    //To use public filed you need to write semicolons at the end (betn the methods we don't use semi colon so to make it private we do use semi colon)
    loacle = navigator.language;


    //Private fileds.(availabe in instances not on prototype)

    //To use private fields you have to use # symbol.
    #movements = [];

    //For the pin to be private it first must be declare on the private fields i.e before the constructor and we can set it's value on the constructor
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        //Protected property
        this.#pin = pin;
        //We can create more properties that are not based on any inputs.

        console.log(`Thanks for opening an account ${owner}`);
    }


    //3) Public methods
    
    getmovements(){
        return this.#movements;
    }
    
    //Public interface(API)
    deposite(val){
        this.#movements.push(val)

        //return this because this is the current object. This is helpful for chaining methods.
        //return this on method that set some property.
        return this
    }
    withdraw(val){
        this.deposite(-val);
        return this;
    }

    //4) Private methods 
    //It acts like private class field  but not like methods.

    #approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposite(val);
            console.log('Loan approved');
            return this;
        }
    }

    //It will not be availabe on all the instances, but only on the class itself.
    static helper(){
        console.log('Helper');
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111)


//Do not do this instead create a method that does this
// acc1._movements.push(250);
//We abstracted - sign using the method.
// acc1.movements.push(-140)

//nice way
acc1.deposite(250);
acc1.withdraw(140)
// console.log(acc1);

// acc1.requestLoan(777)
// console.log(acc1._pin);
// console.log(acc1);

console.log(acc1.getmovements());

Account.helper();
console.log(acc1);
// console.log(acc1.#pin);

//Can't access because it is in private field.
// console.log(acc1.#movements);

// acc1.#approveLoan(20)



//CHAINING METHODS.

acc1.deposite(300).deposite(500).withdraw(300).requestLoan(777).withdraw(4000);

console.log(acc1.getmovements());

*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class Car1 {
  constructor(make, curr_speed) {
    this.make = make;
    this.curr_speed = curr_speed;
  }

  //duitai aautai pattern ma lekhena bane aafno parent ko prototype ma bako function use garxa

  //For example 1) parent -->accelerate = function()
  //2) child -> accelerate()
  //yesto garyo bane parent to accelerate function use garxa ra child ko le overwrite garna sakdaina
//   accelerate = function () {
    accelerate(){
    this.curr_speed += 10;
    console.log(`${this.make} is going at speed ${this.curr_speed}`);
    return this
  };

  brake(){
    this.curr_speed -= 10;
    console.log(`${this.make} is going at speed ${this.curr_speed} due to brake`);
    return this
  };
}

class EV extends Car1 {
  #chargeTo;

  constructor(make, curr_speed, chargeTo) {
    super(make, curr_speed);
    this.#chargeTo = chargeTo;
  }
  chargeBattery(chargeTo) {
    this.#chargeTo = chargeTo;
    console.log(`${this.make} is charged to ${this.#chargeTo}%`);
    return this;
  };

  accelerate() {
    this.curr_speed += 20;
    this.#chargeTo -= 0.1 * this.#chargeTo;
    console.log(
      `${this.make} is going and spped ${this.curr_speed} and charge of ${this.#chargeTo}`
    );
    return this;
  };
}

const rivan = new EV('Tesla', 120, 23);
console.log(rivan);
rivan.chargeBattery(99)
// rivan.accelerate();
// rivan.brake();
rivan.accelerate().brake();
