// Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program.
// Modify the age.js program to use a for loop to display the future ages.

let rlSync = require('readline-sync');

let age = Number(rlSync.question("How old are you?\n"));
let years = 0;
console.log(`You are ${age} years old.`);

for (let i = 0; i < 4; i++) {
  years += 10;
  let futureAge = (age + years);
  console.log(`In ${years} years, you will be ${futureAge} years old.`);
}