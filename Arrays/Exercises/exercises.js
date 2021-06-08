
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

