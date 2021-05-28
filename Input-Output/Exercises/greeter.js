// Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered.
// Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.
// (Functions) Add a function to this program that solicits the user's first and last names in a separate invocations.
// The function should return the appropriate name as a string. Use the return values to greet the user with their full name.

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
