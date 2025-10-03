// ========================= 
// 🔹 useState Hook
// useState is a React Hook that allows you to add state to a functional component.
// Syntax: 
// const [state, setState] = useState(initialValue)

// - state → current value
// - setState → function to update the value

// Example:
// const [count, setCount] = useState(0);

// setCount(newValue) updates the state and re-renders the component.

// 🧠 Think of it as a variable that React keeps track of across re-renders.
// ========================= 

import React, { useState } from 'react'
import { FaArrowsRotate } from "react-icons/fa6";

function UseState() {
  // Q1: Boolean State
  const [ans1, setAns1] = useState(false);

  // Q2: Score Example
  const [score2, setScore2] = useState(10);

  // Q3: Toggle Ban
  const [banned3, setBanned3] = useState(false);

  // Q4: Increment Value
  const [value4, setValue4] = useState(1);

  // Q5: Object State (with name & ban status)
  const [obj5, setObj5] = useState({ name: "Prince", isBanned: false });

  // Q6: Array of Numbers (CRUD operations on array)
  const [arr6, setArr6] = useState([1, 2, 3, 4, 5, 6]);

  // Q7: Array of Objects (update specific object in array)
  const [users7, setUsers7] = useState([
    { name: "Prince", age: 19 },
    { name: "Ronak", age: 20 },
    { name: "Raj", age: 19 },
  ]);

  // Q8: Change Image
  const [Image, setImage] = useState(false);

  return (
    <div className='space-y-6 p-6'>

      {/* 🔹 Page Heading */}
      <div className="p-6 border rounded-lg bg-gray-100 shadow">
        <h1 className="text-3xl font-bold text-blue-700">⚛️ useState() in React</h1>
        <p className="mt-2 text-gray-700">
          <b>useState</b> is a React Hook that allows you to add state to a functional component.
          It lets React remember values between re-renders and update the UI when state changes.
        </p>
        <div className="mt-3 p-3 bg-white border rounded-lg">
          <h2 className="font-semibold">📌 Syntax:</h2>
          <pre className="bg-gray-200 p-2 rounded mt-1 text-sm">
            {`const [state, setState] = useState(initialValue);`}
          </pre>
          <ul className="list-disc ml-6 mt-2 text-sm">
            <li><b>state</b> → current value</li>
            <li><b>setState</b> → function to update the value</li>
            <li>Calling setState re-renders the component with new state</li>
          </ul>
        </div>
      </div>

      {/* Q1: Boolean State */}
      <div className="p-4 border rounded-lg bg-blue-50">
        <h2 className="font-bold text-lg">Q1: Boolean State</h2>
        <p>Current Value: {ans1.toString()}</p>
      </div>

      {/* Q2: Score Example */}
      <div className="p-4 border rounded-lg bg-green-50">
        <h2 className="font-bold text-lg">Q2: Score Example</h2>
        <h1>{score2}</h1>
        <button onClick={() => setScore2(200)} className='px-2 py-1 mt-2 text-xs bg-green-500 text-white rounded-full'>Change👆</button>
      </div>

      {/* Q3: Toggle Ban */}
      <div className="p-4 border rounded-lg bg-yellow-50">
        <h2 className="font-bold text-lg">Q3: Toggle Ban</h2>
        <h1>{banned3.toString()}</h1>
        <button onClick={() => setBanned3(!banned3)} className='px-2 py-1 mt-2 text-xs bg-yellow-500 text-white rounded-full'>Ban Karo 🖕</button>
      </div>

      {/* Q4: Increment Value */}
      <div className="p-4 border rounded-lg bg-purple-50">
        <h2 className="font-bold text-lg">Q4: Increment Value</h2>
        <h1>{value4}</h1>
        <button onClick={() => setValue4(prev => prev + 1)} className='px-2 py-1 mt-2 text-xs bg-purple-500 text-white rounded-full'>Change Karo👆</button>
      </div>

      {/* Q5: Object State */}
      <div className="p-4 border rounded-lg bg-pink-50">
        <h2 className="font-bold text-lg">Q5: Object State</h2>
        <h1>Name : {obj5.name}</h1>
        <h2>Banned : {obj5.isBanned.toString()}</h2>
        <button onClick={() => setObj5({ ...obj5, isBanned: !obj5.isBanned })} className={`px-2 py-1 mt-2 text-xs ${obj5.isBanned ? "bg-pink-600" : "bg-pink-400"} text-white rounded-full`}>Change Karo👆</button>
      </div>

      {/* Q6: Array of Numbers */}
      <div className="p-4 border rounded-lg bg-red-50">
        <h2 className="font-bold text-lg">Q6: Array of Numbers</h2>
        {arr6.map((item, index) => <h1 key={index}>{item}</h1>)}

        <button onClick={() => setArr6(() => arr6.filter((item, index) => index !== arr6.length - 1))} className='px-2 py-1 mt-2 mr-2 text-xs bg-red-500 text-white rounded-full'>
          Delete Last</button>

        <button onClick={() => setArr6(() => arr6.filter((item, index) => index !== 2))} className='px-2 py-1 mt-2 mr-2 text-xs bg-red-500 text-white rounded-full'>
          Delete 3</button>

        <button onClick={() => setArr6(() => arr6.filter(item => item % 2 !== 0))}
          className='px-2 py-1 mt-2 mr-2 text-xs bg-red-500 text-white rounded-full'>
          Odd No</button>

        <button onClick={() => setArr6([...arr6, 7])} className='px-2 py-1 mt-2 text-xs bg-red-500 text-white rounded-full'>
          Add 7</button>
      </div>

      {/* Q7: Array of Objects */}
      <div className="p-4 border rounded-lg bg-indigo-50">
        <h2 className="font-bold text-lg">Q7: Array of Objects</h2>
        {users7.map((item, idx) => (
          <div key={idx}>
            <h1>Name : {item.name}</h1>
            <h2>Age : {item.age}</h2>
          </div>
        ))}
        <button onClick={() => setUsers7(() => users7.map(item => item.name === "Ronak" ? ({ name: "Ronak", age: 21 }) : item))} className='px-2 py-1 mt-2 text-xs bg-indigo-500 text-white rounded-full'>+Age</button>
      </div>

      {/* Q8: Change Image */}
      <div className="h-[360px] w-full border rounded-lg overflow-hidden flex relative">
        <img className={`shrink-0 ${Image === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover w-full h-full`} src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image1"/>
        <img className={`shrink-0 ${Image === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover w-full h-full`} src="https://images.unsplash.com/photo-1625895197185-efcec01cffe0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" alt="image2"/>

        <span onClick={()=>setImage(()=>!Image)} className="absolute right-10 top-72 bg-[#dadada8b] p-2 rounded-full cursor-pointer">
          <FaArrowsRotate size="1.5em" />
        </span>
      </div>
      
    </div>
  )
}

export default UseState
