import React, { useContext, useMemo } from 'react';
import { userContext } from '../utils/Context';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  // useParams is a React Router hook that extracts parameters from the URL.
  // The 'id' variable holds the value from the '/User/:id' route, e.g., '3'.
  const { id } = useParams();
  // useContext accesses the 'users' array from the global state provided by Context.jsx.
  const { users } = useContext(userContext);

  // useMemo is a React Hook that memoizes a function's result.
  // It recalculates the 'user' object only when 'users' or 'id' changes, optimizing performance.
  const user = useMemo(() => {
    if (!users || !id) return null;
    // The .find() method iterates through the 'users' array to find the first user whose 'id' matches the URL parameter.
    // Number() is used to ensure a correct comparison between the string 'id' from the URL and the number 'id' in the data.
    return users.find(u => Number(u.id) === Number(id));
  }, [users, id]); // The dependency array ensures this function reruns when these values change.

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>

      <div className="w-full max-w-md flex flex-col items-center bg-white rounded-2xl shadow p-6 text-center">
        {/* Displays the first letter of the user's name. It accesses the 'user' object found above. */}
        <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
          {String(user.name || '').charAt(0).toUpperCase()}
        </div>

        {/* These elements display the user's details, accessing properties from the 'user' object. */}
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="mt-2 font-medium">{user.title}</p>
        <p className="mt-2 text-gray-500 text-sm leading-relaxed">{user.description}</p>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          Connect
        </button>
      </div>
    </div>
  );
};

export default UserDetail;