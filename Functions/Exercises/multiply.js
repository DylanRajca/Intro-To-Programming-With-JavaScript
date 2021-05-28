//Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

function multiply() {
  let readlineSync = require('readline-sync');

  let firstNumber = Number(readlineSync.question("Enter the first number: "));
  let secondNumber = Number(readlineSync.question("Enter the second number: "))
  let product = (firstNumber * secondNumber);

  return `${firstNumber} + ${secondNumber} = ${product}`;
}

console.log(multiply());
