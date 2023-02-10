'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2022-11-10T14:11:59.604Z',
    '2022-11-11T17:01:17.194Z',
    '2022-11-12T10:36:17.929Z',
    '2022-11-13T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovements = function (now, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), now);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${now.getDate()}`.padStart(2, 0);
  // const month = `${now.getMonth() + 1}`.padStart(2, 0);
  // const year = now.getFullYear();
  // return `${day}/${month}/${year}`;

  //Here we don't need options because we simply need to display the date.
  return new Intl.DateTimeFormat(locale).format(now);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const now = new Date(acc.movementsDates[i]);
    const displayDate = formatMovements(now, acc.locale);

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and logout
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    //Decrease 1s
    //After checking if time is 0 then only we decrease the time
    time--;
  };

  //Set time to 5 minutes
  let time = 30;

  //Call the timer every second
  //To immediately call the timer otherwise it will wait 1 sec to execute the timer.
  tick();
  const timer = setInterval(tick, 1000);
  //To clear the timer
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//FAKE ALWAYS LOGGED IN;
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date
    //Experimenting API
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: 'numeric',
      month: 'numeric',
      // month: 'numeric',
      // month: '2-digit',
      // year: '2-digit',
      year: 'numeric',
      // weekday: 'long'
      // weekday: 'narrow'
      // weekday: 'short',
    };

    //Internationlizing dates (internationalization API)
    //First argument of DateTimeFormat is language Code and second is object of hours minutes etc.

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const hours = now.getHours();
    // const year = now.getFullYear();
    // const second = now.getSeconds();
    // labelDate.textContent = `${day}/${month}/${year}, ${hours}:${second} `;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    //IF there is already a timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 3000);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
//All numbers in js are represented internally as floating point numbers. Always as decimal

//That is why we only have one data type for all numbers.

console.log(23 === 23.0);

console.log(0.2 + 0.1);

//It's hard to represent 0.1 in js
//You cannot do really precise and scientific calculation in js.

console.log(0.1 + 0.2 === 0.3);

console.log(Number('23'));

//WHEN JS SEES '+' OPERATOR IT DOES TYPE COERCION. SO IT WILL AUTOMATICALLY CONVERT ALL THE OPERANDS TO THE NUMBER.

console.log(+'23');


//PARSING

//Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

//This is useful when we are trying to get rid of unnecessary symbols that aare not number. 
//But it should starts with a number.

//It's first argument is a text and second is a radix
//THIS IS PARSING WITH INTGERS
console.log(Number.parseInt(' 30px',10));
console.log(Number.parseInt('e30px'));

//THEIR IS ALSO PARSING FOR FLOAT

console.log(Number.parseFloat(' 2.59652rem'));

//WE CAN ALSO CALL THEM WITHOUT USING NUMBER BECAUSE THEY ARE THE GLOBAL FUNCTION. BUT IT IS GOOD TO CALL WITH NUMBER CAUSE IT PROVIDE NAMESPACE.
console.log(parseFloat(' 2.59652rem'));


//isNan is used to check if the passed argument is number or not (is Not a number)
//Not a good approach to check if a value is number or not.
console.log(Number.isNaN(20));

//This is also not a Nan it is just a regular value
console.log(Number.isNaN('23'));
console.log(Number.isNaN(+'Nope'));

//Infinity is also not a Nan
console.log(Number.isNaN(23/0));


//THE BETTER METHOD TO CHECK IF A VALUE IS NUMBER OR NOT IS BY USING isFinite

//IF YOU ARE WORKING WITH FLOATING POINT INTEGER YOU CAN USE THIS BUT IF YOU ARE SURE YOUR VALUE IS A INTEGER THEN YOU CAN USE isInteger

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
//this two are different
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23/0));



//isInteger

console.log(Number.isInteger(20));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(+'20'));
console.log(Number.isInteger(+'20X'));
console.log(Number.isInteger(20/0));
console.log(Number.isInteger(20/2));
console.log(Number.isInteger(20.2));
console.log(Number.isInteger(20/2.25));

*/

