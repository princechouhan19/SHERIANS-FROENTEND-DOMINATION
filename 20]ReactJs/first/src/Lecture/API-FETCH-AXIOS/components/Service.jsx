// Imports the custom Axios instance.
import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";

const Service = () => {
  // An array of objects representing static service data.
  const services = [
    {
      title: "Easy Replacement",
      description:
        "Get hassle-free replacements on defective or damaged products within 7 days of delivery.",
      image:
        "https://images.unsplash.com/photo-1594479379002-0844e1812340?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Track Your Orders",
      description:
        "Stay updated with live tracking of your orders right from dispatch to delivery.",
      image:
        "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Customer Support",
      description:
        "24/7 dedicated support team to resolve your queries and ensure a smooth shopping experience.",
      image:
        "https://plus.unsplash.com/premium_photo-1661434914660-c68d9fd54753?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // A function to make an API GET call to fetch user data.
  const getusers = () => {
    // `axios.get` uses the custom instance to make a GET request to the `/users` endpoint.
    axios
      .get("/users")
      .then((users) => {
        // Logs the fetched user data.
        console.log(users);
      })
  }

  // `first` and `second` are state variables used to demonstrate component re-renders.
  const [first, setfirst] = useState("This is normal data");
  const [second, setsecond] = useState("This is big data");

  // `useEffect` hook to perform side effects based on a dependency array.
  useEffect(() => {
    // This function is called every time the effect runs.
    getusers();
    console.log("Services Component is Created");

    // The return statement is an optional cleanup function that runs when the component is unmounted or before the effect runs again.
    return () => {
      console.log("Services Component is Removed");
    }

  }, [second]); // The dependency array `[second]` means this effect will only re-run when the value of the `second` state variable changes.
  // If [] is used then No re-render, updation will take place only once when component is created
  // If [first] is used then re-render, updation will take place only when 'first' state is changed
  // If [second] is used then re-render, updation will take place only when 'second' state is changed
  // If [first, second] is used then re-render, updation will take place when either 'first' or 'second' state is changed
  // If no dependency array is used then re-render, updation will take place on every state change in the component

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-pink-600 mt-20 mb-10">Our Services</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {/* The `map` function iterates over the `services` array to render each service item. */}
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="font-bold text-lg text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 p-5 bg-white rounded-lg shadow-md w-full max-w-2xl flex justify-between gap-10">
        <div>
          {/* Displays the current value of the `first` state variable. */}
          <h1 className="text-2xl font-semibold mb-4">{first}</h1>
          {/* The `onClick` handler calls `setfirst` to update the `first` state, triggering a re-render. */}
          <button onClick={() => setfirst("Normal data has been changed")} className="bg-blue-500 px-3 py-1 rounded-md text-xl font-semibold text-white">
            Change Normal Data
          </button>
        </div>

        <div>
          {/* Displays the current value of the `second` state variable. */}
          <h1 className="text-2xl font-semibold mb-4">{second}</h1>
          {/* The `onClick` handler calls `setsecond` to update the `second` state, triggering a re-render. */}
          <button onClick={() => setsecond("Big data has been changed")} className="bg-blue-500 px-3 py-1 rounded-md text-xl font-semibold text-white">
            Change Big Data
          </button>
        </div>
      </div>

    </div>
  );
};

export default Service