// This component provides an overview of the project's data flow using the Context API.
import React from 'react';
// It imports the userContext to access the global state, but it is commented out since the context isn't used directly to render anything on this page, only to provide the theoretical explanation.
// import { userContext } from '../utils/Context';

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About this Project's Data Flow</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">

        <p className="mb-4">
          This project demonstrates a fundamental data flow in a React application using the **Context API** and **React Router**. We've set up a way to manage and display user data across different pages without having to pass it through every single component as a prop [cite: Context.jsx].
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How the Data Moves</h2>

        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-blue-50">
            <h3 className="text-xl font-medium mb-1">1. The Data Source: <code className="bg-gray-200 p-1 rounded">Context.jsx</code></h3>
            <p>
              The journey begins here. The <code className="bg-gray-200 p-1 rounded">Context.jsx</code> file is the central hub for our data [cite: Context.jsx]. It creates a **global state** using the <code className="bg-gray-200 p-1 rounded">useState</code> hook, storing a hardcoded array of user objects [cite: Context.jsx]. It then creates a Context provider, which wraps the entire application and makes this user data accessible to any component that needs it [cite: Context.jsx].
            </p>
          </div>

          <div className="p-4 rounded-lg bg-green-50">
            <h3 className="text-xl font-medium mb-1">2. Listing Users: <code className="bg-gray-200 p-1 rounded">User.jsx</code></h3>
            <p>
              The <code className="bg-gray-200 p-1 rounded">User.jsx</code> component needs to display this user data. It doesn't receive any props. Instead, it "consumes" the global state by using the <code className="bg-gray-200 p-1 rounded">useContext</code> hook to access the <code className="bg-gray-200 p-1 rounded">users</code> array from the <code className="bg-gray-200 p-1 rounded">userContext</code> [cite: User.jsx]. It then iterates over this <code className="bg-gray-200 p-1 rounded">users</code> array using the <code className="bg-gray-200 p-1 rounded">map</code> method to create a list of links, one for each user [cite: User.jsx].
            </p>
          </div>

          <div className="p-4 rounded-lg bg-purple-50">
            <h3 className="text-xl font-medium mb-1">3. Displaying a Single User: <code className="bg-gray-200 p-1 rounded">Userdetail.jsx</code></h3>
            <p>
              When you click on a user's link, React Router navigates to this component. The <code className="bg-gray-200 p-1 rounded">useParams</code> hook extracts the unique <code className="bg-gray-200 p-1 rounded">id</code> from the URL [cite: Userdetail.jsx]. The component also uses the <code className="bg-gray-200 p-1 rounded">useContext</code> hook to get the full list of users and then uses the <code className="bg-gray-200 p-1 rounded">find</code> method to locate the specific user object whose <code className="bg-gray-200 p-1 rounded">id</code> matches the one from the URL [cite: Userdetail.jsx].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;