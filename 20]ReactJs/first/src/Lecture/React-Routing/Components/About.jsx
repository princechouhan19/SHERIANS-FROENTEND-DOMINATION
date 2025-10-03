import React from 'react' 
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6">
      <div className="max-w-4xl mt-26 mb-10 bg-white rounded-xl shadow-lg p-10 flex flex-col gap-8">
        {/* About Prince AI Card */}
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
            About Prince AI
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Prince AI is a modern AI-powered assistant built to simplify your
            daily workflow. Designed with a focus on usability and clean design,
            it brings the power of artificial intelligence to your fingertips.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you're a student, developer, or creator, Prince AI adapts to
            your needs and helps you get things done faster and smarter.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>⚡ Fast & lightweight</li>
            <li>🎨 Modern UI with TailwindCSS</li>
            <li>🤝 Built for personalization</li>
          </ul>
          <p className="text-gray-500 text-sm">
            Developed by <span className="font-semibold">Prince</span>, B.Tech CSE
            student with a passion for AI and modern software design.
          </p>
        </div>

        {/* Lecture Notes Card */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Lecture Notes: React Routing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Learn the fundamentals of routing in modern web applications using <strong>react-router-dom</strong>.
            This module covers both static and dynamic routing to build single-page applications.
          </p>
          <div className="bg-white p-4 rounded-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Concepts:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Static Routes:</strong> These are fixed paths like <code className="bg-gray-200 px-1 rounded">/about</code> or <code className="bg-gray-200 px-1 rounded">/login</code>. They always point to the same component.
              </li>
              <li>
                <strong>Dynamic Routes:</strong> These routes include a variable part, like <code className="bg-gray-200 px-1 rounded">/user/:name</code>. The <code className="bg-gray-200 px-1 rounded">:name</code> part is a parameter that can change.
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md border border-gray-200 mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Core Components:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong><code className="bg-gray-200 px-1 rounded">{'<Routes>'}</code>:</strong> A parent component that contains and manages all your individual <code className="bg-gray-200 px-1 rounded">{'<Route>'}</code> components.
              </li>
              <li>
                <strong><code className="bg-gray-200 px-1 rounded">{'<Route>'}</code>:</strong> Defines a specific path and the component that should be rendered when the path matches the URL.
              </li>
              <li>
                <strong><code className="bg-gray-200 px-1 rounded">{'<Link>'}</code>:</strong> Used to navigate between different routes without refreshing the page.
              </li>
              <li>
                <strong><code className="bg-gray-200 px-1 rounded">{'<NavLink>'}</code>:</strong> A special version of <code className="bg-gray-200 px-1 rounded">{'<Link>'}</code> that automatically adds styling to the currently active link, useful for navigation menus.
              </li>
              <li>
                <strong><code className="bg-gray-200 px-1 rounded">useParams</code>:</strong> A hook used to access the dynamic parameters from the URL, such as the <code className="bg-gray-200 px-1 rounded">name</code> in the <code className="bg-gray-200 px-1 rounded">/user/:name</code> route.
              </li>
              <li>
                <strong><code className="bg-gray-200 px-1 rounded">useNavigate</code>:</strong> A hook that lets you programmatically navigate to another route (e.g., redirecting after login).
              </li>
              <li>
                <strong><code className="bg-gray-200 px-1 rounded">{'<Outlet>'}</code>:</strong> A placeholder component used for nested routes. It renders the child route’s component inside the parent’s layout.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About