/*
//MATH AND ROUNDING

//Squar-root it is under the Namespace of Math.
console.log(Math.sqrt(25));

//using exponential operator
console.log(25 ** (1 / 2));

//To calculate cubic value using exponential operator
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 29, 30, 77));
//This max function does the coercion but doesn't parsing
console.log(Math.max(5, 18, '23', 30, 77));

//It doesn't do parsing means it doesn't remove the unnecessary text from the word. So in this case it returns is NaN.
console.log(Math.max(5, 18, '23px', 30, 77));
console.log(Math.min(5, 18, '0', -1, 30, 77));

//BESIDES METHODS THERE ARE ALSO CONSTANT IN MATH NAMESPACE.

//'**' means exponential
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//Random function.

//Math.trunc(Math.random()*6) -> highest no is five.
console.log(Math.trunc(Math.random() * 6) + 1);

//Math.random gives number between 0 and 1.
//0......1
//0.......(max-min)
//min......(max-min+min)
//And if we multiply this with (max - min) then we get number between 0 and (max - min) and if we add min to all of it.  then --> min ... (max-min+min)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

  console.log(randomInt(10,20));

  //random number between two numbers.
let upper = 25;
let lower = 20;

let myRandom = Math.floor(Math.random() * (upper - lower) + 1) + lower;

console.log(myRandom);

//Rounding integers

//All of this method does type coercion
//Math.trunc simply removes the decimal part
//Math.round is always gonna round to the nearest integer.
// console.log(Math.round(23.2));
// console.log(Math.round(23.6));

//Top value
console.log(Math.ceil(23.1));
console.log(Math.ceil('23.6'));

//Lowest value
console.log(Math.floor(23.9));
console.log(Math.floor(23.6));

//floor and trunc cut off the decimal number while dealing with the positive number and act as if they are same but they are not same in the case of negative number.
// console.log(Math.ceil(-23.6));
console.log(Math.floor(-23.6));
console.log(Math.trunc(-23.6));


//Floor can be better when working with negative values.


//Rounding decimals.
//toFixed will always return string

//number are primitive data types so they don't have method. Behind the scene js will do boxing and boxing to bassically transform it object and call the method and once operation is finished convert back to primitive data type
console.log(2.7.toFixed(0));
console.log(2.7.toFixed(1));
console.log(2.48584546.toFixed(10));
console.log(Number(2.5.toFixed(0)));

// const arr = [1,2,3,6,5,-7,-2,'-2'];
// console.log(arr.sort());

// console.log(arr);




////////Sort method in array////////
const arr = [9,8,99,23,7,0,-1,2];
const compare = ((a,b) => b-a)
console.log(arr.sort(compare));

const meroObj = [
  {
    name: 'srijan',
    khatraLvl: 70,
  },
  {
    name: 'Sahin',
    khatraLvl: 65,
  },
  {
    name: 'Prajwol',
    khatraLvl: 60,
  },
  {
    name: 'Adin',
    khatraLvl: 90
  }
]
console.log(meroObj);
console.log(meroObj.sort((a,b)=> {
  let fa = a.name.toLowerCase();
  let fb= b.name.toLowerCase();
  if(fa.name < fb.name)
  return 1;
  if(fa.name > fb.name)
  return -1;
  return 0;
}));
*/

//THE REMAINDER OPERATOR.

// console.log(15%3);

// console.log(47%3%2);

// //to Check if a number is even or not

// //Even if it is divisible by 2 i.e when %2 the remainder is 0.and if remainder is 1 that is a Odd number
// console.log(8%2);

// console.log(111%2);

// const isEven = (n => {
//   if (n%2 === 0){
//     console.log(`Even Number`);
//   }
//   else if(n%2 ===1){
//     console.log(`Odd Number`);
//   }
// })

// isEven(3)

// const isEven = (n => n%2 === 0)
// console.log(isEven(2));
// console.log(isEven(23));
// console.log(isEven(237));
// console.log(isEven(2375));
// console.log(isEven(23752));

//We can also use remainder operator to check if any number is divisible by any other number.
//When the remainder operator is 0 the first number is divisible by the second one

// const isDivisible = ((a,b) => a%b === 0)

// console.log(isDivisible(4,2));
// console.log(isDivisible(90,2));
// console.log(isDivisible(90,3));
// console.log(isDivisible(90,7));

// labelBalance.addEventListener('click', function(){
//   [...document.querySelectorAll('.movements__row')].forEach((row,i)=> {
//     //if we have to use it every Nth time we use remainder operator
//     //0,2,4,6
//     if(i % 2 === 0)row.style.backgroundColor = 'orangered';
//     //0,3,6,9
//     if(i % 3 ===0)row.style.backgroundColor = 'blue';
//   })
// })

//NUMERIC SEPERATOR

//287,460,000,000
//js ignore the underscores
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 385_99
// console.log(price);

