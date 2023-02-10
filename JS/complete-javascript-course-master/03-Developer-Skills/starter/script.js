// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//problem
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, '77','-9', 9, 13, 17, 15, 14, 9, 5];

//1.Understanding the problem
// - What is the temp amplitude? Answer: difference between highest and lowest tem-
// How to compute the max and min temperature?
// Whats a sensor error? And what to do ?

//2) Breaking up into sub-problems.
//- How to ignore errors?
//-Find the max and min value in the array.
//-Subtract min from the max (amplitude) and return it.
// const max = Math.max(...temperatures);
// console.log(max);

// const calcTempAmp = function(temps){
//     let max = temps[0];
//     let min = temps[0];

//     for(let i=0;i<temps.length;i++){
//         const curTemp = temps[i];
//         if(typeof temps[i] !== 'number') continue;
//         //continue means the rest of the iteration will not be executed
//         if(max<curTemp) max = curTemp;
//         if(min>curTemp) min = curTemp;
//     }
//     console.log(max,min);
//     return max - min;

// }
// const amplitude = calcTempAmp(temperatures);
// console.log(amplitude);

/*
//PROBLEM 2 
//Function should receive 2 arrays of temps

// 1)Understanding the problem
//-With 2 arrays, should we implement functionality twice? - No just merge two arrays

// 2)BREAKING UP INTO SUB-PROBLEMS
// -How to merge 2 arrays

const temps1 = [1,2,3,4,5];
const temps2 = [11,22,33,44,55];
// const temps3 = temps1.concat(temps2);

const calcTempAmp = function(temp1, temp2){
    const temps = temp1.concat(temp2);
    let max = temps[0];
    let min = temps[0];
    for(let i=0;i<temps.length;i++){
        const currTemp = temps[i];
        if(typeof temps[i] !== 'number') continue;
        if(max<currTemp) max=currTemp;
        if(min>currTemp) min=currTemp;
    }
    console.log(min);
    console.log(max);
    return max-min;
}

const amplitude = calcTempAmp(temps1,temps2);
console.log(amplitude);
*/

/*
//DEBUGGING
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degress Celsius:')),
    value: 10,
    num: 78,
  };

  //PROMPT FUNCTION ALWAYS RETURNS A STRING!!!!
  //2) Finding a bug.
  console.log(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//1.Identify the bug
console.log(measureKelvin());

//Debuggins using debugger

const temps1 = [1, 2, 3, 4, 5];
const temps2 = [11, 22, 33, 44, 55];
// const temps3 = temps1.concat(temps2);

const calcTempAmpBug = function (temp1, temp2) {
    const temps = temp1.concat(temp2);
    let max = 0;
    let min = 0;
    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];
        // debugger;
        if (typeof temps[i] !== 'number') continue;
        if (max < currTemp) max = currTemp;
        if (min > currTemp) min = currTemp;
    }
    console.log(min);
    console.log(max);
    return max - min;
};
//1. Identify the Bug.
console.log(calcTempAmpBug(temps1, temps2));
*/

/*
The Complete JavaScript Course 13
Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

const arr = [12, 5, -5, 0, 4];
let max = arr[0];
let min = arr[0];
let minDay = 1;
let maxDay = 1;
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    console.log(`${arr[i]} ºC in ${i + 1} days`);
    if (max < curTemp) {
      max = curTemp;
      maxDay = i + 1;
    }
    if (min > curTemp) {
      min = curTemp;
      minDay = i + 1;
    }
  }
  console.log(
    `The minimum temperature is ${min} on day ${minDay} and the maximum temperature is ${max} on day ${maxDay}`
  );
};
printForecast(arr);
