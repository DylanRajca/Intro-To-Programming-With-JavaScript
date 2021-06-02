
// 1. What values do the following expressions evaluate to?
{
    false || (true && false); // false
    true || (1 + 2); // True
    (1 + 2) || true; // 3
    true && (1 + 2); // 3
    false && (1 + 2); // false
    (1 + 2) && true; // 3
    (32 * 4) >= 129; // false
    false !== !true; // false
    true === 4; // false
    false === (847 === '847'); // true
    false === (847 == '847'); // false
    (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true 
}

// Write a function evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console;
// otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
// Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
let evenOrOdd = (number) => {

    // Valdiation check if number is an integer
    if (!Number.isInteger(number)) {
        console.log("ERROR, please enter a valid integer.");
        return;
    }

    if (number % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

// Refactor this statement to use an if statement insead:
//return foo() ? 'bar' : qux();
if (foo()) {
    return 'bar';
}
else {
    return qux();
}

// Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. 
// Otherwise, it should return the original string.
let capitalize = (string) => {

    // Validation check for string
    if (typeof string !== "string") {
        return
    }
    // Return original if less than 10 char
    if (string.length <= 10) {
        return string;
    }

    // capitalize
    else {
        return string.toUpperCase();
    }
}

function capsLong(string) {
    return ((string.length > 10) ? string.toUpperCase() : string);
  }

// Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.
function numberRange(number) {
    if (number < 0) {
      console.log(`${number} is less than 0`);
    } else if (number <= 50) {
      console.log(`${number} is between 0 and 50`);
    } else if (number <= 100) {
      console.log(`${number} is between 50 and 100`);
    } else {
      console.log(`${number} is greater than 100`);
    }
  }