import React, { useContext, useState } from 'react';
import { ProductContext } from '../Utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const {products , setProducts} = useContext(ProductContext); 
    const navigate = useNavigate();

    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const newProduct = {
            id:nanoid(),
            title,
            image,
            category, 
            price: Number(price),
            description,
        };
        
        // Check if products is null before spreading
        setProducts(
            products ? [...products, newProduct] : [newProduct]
        );
        localStorage.setItem("products", JSON.stringify([...products, newProduct]));
        toast.success("Product added successfully!");
        navigate("/"); 
    };

    // --- Consistent Tailwind UI Classes ---
    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition shadow-sm";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
    const inputGroupClasses = "mb-4 w-full";

    return (

        <div className='flex-grow ml-[18%] p-10 flex justify-center items-start min-h-screen bg-zinc-100'>
            <form
                onSubmit={handleFormSubmit}
                className='bg-white p-8 rounded-xl shadow-2xl w-full max-w-3xl space-y-6 transition hover:shadow-xl'
            >
                <h1 className='text-3xl font-bold text-gray-800 text-center mb-6 border-b pb-4'>
                    Add New Product
                </h1>

                <div className={inputGroupClasses}>
                    <label htmlFor="title" className={labelClasses}>Product Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder='e.g., Slim Fit T-Shirt'
                        className={inputClasses}
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                        required
                    />
                </div>

                <div className={inputGroupClasses}>
                    <label htmlFor="image" className={labelClasses}>Image URL</label>
                    <input
                        id="image"
                        type="url"
                        placeholder='https://image.link/to/product.jpg'
                        className={inputClasses}
                        onChange={(e) => setimage(e.target.value)}
                        value={image}
                        required
                    />
                </div>

                <div className='flex gap-4 flex-col sm:flex-row'>

                    <div className={inputGroupClasses}>
                        <label htmlFor="category" className={labelClasses}>Category</label>
                        <input
                            id="category"
                            type="text"
                            placeholder="e.g., Men's Clothing"
                            className={inputClasses}
                            onChange={(e) => setcategory(e.target.value)}
                            value={category}
                            required
                        />
                    </div>

                    <div className={inputGroupClasses}>
                        <label htmlFor="price" className={labelClasses}>Price ($)</label>
                        <input
                            id="price"
                            type="number"
                            placeholder='e.g., 29.99'
                            className={inputClasses}
                            onChange={(e) => setprice(e.target.value)}
                            value={price}
                            step="1"
                            min="0"
                            required
                        />
                    </div>
                </div>

                <div className={inputGroupClasses}>
                    <label htmlFor="description" className={labelClasses}>Product Description</label>
                    <textarea
                        id="description"
                        placeholder='A detailed description of the product...'
                        className={`${inputClasses} min-h-[150px] resize-none`}
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-lg transition transform hover:scale-[1.01] shadow-md'
                >
                    Create Product
                </button>
            </form>
        </div>
    )
}

export default Create