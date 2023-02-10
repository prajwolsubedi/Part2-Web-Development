'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output.padStart(44));
}

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function(){
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);
//   console.log(text);

//   for(const [i,row] of rows.entries()){
//     const[first,second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second[0].toUpperCase()+second.slice(1)}`;
//     console.log(`${output.padEnd(20)} ${'✅'.repeat(i+1)}`);
//   }
// })

/*
//WORKING WITH STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(airline[0]);

// console.log(airline.length);
// console.log('prajwol'.length);

console.log(airline.indexOf(''));
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Portugal'));
console.log(airline.slice(0,-1));
console.log(airline.slice(4,8));
for(const item of airline.slice(4,8))
console.log(item);

console.log(airline.slice(airline.indexOf(' ')+1, airline.lastIndexOf('')));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(-8));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
  //B and E are the Middle Seat.
  const s = seat.slice(-1);
  s==='B' || s==='E' ? console.log(`You got the middle Seat`): console.log(`Unlucky`);
}
checkMiddleSeat('11B')
checkMiddleSeat('11C')
checkMiddleSeat('3E')


//METHODS IN STRING.
//JS converts string into object and performs methods and then again convert it to string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'pRaJwol Subedi';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect);

const nameFunction = function (string){
  const stringLower = string.toLowerCase();
  const stringCorrect = stringLower[0].toUpperCase() + stringLower.slice(1);
  return stringCorrect;
}

console.log(nameFunction('pRAJWOL SUBEDI'));


//Comparing email

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.IO \n'

// const lowerEmail = loginEmail.toLowerCase();
// //To get rid of empty spaces (white spaces)

// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

//Shortcut
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const trimStart = loginEmail.trimStart();
const trimEnd = loginEmail.trimEnd();
 console.log(trimStart,trimEnd);

 //Replacing
 const priceGB ='233,97£';
 const priceUS = priceGB.replace('£', '$').replace(',','.')

 console.log(priceUS);

 const announcement = 'All passengers come to boarding door 23. boarding door 23!';

//  console.log(announcement.replaceAll('door', 'gate'));
 console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const planeb = ' A320neo';
console.log(planeb.includes('A320n'));
console.log(planeb.includes('B'));
console.log(planeb.startsWith('Air'));
console.log(planeb.startsWith(''));
console.log(planeb.endsWith('o'));


//Split and Join

console.log('a+very+khatra+mance'.split('+'));
console.log('Prajwol Subedi'.split(' '));

const [firstnName, lastName] = 'Prajwol Subedi'.split(' ');
console.log(firstnName,lastName);

const newName = ['Mr.', firstnName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('prajwol subedi');
capitalizeName('rAm bahadur kumar thapa magar');


//Padding
const message = 'Goo to gate 23!=';
console.log(message.padStart(20 ,'+').padEnd(25,'-'));
console.log('Prajwol'.padEnd(35,'='));
//padStart first arguments include total length of the message

const maskCreditCard = function(number){
  //Easier way to convert to string
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length,'*')
}


console.log(maskCreditCard(649623692));
console.log(maskCreditCard('45792649623602'));


//Repeat

const message2 = 'Bad Weather... All Departures Delayed.... '
console.log(message2.repeat(5));


const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
*/

// Coding Challenge #3
//////////////////////
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
// const eventSet = new Set(gameEvents.values());
// const eventArray = [...eventSet];
//Shortcut
const eventArray = [...new Set(gameEvents.values())];
console.log(eventArray);

//2. After the game has finished, it is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

const data = [...gameEvents.keys()];
console.log(data);
let avg = 0;
avg = 90/data.length;
console.log(avg);
console.log(`An event happened, on average, every ${avg} minutes`);

//shortcut

console.log(`An event happend, on average, every ${90/ gameEvents.size} minutes`);

//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17: ⚽️ GOAL

for(const [time,events] of gameEvents){
  const half = time <= 45 ? `FIRST HALF` : `SECOND HALF`
console.log(`${half} ${time} : ${events} `);
}
*/

//Build in data structures in ES6 SETS AND MAPS.

//SET  IS THE COLLECTION OF UNIQUE VALUES.
//We pass iterables in set.
//Order doesn't matter and all values are unique.
// const orderSet = new Set(['pasta', 'pizza', 'pasta', 'risotto', 'pizza']);
// console.log(orderSet);

// console.log(new Set('prajwolsubedis'));
// console.log(orderSet.size);

// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('pasta');
// console.log(orderSet);
// // orderSet.clear()

// for (const item of orderSet) {
//   console.log(item);
// }

//Main use case of set is to remove duplicate value of array.
// const staff = ['waiter', 'Cheif', 'waiter', 'Manager', 'Cheif', 'waiter'];
// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);
// console.log(new Set(staff).size);
// console.log(new Set('prajwolsubedi').size);

//Maps
//A DATA STRUCTURE USED TO MAP VALUES TO A KEY.
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze,Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
//The set method returns the updated map

// rest
//   .set('Categories', ['Italian', 'Pizzeria'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are the best')
//   .set(false, 'We are not the best');

//To read data from the map we just have to pass the
// console.log(rest.get(true));
// console.log(rest.get('name'));

// const time = 23;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))
// );

//To see if the map has the key
// console.log(rest.has('Categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
//We can also set arrays and object as keys in map.
// rest.set([1,2], 'Test');
// const arr = [1,2];
// rest.set(arr,'Test')
//map with special type of objects
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1,'C'],
//   [2,'Java'],
//   [3,'JavaScript'],
//   ['Correct', 3],
//   [true, 'Correct'],
//   [false,'Try again'],
// ]);
// console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz app
// for(const [key,value] of question){
//   if(typeof key === 'number')
//   console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// question.get('Correct') === answer ? console.log(question.get(true)): console.log(question.get(false));

// console.log(question.get((question.get('Correct')===answer)));

//Convert map to array
// console.log([...question]);

// console.log(question.entries());
// console.log([...question.values()]);
// console.log([...question.keys()]);

//Which data structure to use.

// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Brayern Munich',
//   team2: 'Barcelona',
//   players: [
//     [
//       'Neuer',
//       'pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'KImmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewondowski',
//     ],
//     [
//       'Stegen',
//       'kounde',
//       'Bosquete',
//       'Ronald',
//       'Gavi',
//       'Pique',
//       'Pedri',
//       'Fati',
//       'Jordi Alba',
//       'Memphis',
//       'Dembele',
//     ],
//   ],
//   score: '0:4',
//   scored: ['Gavi', 'Jordi Alba', 'Gavi', 'Pedri'],
//   date: 'feb 27, 2003',
//   odds: {
//     team1: 6,
//     team2: 3,
//     x: 1,
//   },
// };

// for (const [no, player] of game.scored.entries()) {
//   console.log(`Goal ${no + 1} : ${player}`);
// }

// let average = 0;
// const odd = Object.values(game.odds);
// const key = Object.keys(game.odds)
// const entries = Object.entries(game.odds);
// console.log(entries);
// console.log(key);

// console.log(`Odd of victory of ${key[0]} is ${odd[0]}`);

// for(const [key,value] of Object.entries(game.odds)){
//   const teamStr = (key === 'x') ? 'Draw' : `victory ${game[key]}`
//   console.log(`Odd of victory of ${teamStr} is ${value}`);
// }

// for (const item of odd) average += item;
// average /= odd.length;
// console.log(average);

// const scorrers = {};

// for(const item of Object.values(game.scored)){
//   scorrers[item] ? scorrers[item]++ : (scorrers[item]=1);
// }
// console.log(scorrers);

// let avg1;
// let avg2;
// let avgDraw;
// let sum = 0;
// for(const key of Object.values(game.odds)){
//   sum += key;
// }
// avg1 = game.odds.team1 / sum;
// avg2 = game.odds.team2 / sum;
// avgDraw = game.odds.x / sum;
// console.log(sum,avg1,avg2,avgDraw);

// const sum = game.odds.team1+game.odds.team2+game.odds.x;
// console.log(sum);

// avg1 = game.odds.team1 / sum;
// avg2 = game.odds.team2 / sum;
// avgDraw = game.odds.x / sum;
// console.log(avg1,avg2,avgDraw);

