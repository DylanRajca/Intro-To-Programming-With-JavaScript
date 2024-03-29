/* 1. Given the following code, how can you access the name of the person? */
let person = {
    name: 'Bob',
    occupation: 'web developer',
    hobbies: 'painting',
};

let name = person.name;

/* Which of the following values are valid keys for an object? */
// All are valide keys, but JavaScript will coerce the non-string key values to strings.

/* 3.Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array 
in a for statement. The object should contain at least 3 elements. You should place your code between the braces 
in the let statement: */
let myArray = {
    0: 'first',
    1: 'second',
    2: 'third',
    length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i]);
}

/* 4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase.
Your immplementation must not mutate obj. */
let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let objArray = []
for (let prop in obj) {
    objArray.push(prop.toUpperCase());
}

console.log(objArray);

/* 5. Create a new object named myObj that uses myProtoObj as its prototype */
let myProtoObj = {
    foo: 1,
    bar: 2,
};

let myObj = Object.create(myProtoObj);

/* 6. Which of the following values are primitive values? Which are objects? Which are neither? */
"foo" - Primitive
3.14 - Primitive
['a', 'b', 'c'] - Object
false - Primitive
foo - Neither
function bar() { return "bar"; } - Object
undefined - Primitive
{ a: 1, b: 2 } - Object

/* 7. Add a qux property with value 3 to the myObj object we created in the previous exercise. 
Now, examine the following code snippets and without running the code, can you determine whether these 
two snippets produce the same output? Why?*/

let myProtoObj = {
    foo: 1,
    bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

///////////////

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
    console.log(key);
});

for (let key in myObj) {
    console.log(key);
}

/* The above snippets will not produce the same output because a for/in loop iterates over the object prototypes props in 
 addition to its own. forEach only iterates over the calling objects props. */

/* 8. Create a function that creates and returns a copy of an object. The function should take two arguments: the object 
to copy and an array of the keys that you want to copy. Do not mutate the original object. The function should let you 
omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all 
of the existing keys from the object.*/
const copyObj = (object, array) => {

    // Validation check for array arguemnt
    if (null != array) {
        myObj = {};
        array.forEach(function (prop) {
            myObj[prop] = object[prop];
        });
        return myObj;
    }
    else {
        return object
    }
}

let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
};

let newObj = copyObj(objToCopy);
let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
let newObj3 = copyObj(objToCopy, ['bar']);

console.log(newObj);

/* 9. What does the following program log to the console? Why? */
let foo = {
    a: 'hello',
    b: 'world',
  };
  
  let qux = 'hello';
  
  function bar(argument1, argument2) {
    argument1.a = 'hi';
    argument2 = 'hi';
  }
  
  bar(foo, qux);
  
  console.log(foo.a);
  console.log(qux);

  /* foo.a will log 'hi', since it was modified in the bar function. qux will still log 'hello' 
  argument2 was only modified in the scope of bar and doesn't change qux which is declared 
  globally. Objects are mutable and variable reassignment doesn't mutate the original object even
  if the object is mutable. */

  /* 10. How many primitive values are there in the following expression? Identify them. 
  How many objects are there in the expression? Identify those objects. */
  [1, 2, ["a", ["b", false]], null, {}]

  /* Primitive Values - 6
  1,2,"a","b",false,nul
  
  Objects- 4
  Outside array, 2 nested arrays and nested object
  */

  /* 6. Write some code to replace the value 6 in the following object with 606: */
  let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

  obj.bar[3].xyz = 606;


