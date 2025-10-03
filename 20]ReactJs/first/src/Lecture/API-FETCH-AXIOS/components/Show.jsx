import React, { useEffect, useState } from "react";
// Imports the pre-configured Axios instance from the utils folder.
import axios from "../utils/Axios";

const Show = () => {
  // `products` is the state variable to store the data fetched from the API.
  // `setProducts` is the function used to update the `products` state.
  const [products, setProducts] = useState([]);

  // This function is responsible for making an API GET request to fetch products.
  const getProducts = () => {
    // `axios.get` sends a GET request to the '/products' endpoint.
    axios
      .get("/products")
      .then((res) => {
        // Upon a successful response, the fetched data is used to update the `products` state.
        setProducts(res.data);
      })
      .catch((err) => {
        // Catches and logs any errors that occur during the API call.
        console.log(err);
      });
  };

  // This function is responsible for making an API POST request to add a new product.
  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";
    // `axios.post` sends a POST request with the new product data.
    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => {
        // Logs the response data from the server, which confirms the product was added.
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // `useEffect` hook is used to perform side effects. In this case, fetching data.
  useEffect(() => {
    // The `getProducts` function is called when the component is created.
    getProducts();
  }, []); // The empty dependency array `[]` ensures this effect runs only once when the component mounts.

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pt-30 items-center py-10 px-4">


      {/* This is a conditional rendering. It checks if the `products` array has any items. */}
      {products.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center w-full max-w-7xl">
          {/* The `map` function iterates through the `products` array to render a block of JSX for each product. */}
          {products.map((p, i) => (
            <div
              key={i}
              className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex-shrink-0"
            >
              <img
                className="w-full h-56 object-cover"
                src={p.image}
                alt="Product"
              />
              <div className="p-5">
                <h2 className="font-bold text-lg mb-2 truncate">{p.title}</h2>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {p.description}
                </p>
                <p className="text-sm text-gray-500">Category: {p.category}</p>
                <p className="text-xl font-semibold text-blue-600 mt-3">
                  ${p.price}
                </p>
              </div>
              <div className="p-5 pt-0">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // This is the fallback UI that is displayed if there are no products.
        <h1 className="text-2xl font-semibold text-gray-700">
          No Products Available
        </h1>
      )}
    </div>
  );
};

export default Show