#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number

// 2) user input for gasing number

// 3) compare user input with computer generated number and show result

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min); // Round up the minimum value
  max = Math.floor(max); // Round down the maximum value
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum: number = getRandomInt(1, 10); // Returns a random integer between 1 and 100 (inclusive)
//console.log(randomNum); for your concept

const guessnumber = await inquirer.prompt([
  { name: "userGuessNumber", type: "number", message: "please guess a number 1-10" },
]);
if (guessnumber.userGuessNumber === randomNum) {
  console.log("congratulation you guess right number");
} else {
  console.log("unfortunately you guess wrong number");
}
console.log(guessnumber);