/*
//Enhanced object literals

const weekdays = ['mon', 'tue', 'wed', 'thr', 'fri', 
'sat', 'sun'];

const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  thr: {
    open: 11,
    close: 23,
  },
  fri: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// console.log(openingHours);


const restaurant = {
  fname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 1,
    mainIndex,
    time = '20:00',
    address = 'raniban',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
};











// console.log(restaurant);

//OPTIONAL CHAINING (?.)

// if(restaurant.openingHours.fri)
// if(restaurant.openingHours && restaurant.openingHours.fri)
// console.log(restaurant.openingHours.fri.open);

//With optional chaining
//property exist if it is not null and not undefined.
//if it is zero or '' then it still exists.

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.fri?.open);
// console.log(restaurant.openingHours?.fri?.open);

//Example
//  FOR (?.) AND (??) ONLY UNDEFINED AND NULL ARE FALSY VALUE (NULLISH)


const days = ['mon', 'tue', 'wed', 'thr', 'fri', 
'sat', 'sun'];

for(const item of days){

  const open = restaurant.openingHours[item]?.open ?? 'closed';
  //we cannot do (item?.)  because this is not the property name and if we want to use variable name as the property name we need to use the bracket notation .i.e ([item]?.)
  console.log(`On ${item} restaurant opens at ${open}`);
}

//OPTIONAL CHAINING ON METHODS.
// console.log(restaurant.order?.(0,1) ?? `Method does not exist: Default value`);

//Array

const user = [{fname:'prajwol', email:22}];

// console.log(user[0]?.fname ?? `Users array empty`);

//Looping objects

//Property Name
const property = Object.keys(openingHours);
// console.log(property);
let openStr = (`We are open on ${property.length} days `);

for (const day of property){
  openStr += `${day},`
}
// console.log(openStr);

//Property values

// const values = Object.values(openingHours);
// console.log(values);
const entries = Object.entries(openingHours);
// console.log(entries);
for(const [key,{open,close}] of entries){
  console.log(`On day ${key} restaurant opens at ${open} and closes at ${close} `);
}

*/

/*

const restaurant = {
  fname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    time = '20:00',
    address = 'raniban',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};


//NEW FOR-OF-LOOP IN ES6
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//For-of-loop
//We can use continue and break in for-of-loop

for (const item of menu) console.log(item);

//destructuring in item
for(const [i,el] of menu.entries()){
  // console.log(item);
  // console.log(`${item[0] + 1}: ${item[1]}`);
  console.log(`${i+1}: ${el}`);

}

*/

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  fname: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //sending arguments as objects and immediately destructurning it
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    time = '20:00',
    address = 'raniban',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};

*/

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: 'Brayern Munich',
  team2: 'Barcelona',
  players:[
  [
    'Neuer',
    'pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'KImmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewondowski'
  ],
  [
    'Stegen',
    'kounde',
    'Bosquete',
    'Ronald',
    'Gavi',
    'Pique',
    'Pedri',
    'Fati',
    'Jordi Alba',
    'Memphis',
    'Dembele',
  ],
  ],
  score: '0:4',
  scored: ['Gavi', 'Jordi Alba', 'Gavi', 'Pedri'],
  date: 'feb 27, 2003',
  odds: {
    team1: 5.9,
    x:2.1,
    team2: 6,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);

const allPlayers = [...players1, ...players2]
console.log(allPlayers);

const players1Final = [...players1,'Thiago', 'Coutino', 'Perisic'];
console.log(players1Final);

// const team1 = game.odds.team1;
// const draw = game.odds.draw;
// const team2 = game.odds.team2;
// console.log(team1,team2,draw);

const {odds:{team1, x: draw, team2 }} = game;
console.log(team1,team2,draw);



// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function(...scorrer){
  console.log(scorrer);
  console.log(`${scorrer.length} goals were scored.`);
};


printGoals(...game.scored)

team1 < team2 && console.log('Team 2 is more likely to win'); 
team1 > team2 && console.log('Team 1 is more likely to win'); 


*/

/*
//LOGICAL ASSIGNMENT OPERATOR
const rest1 = {
  rName: 'capri',
  numGuest: 0,
};

const rest2 = {
  rName: 'La piazza',
  owner: 'Giovanni Rossi',
  numGuest: 777,
};

// rest2.numGuest = rest2.numGuest || 10;
//Setting default values for numGuest in rest2.
rest2.numGuest ||= 7;
rest1.numGuest ??= 7;
// rest1.numGuest ||= 10;
console.log(rest1.numGuest);
console.log(rest2.numGuest);
//Does not work for falsy values like zero.


//And 
// rest1.owner = rest1.owner && '<ANANYMOUS>';
rest1.owner &&= '<ANANYMOUS>'
// rest2.owner = rest2.owner && '<ANANYMOUS>';
rest2.owner &&= '<ANANYMOUS>'
console.log(rest1);
console.log(rest2);

*/

// || and && returns all data types and can be used for short - circuting.

