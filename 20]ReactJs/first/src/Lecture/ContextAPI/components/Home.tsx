import React from 'react';

const Home = () => {
  return (

    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Notes on Context API</h2>

        <p className="mb-4">
          In this application, the Context API is used to manage the global state of the user list.
          This state is created and provided by the <code className="bg-gray-200 p-1 rounded">Context.jsx</code> file.
        </p>

        <h3 className="text-xl font-medium mb-2">How it works:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Creation: A Context object named <code className="bg-gray-200 p-1 rounded">userContext</code> is created using <code className="bg-gray-200 p-1 rounded">createContext()</code>.
          </li>
          <li>
            Providing the state: The <code className="bg-gray-200 p-1 rounded">Context</code> component (the provider) holds the state, which is an array of users. It wraps the entire application in <code className="bg-gray-200 p-1 rounded">main.jsx</code> and passes the <code className="bg-gray-200 p-1 rounded">users</code> state and the <code className="bg-gray-200 p-1 rounded">setUsers</code> function to all its children through the <code className="bg-gray-200 p-1 rounded">value</code> prop.
          </li>
          <li>
            Consuming the state:** Components that need access to the global state, like <code className="bg-gray-200 p-1 rounded">User.jsx</code> and <code className="bg-gray-200 p-1 rounded">Userdetail.jsx</code>, use the <code className="bg-gray-200 p-1 rounded">useContext</code> hook to read the data from <code className="bg-gray-200 p-1 rounded">userContext</code>.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home