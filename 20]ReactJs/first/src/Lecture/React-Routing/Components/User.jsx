import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1 */}
        <Link to="/user/prince" className="max-w-md w-full bg-white rounded-xl shadow-lg p-4 flex items-center gap-6">
          <img
            src="https://i.pinimg.com/736x/95/58/47/9558470ee52b290c805cc5f676232ca8.jpg"
            alt="Prince Chouhan"
            className="w-20 h-20 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Prince Chouhan</h2>
            <p className="text-gray-600">Full Stack Developer | AI Enthusiast</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/user/ronak" className="max-w-md w-full bg-white rounded-xl shadow-lg p-4 flex items-center gap-6">
          <img
            src="https://i.pinimg.com/736x/83/82/4e/83824ef419400e49b640d62733c3b67d.jpg"
            alt="Ronak"
            className="w-20 h-20 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Ronak</h2>
            <p className="text-gray-600">Frontend Developer | UI/UX Designer</p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/user/abhinav" className="max-w-md w-full bg-white rounded-xl shadow-lg p-4 flex items-center gap-6">
          <img
            src="https://i.pinimg.com/736x/45/8d/93/458d93070708ddb453141a96ded00806.jpg"
            alt="Abhinav"
            className="w-20 h-20 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Abhinav</h2>
            <p className="text-gray-600">Backend Developer | Cloud Enthusiast</p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to="/user/aryan" className="max-w-md w-full bg-white rounded-xl shadow-lg p-4 flex items-center gap-6">
          <img
            src="https://i.pinimg.com/736x/34/f8/8e/34f88edcf609639f50a96b307045efd5.jpg"
            alt="Aryan"
            className="w-20 h-20 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Aryan</h2>
            <p className="text-gray-600">Data Scientist | ML Researcher</p>
          </div>
        </Link  >

      </div>

      <hr />
      <Outlet/>
    </div>
  );
};

export default User;
