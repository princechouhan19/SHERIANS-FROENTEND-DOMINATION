// ============================
// 📘 React Theory
// ============================


// 🔹 Definition:
// React is a **JavaScript library** for building user interfaces.
// It focuses on building reusable UI components.

// 🔹 Created By:
// Developed by **Jordan Walke** at **Facebook** in **2013**.
// Open-sourced to the public in **2015**.

// 🔹 Why React?
// React was made to solve performance and scalability issues
// in large applications where frequent DOM updates caused slowness.
// It introduced concepts like **Virtual DOM** and **Component-based architecture**.

// 🔹 Virtual DOM:
// - The Virtual DOM is a lightweight copy of the real DOM.
// - Instead of re-rendering the entire page when something changes,
//   React only updates the specific parts of the DOM that actually changed.
// - This makes apps **faster** and more **efficient**.
//

// 🎯 Key Idea: 
// React → Efficient UI updates with Virtual DOM + Reusable Components.


// =======================================
//         🚀 React Essentials 
// =======================================

// ==========================================================
// 🔹 IMMUTABLE vs MUTABLE
// ==========================================================
// 📌 Definition: 
// - Mutable: Value can be changed directly (unsafe in React).
// - Immutable: Value cannot be changed directly; create a copy instead.
//
// Why ❓ React state should be immutable to ensure predictable updates.

// Example with Arrays (Reference type)
var arr = [1, 2, 3, 4];   // Reference datatype
var arr2 = arr;
arr2.pop(); 
// arr = [1,2,3] and arr2 = [1,2,3] (both mutated ❌)

// ✅ Correct way (Immutable update)
var state = [1, 2, 3, 4];
var state1 = [...state]; // spread operator creates copy
state1.pop();
console.log("State:", state);   // [1,2,3,4]
console.log("State1:", state1); // [1,2,3]

// Example with Objects
var user = { name: "Prince", age: 19 };
// ❌ Wrong: user.name = "Chouhan" (Direct mutation not allowed in React)
var copy = { ...user }; // ✅ Copy using spread "..."
copy.name = "Chouhan";
user = copy; // Now React will recognize change


// ==========================================================
// 🔹 DESTRUCTURING
// ==========================================================
// 📌 Definition: Extract values from arrays or objects into variables.
// 📌 Syntax:
// const {property} = object
// const [val1, val2] = array

// Example 1: Object destructuring
var profile = { name: "Prince", age: 19 };
const { name, age } = profile; 
console.log(name, age);

// Example 2: Nested object destructuring
var accounts = {
    name: "Prince",
    social: {
        facebook: {
            primary: "prince",
            secondary: "wyvern",
        }
    }
};
const { secondary } = accounts.social.facebook; 
console.log(secondary);

// Example 3: Array destructuring
var arrEx = [12, function () { console.log("Hello"); }];
var [num, func] = arrEx;
console.log(num); 
func(); // runs the function


// ==========================================================
// 🔹 IMPORT & EXPORT
// ==========================================================
// 📌 Definition: Used to share code between files in React (modules).
// 📌 Syntax:
// export default ComponentName;
// import ComponentName from './ComponentName';

// Example: (in Cart.js)
function Cart() {
    console.log("Cart Component");
}
export default Cart;

// Example: (in App.js)
// import Cart from './Cart';


// ==========================================================
// 🔹 ARROW FUNCTIONS (ES6)
// ==========================================================
// 📌 Definition: Shorter syntax for functions.
// 📌 Features: Implicit return, lexical 'this' binding

// Basic arrow function
const abcd = () => {
    console.log("Hello");
};
abcd();

// One parameter
const def = (val) => {
    console.log(val);
};
def("Hi Prince");

// Implicit return
const ghi = () => "Prince";
console.log("Hello " + ghi());

// Explicit return
const jkl = () => {
    return "Prince";
};
console.log("Hello " + jkl());

// ⚠️ Pitfall: Returning object literals
const wrong = () => { name: "Prince" }; // ❌ undefined
const right = () => ({ name: "Prince" }); // ✅
console.log(right());


// ==========================================================
// 🔹 MAP & FILTER (Array methods)
// ==========================================================
// 📌 map(): Transforms each element and returns new array (same length).
// 📌 filter(): Returns new array with elements that pass a condition.

// Example 1: map
var numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(val => val * 2);
console.log("Doubled:", doubled);

// Example 2: Increase all numbers by 1
const incremented = numbers.map(num => num + 1);
console.log("Incremented:", incremented);

// Example 3: Conditional map – add 2 only if > 5
var nums = [1,2,3,4,5,6,7,8];
const modified = nums.map(num => num > 5 ? num + 2 : num);
console.log("Modified:", modified);

// Example 4: filter – remove numbers <= 4
const filtered = nums.filter(num => num > 4);
console.log("Filtered:", filtered);

// Example 5: Filter objects
var students = [
    { name: "Prince", gender: "male" },
    { name: "Ronak", gender: "male" },
    { name: "Pooja", gender: "female" },
    { name: "Dipesh", gender: "male" },
    { name: "Saloni", gender: "female" },
];
const boys = students.filter(s => s.gender === "male");
const girls = students.filter(s => s.gender === "female");
console.log("Boys:", boys);
console.log("Girls:", girls);

// 🎯 Summary:
// - map → transforms data
// - filter → selects data