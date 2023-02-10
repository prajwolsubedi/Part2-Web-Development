'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

/*
//Slice
//It doesn't mutate the original array.
let arr = ['a','b','c','d','e'];

// console.log(arr.slice(1));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,3));
// console.log(arr.slice(1,-3));
// console.log(arr);
//Shallow copy of array
// console.log([...arr]);
// console.log(arr.slice());


//Splice
//It mutates the original array
//It changes the original array

//First argument is start i.e index at which to start changing the array.

console.log(arr.splice(-1));
//Second argument is deleteCount (An integer indicating the number of elements in the array to remove from start)
console.log(arr.splice(0,1));
console.log(arr);
//Then if (delete Count is zero it will start inserting elements to add to array, beginning from start)
console.log(arr.splice(0,0,1,75,87));
console.log(arr);



//Reversse
//It mutates the original array
const arr1 = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

//Concat
const letters = arr1.concat(arr2);
console.log(letters);
console.log([...arr1,...arr2]);

//JOIN
console.log(letters.join('-'));
let text = "How are you doing today?";

//Split (works on string)
const myArray = text.split(" ");
console.log(myArray);
*/

//New Array method in ES2022

// const arr = [11,22,33];
// console.log(arr[0]);
// console.log(arr.at(0));

// //if we have to get last elements of array

// console.log(arr[arr.length-1]);

// //Slice will give the array with last elemtn to get the value we define the index.
// console.log(arr.slice(-1)[0]);
// //It's easier using at method
// console.log(arr.at(-1));

// console.log('prajwol'.at(0));
// console.log('prajwol'.at(-1));

/*
//looping over array using for each method.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let total = 0;
for(const [i,item] of movements.entries()){
  if(item > 0){
    console.log(`${i+1}: User depostie Rs ${item}`);
    total += item;
  }
  else if(item < 0){
  console.log(`${i+1}: User withdrew Rs ${Math.abs(item)}`);
  total -= Math.abs(item);
  }
}
console.log(total);

console.log('---For Each---');


////////FOR EACH//////


//For each method (easier)
//For each is a higher order function

//order: first parameter -> current element  Second parameter -> current index Third parameter -> intire array that we are looping over
movements.forEach(function(movement,index,array){
  if(movement>0){
    console.log(`${index+1}: You deposited $${movement}`);
  }
  else
  console.log(`${index+1}: You withdrew $${Math.abs(movement)}, Array -> ${array}`);
});

//DIFFERENCE BETN FOR EACH AND FOR OF
//1) YOU CANNOT BREAK OUT OF FOR EACH LOOP . IT WILL ALWAYS LOOP THROUGH THE ARRAY. YOU CANNOT USE BREAK AND CONTINUE IN (FOR EACH) . BUT YOU CAN BREAK IN (FOR OF)LOOP

//FOR EACH IN MAPS AND SETS

//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
  console.log(`Currency: ${key}\nfullform: ${value}\nMap: ${map}`);
})

const currenciesUnique = new Set(['USD', 'GBP', 'RS', 'USD', 'INR', 'INR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value,key,map){
  //Key is exactly same as value (no index in map)
  console.log(`${key}: ${value}, ${map}`);
})
*/

//NOTE: IT IS A BAD PRACTICE TO CHAIN A METHOD THAT MUTATES THE ARRAY.

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `        
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
  `;
    //This method(insertAdjacentHTML) accepts two strings 1) the position in which we want to attach HTML and the second 2) is text.
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//USING MAP AND FOREACH TO COMPUTE USERNAME
const user = 'Prajwol Kumar Subedi'; //-> pks

