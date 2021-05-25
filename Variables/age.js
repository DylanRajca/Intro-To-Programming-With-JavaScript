// Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years.

let age = 20;
let years = 0;
console.log(`You are ${age} years old.`);

for (let i = 0; i < 4; i++) {
  years += 10;
  let futureAge = (age + years);
  console.log(`In ${years} years, you will be ${futureAge} years old.`);
}