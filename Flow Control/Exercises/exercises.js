
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
    if (number % 2 === 0) {
        console.log('even')
    }
    else {
        console.log('odd')
    }
}