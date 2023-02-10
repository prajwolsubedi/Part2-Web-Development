'use strict';
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function juices(apples, orange){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(orange);
//     const juice = (`juice with ${applePieces} apples and ${orangePieces}
//     orange.`)
//     return juice;
// }
// console.log(juices(5,5));

// const calcAge = function(birthYear){
//     return 2022 - birthYear;
// }
// console.log(calcAge(2002));

//Calculate the years until retirement using arrow fun.
/*
const calcAge = function (birthYear){
    return 2022 - birthYear;
}
const yearsUntilRetire = function(birthYear, firstName){
    const retirement = 65 - calcAge(birthYear); 

    if(retirement > 0 ){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else{
        console.log(`${firstName} has already retired🍾🍾`);
        return -1;
    }
}
console.log(yearsUntilRetire(2003, 'Prajwol'));
console.log(yearsUntilRetire(1950, 'lale'));

//Return statement immediately terminates the function so anything written after it will now be executed
*/

/*
The Complete JavaScript Course 9
JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

/*
const calcAverage = (score1, score2, score3) =>{
    const average = (score1 + score2 + score3) / 3;
    return average;
} 
const avgDolphins = calcAverage(85,54,41);
console.log(`The average score of dolphis is : ${avgDolphins}`);
const avgKoalas = calcAverage(23,34,27);
console.log(`The avergae score of koalas is : ${avgKoalas}`);

const checkWinner = function(avgDolphins, avgKoalas){
    if (avgDolphins >=  2*avgKoalas){
        console.log(`The first team (Dolphins) is a winner. Dolphis wins (${avgDolphins} vs ${avgKoalas})`);

    }
    else if (avgKoalas >= 2*avgDolphins){
        console.log(`The second team is a winner. Koalas wins (${avgKoalas} vs ${avgDolphins})`);
    }
    else{
        console.log('NO one is a winner')
    }
}
checkWinner(avgDolphins,avgKoalas);
*/


//Array
/*
const friends = ['sahin', 'pranim', 'bipul'];
const num = new Array(2,3,'prajwol','ka','dong');
console.log(friends[0]);
console.log(num.length);
console.log(num[num.length - 1]);
console.log(friends);
friends[2]= 'sir ji';
console.log(friends);
const firstName = 'prajwol';
const lastName = 'subedi';
const nickName = 'undefined';
const job = 'berojghar';
const information = [firstName,lastName,1000-999,friends];
console.log(information);

const calcAge = function(birthYear){
    return 2022 - birthYear;
}
const years = [2003,2002,2012,2020,2000,2018];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));
console.log(calcAge(years[years.length-1]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);
*/


// Array methods
/*
const friends = ['sahin', 'pranim', 'bipul',1];
console.log(friends);
const firstName = 'prajwol';
const lastName = 'subedi';
const nickName = 'undefined';
const job = 'berojghar';
const information = [firstName,lastName,1000-999,friends];
console.log(information);
// to push new element to the end of the array
friends.push('jay');
//here this push function returns the size of the new array.
// const newlength = friends.push('jay');

// To push new elements to the beginning of the array.
friends.unshift('Shushant');
console.log(friends);
//Here the unshift function also returns the size of the new array.


//To remove the last elements in the array
friends.pop(); //to remove the last elements in the array.
const popped = friends.pop();
console.log(popped);
//pop function returns the value that is going to be removed fromt the array
console.log(friends);

// To remove the first elements in the array
const removed = friends.shift();
console.log(removed);

console.log(friends.indexOf('bipul'));
// To check if theres is elements in the array.(it doesn't do type coersion).
console.log(friends.includes('pranim'));
console.log(friends.includes('prajwol'));
friends.push(23);
console.log(friends.includes(23));

if (friends.includes('pranim')){
    console.log('You have a friend called Pranim');
}

let friends = ['sahin', 'jhusey', 'sirji', 'shushant'];
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);
const popped = friends.pop();
console.log(popped);
console.log(friends);
const firstPopped = friends.shift();
console.log(firstPopped);
console.log(friends);
const firstPushed = friends.unshift('Shushant');
console.log(firstPushed);
console.log(friends);
console.log(friends.indexOf('jhusey'));
console.log(friends.includes('jhusey'));
if (friends.includes('jhusey')){
    console.log("you have a friends called Jhusey");
}
*/

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀

//solution
const calcTip = function(bill){
    if(bill > 50 && bill < 300){
    const Tips = (15/100) * bill;
    return Tips;
    }
    else{
        const Tips = (20/100)*bill;
        return Tips;

    }
}
const bills = [125,555,44];
const tips =[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);
for(i = 0; i<3;i++){
const total = [bills[i]+tips[i]];
console.log(total);
}
*/

/*
//objects
//In objects order of the value doesn't matters.
const prajwol = {
    firstName: 'prajwol',
    lastName: 'Subedi',
    age: 2022 - 2003,
    job: 'Berojghar',
    friends: ['Pranim', 'Sahinn', 'Kale']
};
console.log(prajwol);
console.log(prajwol.friends);
console.log(prajwol['friends']);
//There are two methods of accessing the properties of the objects
//One is using the dot operator and the second one is to use [''] similar to 
// array and inside a string . The main different is we can use expression in the [''] one
// but not in the dot operator.
const nameKey = 'Name';
console.log(prajwol['first' + nameKey]);
console.log(prajwol['last' + nameKey]);

const interstedIn = prompt('What do you want to know about prajwol?');
console.log(prajwol[interstedIn]);

prajwol.location = 'Nepal';
prajwol['Email']= 'prajwolsubedizzz@gmail.com';
console.log(prajwol);

console.log(`${prajwol['firstName']} has ${prajwol.friends.length} friends, and his best friend is ${prajwol.friends[1]}`);
*/

/*
//objects methods
const prajwol = {
    firstName: 'prajwol',
    lastName: 'Subedi',
    birthYear: 2003,
    job: 'Berojghar',
    friends: ['Pranim', 'Sahinn', 'Kale'],
    hasDriversLicense: false,

    // calcAge: function(birthYear){
    //     return 2022-birthYear;
    // }

    // calcAge: function () {
    //      console.log(this);
    //     return 2022 - this.birthYear;
    // }

    //only fucntion expression can be written inside a objects
    //function declaration doesn't work.

    calcAge: function(){
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old 
        ${this.job} and he has ${this.hasDriversLicense? 'a' : 'no'} drivers license.`;
    } 
};
// console.log(prajwol['calcAge'](prajwol['birhtYear']));
// console.log(prajwol.calcAge(prajwol.birthYear));
//We should first call teh function or object method in order for it to work.
console.log(prajwol.calcAge());
console.log(prajwol.age);
console.log(prajwol.getSummary());
*/

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀

//function inside of a object is a method?
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.markBMI = this.mass / this.height ** 2;
        return this.markBMI;
    }
}

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.johnBMI = this.mass / this.height ** 2;
        return this.johnBMI;
    }
}
const markBMI = markMiller.calcBMI();
const johnBMI = johnSmith.calcBMI();
console.log(markBMI, johnBMI);
if (markBMI > johnBMI)
{
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
}
else
{
    console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`);
}
console.log(markMiller,johnSmith);
*/

/*


LOOPS
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
const types = [];
const prajwolArray = ['Prajwol', 'Subedi',20,'berojghar','khatra',369,true];
for(let i = 0; i<prajwolArray.length;i++)
{
    console.log(prajwolArray[i], typeof prajwolArray[i]);
    // types[i] = typeof prajwolArray[i];
    types.push(typeof prajwolArray[i])
    

}
console.log(types);

const calcAge = function(birthYear){
    return 2022 - birthYear;
}
const ages = [];
const years = [1991, 2000, 2018 ,2020];
for(let i=0; i<years.length; i++)
{
    let result = calcAge(years[i]);
    ages.push(result);
}
console.log(ages);

continue and break

const prajwol = ['prajwol', 'subedi', 369, 'khatra', true];
console.log('---Only String (using continue)---')
for (let i=0;i<prajwol.length;i++){
    if(typeof prajwol[i] !== 'string') continue;
    console.log(prajwol[i], typeof prajwol[i]);
}


const prajwol = ['prajwol', 'subedi', 369, 'khatra', true,'Dami dami'];
console.log('---Break with Numbers---')
for (let i=0;i<prajwol.length;i++){
    if(typeof prajwol[i] === 'number') break;
    console.log(prajwol[i], typeof prajwol[i]);
}

//LOOPING ARRAYS BACKWARDS
const prajwol = [
    'Prajwol',
    'Subedi',
    369,
    'Khatra',
    true,
    ['lale','kale','jhusey']
];
// console.log(prajwol);

for (let i = prajwol.length-1; i>=0; i--){
    console.log(i,prajwol[i], typeof prajwol[i]);
}

//loop inside of a loop

for(let exercise = 1; exercise <= 3; exercise++){
    for(let i=1;i<6;i++){
        console.log(`${i} Reps 🏋️‍♀️🏋️‍♀️`);
    }
    console.log(`${exercise} finished.`);
}
*/

// for (let rep = 1; rep <= 5; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

/*
if you donot know how many iteration will happens then use while loop.
when there is no need of counter in the loop you can use while loop.
let rep = 1;
while(rep <= 5){
    console.log(`Lifting weights reptition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === 6 )
        console.log('Loop is about to end.')
}

*/

/*
The Complete JavaScript Course 12
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTips = function (bills){
    return (bills >= 50 && bills <= 300)? bills * 0.15 : bills * 0.2;
}
for(let i=0; i<bills.length; i++){
    const tip = calcTips(bills[i]);
    tips.push(tip);
    totals[i] = bills[i] + tips[i];
    // totals.push(tip + bills[i]);
}
console.log(bills,tips,totals);


//Bonous part
const arr= [100,200,300,400,500];
const calcAvg = function(arr){
    let sum = 0;
    for (let i = 0 ; i<arr.length; i++){
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
}

console.log(calcAvg(arr));
console.log(calcAvg(totals));
*/
















