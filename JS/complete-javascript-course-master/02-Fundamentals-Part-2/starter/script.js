'use strict';
/*
function logger(){
    console.log('My name is Jonas');
}
// calling or running or invoking function.
logger();
logger();

function fruitProcessor(apples, oranges){
    return `Juice with ${apples} apples and ${oranges} oranges.`;
}
const result = fruitProcessor(5,10);
console.log(result);

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice);
*/

/*
//Function declaration
const age = calcAge1(2003);
function calcAge1(birthYear){
    return 2022 - birthYear;
}

console.log(age);

//Function expression
//Function is just a value.
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}
const age2 = calcAge2(2002);
console.log(age2);
*/
/*
//Arrow function
// Only one parameter then we can do this.
const calcage3 = birthYear => 2022 - birthYear;
const age3 = calcage3(2003);
console.log(age3);


const yearsUntilRetirement = (birhtYear, firstName) => {
    const age = 2022 - birhtYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
} 
console.log(yearsUntilRetirement(2003,'prajwol'))



const calcAge1 = birthYear => 2022 - birthYear;

const age1 = calcAge1(2003);
console.log(`Your current age is ${age1}.`);
*/

//function calling another function

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applesPieces} apples and ${orangePieces} oranges.`;
}
console.log(fruitProcessor(2, 3)); 