//IF WE DON'T WANT TO CREATE A NEW ARRAY AND JUST MODIFY THE OBJECT THEN WE CAN USE FOR EACH LOOP AND NOT USE MAP

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => Math.abs(mov) + acc, 0);
  labelSumOut.textContent = `${out}€`;

  const interestRate = acc.interestRate / 100;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => interestRate * deposite)
    //NEW RULE BY BANK TO NOT PAY INTERST LOWER THAN 1.
    .filter(interest => {
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}€`;
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
// console.log(accounts);

//When we press login the page will be reloaded that is because this is a button in form element.To stop that from happening we need to give function a parameter.

const updateUI = function (currentAccount) {
  //Display movements
  displayMovements(currentAccount.movements);
  //Display balance
  calcPrintBalance(currentAccount);
  //Display summary
  calcDisplaySummary(currentAccount);
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  //Find will return undefined if no element matches this condition.
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message.
    containerApp.style.opacity = 100;
    //Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;

    updateUI(currentAccount);
    // //Display movements
    // displayMovements(currentAccount.movements);
    // //Display balance
    // calcPrintBalance(currentAccount);
    // //Display summary
    // calcDisplaySummary(currentAccount);
  }
});
//Transfer money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
});

//loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  //When we here or see a word any then it might be a good case for SOME method
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//To close account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // Correct credentials
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //Find index method
    //Anything that returns true or false

    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate1 = [4, 1, 15, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function(dogsJulia, dogsKate){
  const copyJulia = dogsJulia.slice(1,-2);
  console.log(dogsJulia);
  const finalarr = copyJulia.concat(dogsKate);
  console.log(finalarr);
  finalarr.forEach(function(age,i){
    const dog = age >= 3 ? 'an adult': 'still a puppy';
    console.log(`Dog number ${i+1} is ${dog}`);
  })
  
  
}
checkDogs(dogsJulia1,dogsKate1);
// checkDogs(dogsJulia2,dogsKate2)
*/

/*
////////////////////////////////////////////
//Data transformation with Map, Filter, Reduce

//Maps returns a new array containing the results of applying an operation on all original array elements.

//Filter returns a new array containing the array elements that passed a specified test condition

//Reduce boils('reduces') all array elements down to one single value (e.g adding all elements together)

//Map method in data transformation for array
//It gives a brand new array.

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;

// const movementsUSDfor = [];
// for (const mov of movements){
//   movementsUSDfor.push(mov*euroToUsd)
// }
// console.log(movementsUSDfor);

//////////////////////////////
//FUNCTONAL PROGRAMMING.

// const movementsUSD = movements.map(function(mov){
//   return mov * euroToUsd
//   // return 23;
// })
// console.log(movements);
// console.log(movementsUSD);

//SIMPLIFIED USING ARROW FUNCTION
// const movementsUSD = movements.map(mov=> mov*euroToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsDescreption = movements.map((mov, i) =>
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );
// console.log(movementsDescreption);

/////////////////////////////
//DATA TRANSFORMING (FILTER METHOD)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposites = movements.filter(function (mov) {
  //Return boolean value
  return mov > 0;
});
// console.log(deposites);

// const depositFor = [];
// const withdrawal = [];
// for (const mov of movements){
//   if(mov > 0) depositFor.push(mov);
//   else withdrawal.push(Math.abs(mov))
// }
// console.log(depositFor);
// console.log(withdrawal);

const withdrawls = movements.filter(mov => mov < 0);
// console.log(withdrawls);

//REDUCE METHOD FOR DATA TRANSFORMING
//First parameter is accumulator(like snow ball)
//Second parameter is current element
//Third is current index
//Forth is original array.

//The call back function is first parameter of reduced method
//The second parameter is initial value of the accumulator in the first loop iteration.
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

let sum = 0;
for (const mov of movements) sum += mov;
// console.log(sum);

let sum1 = 0;
movements.forEach(mov => (sum1 += mov));
console.log(sum1);

//Maximum value using REDUCE method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const max = movements.reduce((acc,cur,i) => cur>, cur)

const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
// const humanAges = [];
// const calcAverageHumanAge = function(dogAges){
//   dogAges.forEach(function(dogAge){
//     let humanAge;
//     if(dogAge<=2)
//     humanAge = dogAge * 2;
//     else if(dogAge>2){
//       humanAge = 16 + dogAge * 4;
//     }
//     humanAges.push(humanAge);
//   })
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(humanAges);
const arr1 = [5, 2, 4, 1, 15, 8, 3];
const arr2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = function(dogAges){
//   const humanAge = dogAges.map(function(dogAge){
//     if(dogAge<=2)
//     return dogAge*2;
//     else if(dogAge>2)
//     return 16 + dogAge * 4;
//   })
//   console.log(humanAge);
// }

// calcAverageHumanAge(arr)

const calcAverageHumanAge = function (dogAges) {
  const humanAge = dogAges.map(dogAge =>
    dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2
  );
  console.log(humanAge);

  const eighteenDogs = humanAge.filter(age => age > 18);
  console.log(eighteenDogs);

  // const avg = eighteenDogs.reduce((acc, age) => acc + age, 0) / eighteenDogs.length;

  const avg = eighteenDogs.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return avg;
};

console.log(calcAverageHumanAge(arr1));
console.log(calcAverageHumanAge(arr2));
*/

//////////////////////////////////
//THE MAGIC OF CHAINING//

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

//PIPELINE
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  //To see what the first method returns helps in debuggins.

  // .map((mov,i,arr) =>{
  //   console.log(arr);
  //   mov * euroToUsd})

  //map and filter returns new array so we can chain to it But reduce returns a value so we could not have chained to it.
  .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function (dogAges) {
  const humanAge = dogAges
  .map(dogAge => (dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2))
  .filter(age => age > 18)
  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAge;
};
const arr1 = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(arr1));
*/

/*
///////////////////////////////
//------THE FIND METHOD----//
//Unlike filter method find method will only return the first element that satisfies the condition
//Filter returns a new array while Find only returns the element itself.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawl = movements.find(mov => mov > 0);
console.log(movements);
console.log(firstWithdrawl);

console.log(accounts);

// const account = accounts.find(account => account.owner === 'Jessica Davis');
//When the condition is true object is returned.
// console.log(account);


// for (const acc of accounts) {
//   acc.owner ==='Jessica Davis' && console.log(acc);
// }
*/

//////////////////////////////
//Find index method returns the index of the found element and not the element itself.//

///////////////////////////////////////
//Some and every method in array

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// It is checking for equality.
// console.log(movements.includes(200));
// console.log(movements.some(mov => mov === 200));

//Some method in array
//Here we can specify condition.
// const anyDeposits = movements.some(mov => mov > 2900);
// console.log(anyDeposits);

////////////////////////////////////////////
//---------Every method----------//

//Every method only returns true if all of the elements in array satisfies the condition

// console.log(movements.every(mov=> mov>0));
// console.log(account4.movements.every(mov=> mov>0));

//WE CAN ALSO WRITE CALL BACK FUNCTION SEPARATELY AND PASS IT TO THE HIGHER ORDER FUNCTIONS AS A CALLBACK.

//Separate call back

// const deposite = mov => mov < 0;
// console.log(account4.movements.some(deposite));
// console.log(account4.movements.every(deposite));
// console.log(movements.filter(deposite));

////////////////////////////////////////////
//---------FLAT AND FLATMAP----------//

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// //It takes the argument depth.
// console.log(arrDeep.flat(2));
// console.log(arr.flat());

//Flat method only goes one level deep while flatting the array.

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const totalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalance);

// const totalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalBalance);

// //FlatMap method combines flat and map method into just one method for better performance.

// //Flat method only goes one level deeper
// const totalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalance2);

////////////////////////////////////////////
//---------Sorting arrays----------//

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// //It mutates the original array
// console.log(owners.sort());
// console.log(owners);

//Sort method does sorting based on string
// console.log(movements);

//So to sort numbers we do this
//return < 0, A, B (keep order)
//return > 0, B, A (switch order)
//Ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// movements.sort((a, b) => a - b);

// console.log(movements);

// //Descednign order

// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

////////////////////////////////////////////
//How to programmatically create and fill array.//

// console.log([1, 2, 3, 4, 5, 6, 7]);
// const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(arr, typeof arr);

//Whenever we pass only one element in array function then it creates new empty array with that length
// const x = new Array(7);
// console.log(x);
// console.log(x.map(()=>5));
// x.fill(1)
//It mutates the array
//We can also specify value we want to fill (first parameter and where we want to start to fill  as 2nd parameter and 3rd parameter is the end parameter)
// x.fill(1,1,7)
// console.log(x);

// arr.fill(77,5,9)
// console.log(arr);
// arr.fill(77,5,7)
// console.log(arr);

//Array.from

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// //passing "_" in argument means no parameter is not needed but we still have to define the first parameter.

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// // const randomDice = Array.from({length: 100}, ()=> Math.floor(6*Math.random())+1)
// // console.log(randomDice);

// //The second argument of Array.from is a mapping callback.

// labelBalance.addEventListener('click', function(){
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('€','')))

//   console.log(movementsUI);;
// })

/////////////////////////////////

//ARRAY METHOD PRACTICE

// const bankDepostiSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepostiSum);

// //2 Deposits with atleast 1000 dollar.
// const newDeposite1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .filter(movs => movs >= 1000).length;
//   //using reduce method

//   .reduce((count, mov) => (mov >= 1000 ? count + 1 : count), 0);

// console.log(newDeposite1000);

// //IMP THING ABOUT ++ OPERATOR IS THAT IT RETURNS THE PREVIOUS VALUE. TO SOLVE THIS WE USE PREFIX INCREMENT OPERATOR

// // let a = 10;
// // console.log(a++);
// // console.log(++a);
// // console.log(a);

// //3. create a new object with contains the sum of the deposits and withdrawls.
// const { deposits, withdrawls } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? sums.deposits += cur : sums.withdrawls += cur;
//       sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawls: 0 }
//   );

// console.log(deposits, withdrawls);

//4.
//this is a nice title --> This Is a Nice Title
//Whenever we want new array of same size as before we use Map.
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a Long title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(
  obj => (obj.recommendedFood = Math.trunc(obj.weight ** 0.75 * 28))
);

// console.log(dogs);

// const SarahDog = dogs.includes(dog => dog.owner.includes('Sarah')?.dog)
// console.log(SarahDog);

//We use find because we want to find one element on the array based on the condition.
//In find method we have to return true or a false value and then the find method will return the first value which meets the condition

//2. 
console.log(dogs);
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating too ${dogSarah.curFoo > dogSarah.recommendedFood ? 'much' : 'little'}`);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

// console.log(dogs);
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(obj => obj.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(obj => obj.owners);
console.log(ownersEatTooLittle, ownersEatTooLittle);

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs.filter(dogs => dogs.curFood < dogs.recommendedFood)
// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

//4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

//5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
//iF there is any word used then we can use some


const check = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`Any dog eating EXACTLY the amount of food that is recommended : ${check}`);
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const checkEatingOkay = obj => (obj.curFood > obj.recommendedFood * 0.9 &&
  obj.curFood < obj.recommendedFood * 1.1);

//6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)


const OkayAmount = dogs.some(checkEatingOkay);
console.log(`Okay amount : ${OkayAmount}`);



//7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)


const OKAY = dogs.filter(checkEatingOkay)
console.log(OKAY);

//8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)


//For shallow copy we use dogs.slice();

//Ascending a-b
//Descending b-a

console.log(dogs);
const dogsSorted = dogs.slice().sort((a,b)=> a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);



