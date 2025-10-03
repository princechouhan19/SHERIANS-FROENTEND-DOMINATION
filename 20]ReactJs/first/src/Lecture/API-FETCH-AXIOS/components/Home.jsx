import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // `useNavigate` is a hook from React Router that returns a function to navigate programmatically.
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-8">Myntra</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Discover the best products at unbeatable prices.  
        Shop now and upgrade your style!
      </p>
      {/* The onClick handler uses the `Maps` function to redirect the user to the '/show' route. */}
      <button
        onClick={() => navigate("/show")}
        className="px-8 py-4 bg-pink-600 text-white font-semibold text-lg rounded-lg shadow hover:bg-pink-700 transition"
      >
        🛍️ Buy Products
      </button>
    </div>
  );
};

export default Home