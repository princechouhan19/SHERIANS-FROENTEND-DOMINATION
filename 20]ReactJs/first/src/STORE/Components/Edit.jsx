// fileName: Edit.jsx - FINAL WORKING CODE

import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Edit = () => {
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams(); // The ID from URL is always a STRING!
  
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
    // Add an explicit id field to hold the product ID consistently
    id: null, 
  });

  const ChangeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Populate the form state with existing product data
  useEffect(() => {
    if (products && id) {
        // Use .find for efficiency and compare the product ID (converted to string) 
        // with the URL ID (which is already a string).
        const foundProduct = products.find((p) => String(p.id) === id);
        
        if (foundProduct) {
            // Set the state, ensuring price is a string for the input and
            // explicitly storing the correct ID (whether number or nanoid string)
            setProduct({
                ...foundProduct,
                price: String(foundProduct.price) 
            });
        }
    }
  }, [id, products]);

  // Handle form submission to update the data
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 1. Create the updated product object using the current state
    const updatedProduct = {
      // FIX: Use the ID that was loaded into the state (product.id), 
      // or the URL ID 'id', as they should match now.
      id: product.id, 
      title: product.title,
      image: product.image,
      category: product.category,
      price: Number(product.price), // Convert price back to number for storage
      description: product.description,
    };
    
    // 2. Find the index of the product to update
    // FIX: The issue is likely that updatedProduct.id is a NUMBER 
    // when comparing to String(p.id). To fix this, we ensure both sides 
    // are compared as strings using the URL ID 'id'.
    const productIndex = products.findIndex((p) => String(p.id) === id);

    if (productIndex !== -1) {
        // Create a copy of the products array and replace the old product
        const updatedProducts = [...products];
        updatedProducts[productIndex] = updatedProduct;

        // Update the global state and localStorage
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        
        navigate(`/details/${id}`); 
    } else {
        // This should no longer run if the useEffect logic worked correctly
        console.error("Product to edit not found."); 
        navigate("/");
    }
    toast.success("Product updated successfully!");
  };

  // Display Loading Component while data is fetching/product is undefined
  if (!product.id) { // Check for the ID or title to confirm data loaded
      return <Loading />;
  }

  // --- Consistent Tailwind UI Classes ---
  const inputClasses =
    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition shadow-sm";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const inputGroupClasses = "mb-4 w-full";

  return (
    <div className="flex-grow ml-[18%] p-10 flex justify-center items-start min-h-screen bg-zinc-100">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-3xl space-y-6 transition hover:shadow-xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6 border-b pb-4">
          Edit Product
        </h1>

        <div className={inputGroupClasses}>
          <label htmlFor="title" className={labelClasses}>
            Product Title
          </label>
          <input
            id="title"
            name="title" 
            type="text"
            placeholder="e.g., Slim Fit T-Shirt"
            className={inputClasses}
            onChange={ChangeHandler}
            value={product.title}
            required
          />
        </div>
        {/* The rest of the inputs (image, category, price, description) are identical to the previous submission */}
        <div className={inputGroupClasses}>
          <label htmlFor="image" className={labelClasses}>
            Image URL
          </label>
          <input
            id="image"
            name="image" 
            type="url"
            placeholder="https://image.link/to/product.jpg"
            className={inputClasses}
            onChange={ChangeHandler}
            value={product.image}
            required
          />
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <div className={inputGroupClasses}>
            <label htmlFor="category" className={labelClasses}>
              Category
            </label>
            <input
              id="category"
              name="category" 
              type="text"
              placeholder="e.g., Men's Clothing"
              className={inputClasses}
              onChange={ChangeHandler}
              value={product.category}
              required
            />
          </div>

          <div className={inputGroupClasses}>
            <label htmlFor="price" className={labelClasses}>
              Price ($)
            </label>
            <input
              id="price"
              name="price" 
              type="number"
              placeholder="e.g., 29.99"
              className={inputClasses}
              onChange={ChangeHandler}
              value={product.price}
              step="1"
              min="0"
              required
            />
          </div>
        </div>

        <div className={inputGroupClasses}>
          <label htmlFor="description" className={labelClasses}>
            Product Description
          </label>
          <textarea
            id="description"
            name="description" 
            placeholder="A detailed description of the product..."
            className={`${inputClasses} min-h-[150px] resize-none`}
            onChange={ChangeHandler}
            value={product.description}
            required
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-lg transition transform hover:scale-[1.01] shadow-md"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Edit;