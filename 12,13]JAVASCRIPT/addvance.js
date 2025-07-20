// ============================
// 🔹 L1: THIS Keyword
// ============================
// 📌 Definition: 'this' refers to the context in which a function is called.
// It can point to window, object, constructor, or element based on context.

// 🧪 SYNTAX EXAMPLES:

// Global scope: 'this' refers to window (in browsers)
console.log("Global this:", this);

// Normal function: 'this' is window (non-strict mode)
function abcd() {
    console.log("Function this:", this);
}
abcd();

// Method inside object: 'this' is the object itself
var obj = {
    student: function () {
        console.log("Method this:", this);
        console.log("Age:", this.age);
        console.log("Name:", this.name);
    },
    age: 19,
    name: "Prince",
};
obj.student();

// Function inside method (ES5): inner function's 'this' is window
var obj2 = {
    Name: function () {
        console.log("Outer method this:", this);
        function childfnc() {
            console.log("Inner function this:", this); // window
        }
        childfnc();
    }
};
obj2.Name();

// Function inside method (ES6 arrow): arrow function inherits outer 'this'
var obj3 = {
    SayName: function () {
        const child = () => {
            console.log("Arrow function this:", this); // obj3
        };
        child();
    }
};
obj3.SayName();

// Constructor function: 'this' refers to the new object
function Add() {
    console.log("Constructor this:", this);
}
const ans = new Add();

// In Event Listener: 'this' is the HTML element on which event is attached
document.querySelector("button")
    .addEventListener("click", function () {
        console.log("Button this:", this);
    });


// ============================
// 🔹 L2: Call / Apply / Bind
// ============================
// 📌 Definition: Used to manually set the value of 'this' inside a function.

// 🔹 call(): Calls function with specified 'this' and individual arguments
function callo() {
    console.log("call this:", this);
}
const objCall = { name: "Prince" };
callo.call(objCall);

// 🔹 apply(): Same as call but takes arguments as an array
function applyo(a, b, c) {
    console.log("apply this:", this, a, b, c);
}
applyo.apply(objCall, [1, 2, 3]);

// 🔹 bind(): Returns a new function with bound 'this'
function bindo() {
    console.log("bind this:", this);
}
const boundFunc = bindo.bind(objCall);
boundFunc();


// ============================
// 🔹 L3: Prototypal Inheritance
// ============================
// 📌 Definition: Allows an object to inherit properties/methods from another object via prototype chain.

function MakeHuman(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}
// Adding shared property via prototype
MakeHuman.prototype.country = "India";

const human1 = new MakeHuman("Prince", "Chouhan", 19);
console.log("Prototypal country:", human1.country);


// ============================
// 🔹 L4: Closures
// ============================
// 📌 Definition: A closure gives access to an outer function's scope from an inner function even after the outer function has returned.

function timer() {
    var a = 12;
    return setTimeout(function () {
        console.log("Closure captured a:", a);
    }, 2000);
}
timer();


// ============================
// 🔹 L5: Event Delegation
// ============================
// 📌 Definition: Event delegation allows you to add a single event listener to a parent element to handle events for multiple child elements.

var parent = document.querySelector("#parent");

parent.addEventListener("click", function (details) {
    if (details.target.id === "play") {
        console.log("🎵 Play song");
    } else if (details.target.id === "pause") {
        console.log("⏸️ Pause song");
    }
});


// ============================
// 🔹 L6: Higher Order Functions
// ============================
// 📌 Definition: A higher-order function is a function that takes another function as an argument or returns a function.

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function (val) {
    console.log("forEach value:", val);
});


// ============================
// 🔹 L7: Try-Catch
// ============================
// 📌 Definition: Used to handle runtime errors gracefully and prevent code from breaking.

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        console.log("Division result:", a / b);
    } catch (err) {
        console.error("Caught error:", err.message);
    }
}
divide(12, 0);


// ============================
// 🔹 L8: Custom Events
// ============================
// 📌 Definition: Custom events allow you to create and dispatch your own event types.

const yourEvent = new Event("gharjaao");

const eventBtn = document.querySelectorAll("button")[2]; // 3rd button
eventBtn.addEventListener("gharjaao", function () {
    alert("Custom Event Triggered: Ghar ja raha hu!");
});

eventBtn.dispatchEvent(yourEvent);