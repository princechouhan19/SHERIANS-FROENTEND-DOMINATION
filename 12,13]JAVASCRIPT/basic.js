// ===========================
// 📘 JavaScript Basics Lecture
// ===========================

// ----------------------------------------
// ✅ Console, Alert, Prompt
// ----------------------------------------
// console.log(): Prints messages to browser console for debugging
// console.warn(): Prints warning messages
// console.error(): Prints error messages

console.log('prince');
console.warn('prince');
console.error('prince');

// alert(): Shows a browser popup with OK button
alert('prince');

// prompt(): Shows a browser popup with input field and OK/Cancel
prompt("prince");


// ----------------------------------------
// ✅ Variables & Constants
// ----------------------------------------
// var: function-scoped, allows redeclaration
// let: block-scoped, used to declare variables (not shown here)
// const: block-scoped, cannot be reassigned

var a = 12;
var b = 34;
const c = 99;


// ----------------------------------------
// ✅ Compiler vs Interpreter vs JIT
// ----------------------------------------
// Compiler: Converts full code to machine code before execution (e.g., C, C++)
// Interpreter: Executes code line-by-line (e.g., Python, old JS engines)
// JIT Compiler: Combines both – converts code during runtime (used by modern JS engines like V8)


// ----------------------------------------
// ✅ Window Object
// ----------------------------------------
// The global object in browsers. All global variables, functions, alerts, etc., are its properties.

window.alert("Window object example");


// ----------------------------------------
// ✅ Data Types in JS
// ----------------------------------------
// Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Reference: Object, Array, Function

let str = "hello";                  // String
let num = 42;                       // Number
let isCool = true;                  // Boolean
let nothing = null;                // Null
let notDefined;                    // Undefined
let bigNum = 12345678901234567890n; // BigInt


// ----------------------------------------
// ✅ Spread Operator (...)
///----------------------------------------
// Used to spread elements of arrays/objects or combine them

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];         // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };       // {a:1, b:2, c:3}


// ----------------------------------------
// ✅ Conditional Statements
// ----------------------------------------
// if, else-if, else: Execute code based on condition
// Ternary Operator: Short-hand for if-else
// switch: Used for multiple condition matching

let age = 18;

if (age < 18) {
  console.log("Minor");
} else if (age === 18) {
  console.log("Just adult");
} else {
  console.log("Adult");
}

// Ternary operator
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

// switch statement
let day = 2;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Other Day");
}


// ----------------------------------------
// ✅ Loops in JS
// ----------------------------------------
// for: loop with index
// while: loop with condition
// do-while: executes at least once
// forEach: for array elements
// for...in: loop through object keys
// for...of: loop through iterable items

for (let i = 0; i < 3; i++) {
  console.log("for loop", i);
}

let i = 0;
while (i < 3) {
  console.log("while loop", i);
  i++;
}

let j = 0;
do {
  console.log("do-while loop", j);
  j++;
} while (j < 3);

[1, 2, 3].forEach(num => console.log("forEach:", num));

let obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(`for-in: ${key} = ${obj[key]}`);
}

for (let value of [1, 2, 3]) {
  console.log("for-of:", value);
}


// ----------------------------------------
// ✅ Functions – ES5 vs ES6
// ----------------------------------------

// ES5: Function Statement
function greet() {
  console.log("Hello from function statement");
}

// ES5: Function Expression
const add = function (x, y) {
  return x + y;
};

// ES5: Anonymous Function (often used in callbacks)
setTimeout(function () {
  console.log("Anonymous function executed");
}, 1000);


// ES6: Arrow Functions

// Basic Arrow Function
const hello = () => console.log("Hello from arrow function");

// Arrow Function with One Parameter
const square = x => x * x;
console.log("Square of 5:", square(5));

// Implicit Return in Arrow Function
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(3, 4));


// ----------------------------------------
// ✅ Return Statement
// ----------------------------------------
// Used to return values from functions

function multiplyReturn(a, b) {
  return a * b;
}
let product = multiplyReturn(3, 4);
console.log("Returned product:", product);


// ----------------------------------------
// ✅ Arrays
// ----------------------------------------
// Collection of elements (ordered)

let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);         // "apple"
fruits.push("orange");          // add to end
console.log("Length:", fruits.length);


// ----------------------------------------
// ✅ Objects
// ----------------------------------------
// Collection of key-value pairs

let person = {
  name: "Prince",
  age: 21,
  greet: function () {
    console.log("Hi, I am " + this.name);
  }
};

console.log("Name:", person.name); // Prince
person.greet();// Hi, I am Prince