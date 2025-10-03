import React, { useContext } from 'react';
import { ProductContext } from '../Utils/Context';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const { products } = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <nav className="fixed left-0 top-0 h-screen w-[18%] bg-white shadow-md flex flex-col justify-between">
      <div className="p-6">
        <a
          href="/create"
          className="block w-full text-center bg-blue-600 text-white font-medium text-lg py-2 rounded-md transition transform hover:scale-101"
        >
          + Add New Product
        </a>

        <hr className="my-6 border-gray-300" />

        <h1 className="text-xl font-semibold text-gray-700 mb-4">
          Category Filter
        </h1>

        <div className="space-y-3 text-gray-600 flex flex-col ">
          <Link to="/" className="cursor-pointer hover:text-blue-600 transition">
            All Products
          </Link>
          
          {distinct_category.map((c, i) => (
            <Link 
              key={i} 
              to={`/?category=${c}`} 
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-gray-200">
        <button className="w-full text-gray-600 hover:text-blue-600 transition">
          Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;