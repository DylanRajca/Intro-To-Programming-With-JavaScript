/* 1. Write a function that computes and returns the factorial of a number by using a for loop.
The factorial of a pos integer n, signified by n!, is defined as the product of all integers
between w and n, inclusive.
*/

function factorial(number) {

  // factorial using for loop
  let counter = 1
  for (i = 1; i <= number; i++) {
    counter *= i;
  }
  return counter;
}


/* 
The following code uses a randomNumberBetween function to generate a number between its first and second arguments. 
It uses a while loop to try to generate a number greater than 2. 
Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. 
Do not change the arguments you pass to randomNumberBetween.
*/

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// REFACTORED:
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2)


console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

/* Reimplement the factorial function from exercise 1 using recursion.
You may assume that the argument is always a positive integer.
*/

function factorial(number) {

  // factorial using recursion
  if (number === 1) return number;

  return number * factorial(number - 1)
}

