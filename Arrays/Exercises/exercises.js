
/* 1. In the following code, what are the final length values for 
array1, array2, array3, array4, and array5?
*/
let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

// 4, 5, 0, 3, 101

/* 2. Log all of the even values from myArray to the console. */

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

console.log(myArray.filter(num => num % 2 === 0 && num > 0))

// OR

myArray.forEach(function (value) {
    if (value % 2 === 0) {
        console.log(value);
    }
});

/* 3. Let's make the problem a little harder. In this problem, we're again interested in 
even numbers, but this time the numbers are in nested arrays in a single outer array. */

let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
];

for (i = 0; i < myArray.length; i++) {
    for (x = 0; x < myArray[i].length; x++) {
        let value = myArray[i][x];
        if (value % 2 === 0) {
            console.log(value);
        }
    }
}

// OR

myArray.forEach(function (nestedArray) {
    nestedArray.forEach(function (value) {
        if (value % 2 === 0) {
            console.log(value);
        }
    });
});

/* 4.  In this problem, we want to use the map function to create a new array that 
contains one element for each element in the original array. 
If the element is an even value, then the corresponding element in the new array should 
contain the string 'even'; otherwise, the element in the new array should contain 'odd'.
*/

let myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
];

let newArray = myArray.map(num => {
    if (num % 2 === 0) {
        return 'even'
    }
    return 'odd'
})

/* 5. Write a findIntegers function that takes an array argument and returns an array that 
contains only the integers from the input array. Use the filter method in your function. */

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let findIntegers = (myArray) => {
    return myArray.filter(value => {
        if (Number.isInteger(value)) {
            return value;
        }
    });
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

/* 6. Use map and filter to first determine the lengths of all the elements in an array 
of string values, then discard the even values (keep the odd values).*/

let oddLengths = (array) => {

    //map
    let newArray = array.map(value => {
        return value.length
    });

    //filter
    return newArray.filter(value => {
        if (value % 2 === 1) {
            return value
        }
    })
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// OR

function oddLengths(strings) {
    let lengths = strings.map((letters) => letters.length);
    let oddLengths = lengths.filter((number) => number % 2 === 1);
    return oddLengths;
}

/* 7. Use reduce to compute the sum of the squares of all of the numbers in an array. 
What happens if you forget to provide an initial value of 0 for the accumulator? */

function sumOfSquares(array) {
    return array.reduce((accumulator, element) => accumulator + (element * element), 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

/* If you forget to provide an initial value for the accumulator, the index of the current element
being processed will start from index 1 and use index 0 as the initial value for the accumulator */

/* 8. Write a function similar to the oddLengths function from Exercise 6, but don't use map 
or filter. Instead, try to use the reduce method. */

function oddLengths(array) {
    return array.reduce(function (accumulator, element) {

        // push onto array
        if (element.length % 2 === 1) {
            accumulator.push(element.length)
        }
        return accumulator;
    }, [])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/* 9. Without using a for, while, or do/while loop, write some code that checks whether 
the number 3 appears inside these arrays: */

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

/* Write some code to replace the value 6 in the following array with 606: */

let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
];

arr[1][3] = 606;