'use strict';

/*
const bookings = [];


//Default values in ES6
const createBooking = function(flightNum,numPassengers=7,price= numPassengers * 5){
    // Default values in ES5
    // numPassengers = numPassengers || 2;
    // price = price || 500;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking)
}

// createBooking('hello')
// createBooking('hello',2,1000)
//We cannot skip arguments
//Nice trick to not skip argument and get default values.
// createBooking('lh2',undefined,1000)


const flight = 'LH234';
//flight is a primitive value so if we pass it as an argument then the copy of flight is passed not the original value.
const jonas = {
    name: 'Prajwol Subedi',
    passport: 293964329,
}
//jonas is a object which is refrence type so when we pass an object the refrence to the object in the memory heap is passed.


const checkIn = function(flightNum, passenger){
    flightNum = 'LH00';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 293964329) 
    alert('Check in')
    else 
    alert('Wrong passport')
}

// checkIn(flight,jonas)
// console.log(flight);
// console.log(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000);

}

newPassport(jonas);
// checkIn(flight,jonas)

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
    const [first,...others] = str.split(' ');
    // console.log(first,others);
    return[first.toUpperCase(),...others].join(' ');
};

// console.log(upperFirstWord('prajwol subedi')); 
// console.log(oneWord('  praj   s ol  '));


//HIGHER ORDER FUNCTION.
// const transformer = function(str,fn){
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transforemd by: ${fn.name}`);
// }
// transformer('JavaScript is the Best!',upperFirstWord);
//upperFirstWord is a callback function and transformer is a higher order function.
// transformer('JavaScript is the Best!',oneWord);


//Js uses callbacks all the time.
//CALLBACK FUNCTIONS HELPS IN ABSTRACTION.
// const high5 = function(){
//     console.log('Hello jhole');
// }

// document.body.addEventListener('click',high5);

// ['prajwol', 'jhole', 'supadi'].forEach(high5)

// const greet = function (greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

const greetArrow = greeting => name => { console.log(`${greeting} ${name}`)};
const greeterHey = greetArrow('hey');
greeterHey('Jonas')
greeterHey('Prajwol')

//Useful in functional programming.
greetArrow('Namaste')('Jhole');

*/

//The call and apply method

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight  ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(777, 'prajwol');
// lufthansa.book(777123, 'Subediprajwol');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'Ew',
  bookings: [],
};

const book = lufthansa.book;
// console.log(book);

// book(23,'Sarah williams')
//This does not work because now the book is a simple function and this keyword points to undefined in simple function.

//Here it is a function method and first argument is what we want this keyword to point to and rest are the arguments of the function.

//CAll method
// book.call(eurowings,33,'Sarah williams')

// book.call(lufthansa,77,'Prajwol Subedi')
// book.call(lufthansa,77,'Subedi')
// console.log(eurowings);
// console.log(lufthansa);

//Apply method
//IT DOES SAME THING AS CALL, THE ONLY DIFFERENCE IS IT DOESN NOT RECEIVE LIST OF ARGUMENTS BUT INSTEAD IT TAKES ARRAY AS AN ARGUMETNS;

const flightData = [583, 'George Cooper'];
// book.apply(eurowings,flightData)

//We don't use apply much cause we can use call and spread operator

// book.call(eurowings,...flightData)
// console.log(eurowings);

//THE BIND METHOD
//Bind doesn't immediately call the functionn instead it returns a new function where the this keyword is bound.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
// bookEW(999,'Juice Wrld')
const flightC = [987, 'xtentation'];
// bookEW(...flightC);
// bookLH(444,'srijan');

//Partial application(part of the argument of original function is already set.)
const bookLH77 = book.bind(lufthansa, 77);
// bookLH77('sahin')
// bookLH77('prajwol')

// console.log(lufthansa);

// BIND WITH EVENT LISTENERS

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//IN THE EVENT HANDLER FUNCTION THE THIS KEYWORD ALWAYS POINTS TO THE ELEMENT ON WHICH THAT HANDLER IS ATTACTHED TO ..

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1,200));

//First argument is this keyword but in this case we don't care about this keyword because it's not in the function

//Order of the argument is important
// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addTaxRate(0.23)(200));
// console.log(addVAT2(200));

// Coding Challenge #1
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number) 
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

/*
//Method is a function inside of a object.
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    //Register answer using short circuit
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    //   console.log(this.answers);
    this.displayResults();
    //   this.displayResults('string');
  },
  //   displayResults(type){
  //     if(typeof(type) == Array)
  //     console.log(`yeah baby`);
  //     else if(typeof(type) == String)
  //     console.log(`Poll results are ${type}`);
  //   }

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// const check = poll.registerNewAnswer;
// const checkB = poll.registerNewAnswer.bind(poll);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]},'string');
*/


//Immediately invoked function expression(IIFE)
//async/wait

// const runOnce = function(){
//     console.log('This will  run again');
// };

// (IIFE)
// (function(){
//     console.log('This will never run again');
// })();


// (()=>console.log('This will never run again #arrow function'))();

//A CLOSURE GIVES A FUNCTION ACCESS TO ALL THE VARIABLES OF ITS PARENT FUNCTION, EVEN AFTER THAT PARENT FUNCITION HAS RETURNED. THE FUNCTION KEEPS A REFERENCE TO ITS OUTER SCOPE WHICH PRESERVES THE SCOPE CHAIN THROUGHOUT TIME.

//A CLOSURE MAKES SURE THAT A FUNCTION DOESN'T LOOSE CONNECTION TO A VARIABLES THAT ESITED AT THE FUNCTION'S BIRTH PLACE;


// const test = function(){
//     let count = 0;
//     return function(){
//         count++
//         console.log(count);
//     }
// }

// let holder = test();
// holder();
// console.dir(holder);


//We do NOT have to manually create closures, this is a JS feature that happens automatically. We can't even accesss closed-over vaiables explicityly. A closure is NOT a tangible js object.

//CLOSURE EXAMPLE

/*
//Example 1
let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b*2);
    };
};
g();
f();
console.dir(f)
//Re-assigning f function 
h();
f();
console.dir(f);


//Example 2
//Priority is to closure 
const perGroup = 1000;

const boardPassenger = function(n,wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
}

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function(){
      header.style.color = 'blue';
  })
})();