// const tranferFree0 = 15_00;
// const tranferFree1 = 1_500;

//Restrictions of underscopre

// const PI = 3._1415 //cannot place after or before decimals

//const PI = _3.1415_ //cannot place after or before the numbers.

//const PI = 3.14__15 //cannot place two in a row.

// const PI = 3.14_15
// console.log(PI);

// //We cannot conver a string having '_' to a number;
// //You might wanna use underscore in numbers only
// console.log(Number('12_00'));

// console.log(parseInt('230_00'));

//BIG_INT (Big Integer)

// console.log(2 ** 53 -1);
// console.log(Number.MAX_SAFE_INTEGER);

// // console.log(7935729652638027305707);
// console.log(7935729652638027305707n);

// //This constructer function should only be used with small numbers because js first have to represent these numbers internally and then transform it into a BigInt.
// console.log(BigInt(793572965707));

// //operations

// console.log(1000000000n ** 2n);
// console.log(100000000000000000n * 8900987576474376400n);

// //We cannot multiply add or sub or divide or perform math operations on other types with BigInt but we can use logical operators

// // console.log(Math.sqrt(16n));

// console.log(20n > 78);
// //It doesn't do type corecion
// console.log(20n === 20);
// const hugeBig = 98362563965196396592369n
// //It does type coercion
// console.log(20n == 20);
// console.log(20n == '20');
// console.log(typeof 20n);

// //Conversion of BigInt to string
// console.log(hugeBig + ' Hello there ');

// //Divisions

// //It cuts off the decimal part
// console.log(10/3);
// console.log(10n / 3n);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////  DATES IN JS ////////////////

//Create a date
/*
const now = new Date();
console.log(now);

console.log(new Date('Nov 20 2020 22:22:22'));

console.log(new Date('february 27, 2002'));


//Year, Month, Day-Date, hour,minutes,seconds
console.log(new Date(2037, 10, 9, 8,8,8));


//js auto correct dates and days
console.log(new Date(2037, 10, 32, 8,8,8));

//Amount of miliseconds passed Since the beginning of the Unix time, which is January 1, 1970.

//It's calculation is in miliseconds
console.log(new Date(0));
//Converting days to miliseconds (2 days since unix time)

//2 * 24 * 60 * 60 * 1000 --> this is the timestamp of day no 2.
console.log(new Date(2 * 24 * 60 * 60 * 1000));


//These dates are special type of object which have their own methods.


const future = new Date(2037, 10, 23, 8,8)
console.log(future);

//Methods in dates

console.log(future.getFullYear());
console.log(future.getMonth());
//Day of the month
console.log(future.getDate());
//Day of the week
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());

console.log(future.toISOString());
console.log(future.toDateString());


//Timestamp in miliseconds
//To get timestamp of the date
console.log(future.getTime());

//Timestamp back to date
console.log(new Date(2142555780000));


//To get timestamp of the current time
console.log(Date.now());

future.setFullYear(2022)
future.setMonth(11)
console.log(future);

*/

////////////////////////////////////////////////////////
//oprations with dates
// const future = new Date(2037, 10, 23, 8, 8);
// //Timestamp of future
// console.log(Number(future));
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));

// console.log(days1);

//INTERNATIONALIZING NUMBERS

const num = 3884764.23;

const options = {
  style: 'currency',
  //stle : 'currency','unit','percent'
  //if we write style : 'percent' then unit is ignored.
  // unit: 'mile-per-hour',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US :', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

////////////////////////////////////////////////////////
//TIMERS IN JS

//set timeout runs just once
//set interval keeps running until we stop it.

//First argument is a callback function
//Second argument is amount of miliseconds that will pass until this function is called
//If we need to pass argument to the function
//All the arguments we passed after the delay will be argument to the function.

//Code execution doesn't stop here it continues to the next line.

//Asynchronous javascript

//SET TIMEOUT
// const ingredients = ['olives', 'spinach']
// const pizzaTimer = setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your Pizza with ${ing1} and ${ing2} 🍕🍕`),
//   3000,
//   ...ingredients,
// );
// console.log('Waiting for the pizza.....');

// if(ingredients.includes('spinach')) clearTimeout(pizzaTimer)

//SET INTERVAL TO RUN THE FUNCTION OVER AND OVER AGAIN UNTIL THE CONDITION IS MET.

// setInterval(function(){
//   const now = new Date();
//   console.log(now);
// },1000)
