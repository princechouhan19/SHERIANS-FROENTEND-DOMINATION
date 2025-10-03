import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../utils/Context';

const User = () => {
    // useContext is a React Hook that allows this component to subscribe to the Context.
    // It reads the value from 'userContext' and returns the 'users' array, making the global state accessible.
    const { users } = useContext(userContext);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">User List</h1>
            <div className="w-full max-w-2xl flex flex-col gap-4">
                {/* Maps over the 'users' array from the Context to create a link for each user. */}
                {users.map(user => (
                    // The Link component navigates to the dynamic route defined in App.jsx.
                    // The 'to' prop uses a template literal to construct the URL, e.g., '/user/1'.
                    <Link
                        key={user.id} 
                        to={`/user/${user.id}`} 
                        className="px-10 py-3 rounded-full bg-white/20 backdrop-blur-lg shadow-lg z-50 hover:shadow-xl transition-shadow duration-300 transform hover:scale-101"
                    >
                        <span className="text-lg font-medium text-blue-600">
                            {/* Displays the user's name from the 'user' object received from the Context. */}
                            {user.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default User;