// console.log(3 ||'jonas');
// console.log(0 || undefined || null || '' || 'khatra');
// console.log(3 &&'jonas' && true && undefined);
//  console.log(0 || false && true);

// or operator
// restaurant.numGuest = 90;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);
//In case first value is a falsy value then we can set a default value.

// And operator
//To check if the value exist
// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'spanich');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spanich');

/*

//  THE NULLISH COALESCING OPERATOR

restaurant.numGuest = 0;

const guest2 = restaurant.numGuest || 10;
console.log(guest2);
//Here if restaurant.numGuest is 0 then it will return the default value. To solve this we have:

//Nullish values : null and undefined are only nullish value (Not 0 or ''{as if they are not false value})
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
*/

/*
//REST PATTERN AND PARAMETERS.
//it's syntax is same as the spread operator does it does the opposite of the spread operator.
//spread because it is on the Right side of = (assignment operator){UNPACK}
const arr = [1,2, ...[3,4]];
// console.log(arr);
//Rest because it is on left side of assignment operator(=).{PACK}

//The rest element must be the last element otherwise it will not know when to stop.
//There can only be one rest in any destructuring assignments.
const [a,b,...others] = [1,2,3,4,5]
// console.log(a,b,others);

const[pizza,,risotto,...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza,risotto,otherFood);


//Rest in objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat,weekdays);

//2) functions.

const add = function(...numbers){
  let sum = 0;
  for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}


add(2,3);
add(1,2,3,4,5);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushroom','onion','spinach');
restaurant.orderPizza('mushroom');

*/

/*
//The spread operator(...)

const arr = [3, 4, 5];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

const newArray = [1, 2, ...arr];
// console.log(newArray);
// console.log(...newArray);
// console.log(1,2,3,4,5);

const newMenu = [...restaurant.mainMenu, 'chowmein', 'momo'];
// console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu]

//join 2 arrays or more

const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(menu);

//spread operator works on all iterable(array, string , map, sets but not objects)

const str = 'prajwol';

const letters = [...str,'','S'];
// console.log(letters);

// console.log(...str);

//multiple values seperated by comma are usually only expected when we pass arguments into functions or when we build a new array
//we cannot do this
// console.log(`Hello ${...str}`); 

//Beautiful example
// const ingredients = [prompt("lets make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3")];
// console.log(ingredients);
//Important use case of spread operator
// restaurant.orderPasta(...ingredients);

//From ES6 spread operator also works in objects.

const newRestaurant = {Founded: 2003,...restaurant, founder:'Prajwol Khatra'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.fname = 'Jhole vai';
console.log(restaurantCopy.fname);
console.log(restaurant.fname);

*/

/*
/// OBJECT DESTRUCTURING.
restaurant.orderDelivery({
  time: '22:20',
  address: 'Bafal, kathmandu',
  mainIndex: 2,
  starterIndex: 3,
});
restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 3,
});

//object destructing
//To destruct object we use curly braces because that is also how we create object.(same in the case of array)

//order doesn't matters in object
const { fname, openingHours, categories } = restaurant;
// console.log(fname, openingHours, categories);

const {
  fname: restarurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restarurantName, hours, tags);

//Default values
//It is useful when we take data from users
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutating variables.
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//{a,b} = obj; this does not works because js expect code block to solve that wrap it in paranthesis.
({ a, b } = obj);
// console.log(a, b);

// Nested object

const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);
*/

/*
const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);

//array destructuring
const [c,b,a]=arr;
console.log(a,b,c);

console.log(arr);

let [main,,secondary]= restaurant.categories;
console.log(main,secondary);


//we can simply switch variable with the help of array destructing.
[main,secondary] = [secondary,main]
console.log(main,secondary);

//array destructing using fuction.

console.log(restaurant.order(2,0));

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

//nested array
const nested = [2,4,[5,6]];
const [x,,y] = nested;
console.log(x,y);

//nested destructuring
//Destructuring inside of desturcturing to get the individual element of nested array
const [i,,[j,k]] = nested;
console.log(i,j,k);

//Default values
const [p=1,q=1,r=1]= [8,9];
console.log(p,q,r);

*/

// let age = '18';
// if(age != 18)
// console.log('I am college student');
// else
// console.log('I am a school student');

// let b =prompt("Enter a value:");

// if (b==1)
// console.log("name is don");
// else
// console.log("you are not a don");

// let a = prompt("Enter your value of how are you");
// if (a === 1)
// console.log("1");
// else
// console.log("2");
