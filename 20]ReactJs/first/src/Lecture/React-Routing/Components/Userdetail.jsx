import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

const Userdetail = () => {
  const users = {
    prince: {
      name: "Prince Chouhan",
      role: "Full Stack Developer | AI Enthusiast",
      bio: "Prince is a B.Tech CSE student passionate about building scalable web applications and exploring the frontiers of artificial intelligence and machine learning. He is a hands-on developer who loves turning complex problems into elegant solutions.",
      image: "https://i.pinimg.com/736x/95/58/47/9558470ee52b290c805cc5f676232ca8.jpg"
    },
    ronak: {
      name: "Ronak",
      role: "Frontend Developer | UI/UX Designer",
      bio: "Ronak specializes in creating visually stunning and highly interactive user interfaces. With a keen eye for design and a mastery of modern frontend frameworks, he builds seamless and intuitive user experiences.",
      image: "https://i.pinimg.com/736x/83/82/4e/83824ef419400e49b640d62733c3b67d.jpg"
    },
    abhinav: {
      name: "Abhinav",
      role: "Backend Developer | Cloud Enthusiast",
      bio: "Abhinav is a backend wizard with a strong focus on building robust and efficient server-side applications. He has a passion for cloud computing and a deep understanding of database management and API design.",
      image: "https://i.pinimg.com/736x/45/8d/93/458d93070708ddb453141a96ded00806.jpg"
    },
    aryan: {
      name: "Aryan",
      role: "Data Scientist | ML Researcher",
      bio: "Aryan is a data scientist with a knack for uncovering insights from complex datasets. His expertise lies in machine learning, data visualization, and building predictive models to solve real-world problems.",
      image: "https://i.pinimg.com/736x/34/f8/8e/34f88edcf609639f50a96b307045efd5.jpg"
    }
  };

  const { name } = useParams();
  const user = users[name];
  const navigate = useNavigate();

  const GoBackHandler = () => {
    // navigate("/user");
    navigate(-1); // This will take the user back to the previous page    
  };

if (!user) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">User not found!</h1>
      <img
        src="https://i.pinimg.com/736x/ba/5e/7e/ba5e7e62383c4d387a363bd1a0322339.jpg"
        alt="User not found meme"
        className="w-100 h-100 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-center mb-6">The user you are looking for does not exist.</p>
      <Link to="/user" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
        Go Back to Users
      </Link>
    </div>
  );
}

  return (
    <div className="min-h-screen flex items-center justify-center  text-white p-6">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        {/* Profile Image Section */}
        <div className="md:flex-shrink-0 flex items-center justify-center p-6">
          <img
            src={user.image}
            alt={user.name}
            className="w-48 h-90 rounded-md shadow-lg border-4 border-purple-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 text-center md:text-left">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.role}</div>
          <h1 className="mt-1 text-4xl leading-tight font-extrabold text-gray-900">{user.name}</h1>
          <p className="mt-4 text-gray-600">{user.bio}</p>
          <div className="mt-6">
            <button onClick={GoBackHandler} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdetail;