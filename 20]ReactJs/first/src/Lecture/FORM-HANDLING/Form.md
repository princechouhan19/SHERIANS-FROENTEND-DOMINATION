# 📘 Form Handling

## 🔹 Introduction
In React, handling forms is an essential part of building interactive web apps.  
But unlike plain HTML, React has its own way of managing form data efficiently.  

---

## ⚡ The Reload Issue
- In plain **HTML forms**, when you click **submit**, the page **reloads by default**.
- This breaks the **Single Page Application (SPA)** behavior in React.
- ✅ Solution → Prevent reload using:

```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // stops reload
  console.log("Form submitted");
};


🛠️ Methods for Handling Forms in React

1️⃣ useRef = Works with uncontrolled components (direct access to DOM elements).

Best for simple use cases where you just need the final input value.

No need to update state on every keystroke.

import { useRef } from "react";

function FormUseRef() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input value:", inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}


2️⃣ Controlled Components = Inputs are controlled by React state using useState.

Every keystroke updates the state → UI always in sync with data.

Great for real-time validation, conditional rendering, or data manipulation.

import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}


3️⃣ React Hook Form = A popular library for form handling in React.

Provides optimized performance (less re-renders).

Built-in validation & simple syntax.

Install

npm install react-hook-form


Example  =

import { useForm } from "react-hook-form";

function HookFormExample() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      <input {...register("email")} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
