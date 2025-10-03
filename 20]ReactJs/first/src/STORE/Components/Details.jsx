import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Utils/Context'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../Utils/Axios';
import Loading from './Loading';
import { toast } from 'react-toastify';

const Details = () => {
  const navigate = useNavigate();
  const {products , setProducts } = useContext(ProductContext);
  const [product , setProduct] = useState(null);
  const { id } = useParams();

  // const getsingleproduct = async () => {
  //   try {
  //     const { data } = await axios(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.error("Error fetching single product:", error);
  //   }
  // }

  useEffect(() => {
    if (products && id) {
      // Find the specific product by matching the string id from the URL params
      const foundProduct = products.find(p => String(p.id) === id);
      setProduct(foundProduct);
    }
    // Note: products and id should be in the dependency array for this logic
  }, [products, id]);

  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter((p) => p.id !== id);
    setProducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts)); 
    navigate("/");
  }

  return ( product ?
    <div className='w-full min-h-screen bg-zinc-100 flex-grow ml-[18%] p-8 flex justify-center items-center'>
      <div className='detail-card bg-white rounded-xl w-full max-w-4xl shadow-lg hover:shadow-xl transition flex flex-col md:flex-row gap-6 p-6'>

        <div className="md:w-1/2 w-full flex-shrink-0 flex flex-col gap-4">
          <img src={product.image}
            alt="Product Title"
            className="w-full h-full object-fit rounded-lg"
          />
        </div>

        <div className='md:w-1/2 w-full flex flex-col justify-between p-4'>
          <div>
            <h1 className='text-3xl font-bold mb-2 text-gray-800'>{product.title}</h1>
            <p className='text-lg mb-4 text-gray-600 line-clamp-6'>{product.description}</p>
            <p className='text-sm text-gray-500 mb-2'>Category: <span className="font-semibold">{product.category}</span></p>
            <p className='text-4xl font-extrabold text-blue-600 mt-4'>${product.price}</p>
          </div>
          <div className='buttons flex justify-center gap-4'>
            <Link to={`/edit/${product.id}`} className='w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-4 rounded-lg transition mt-12'>
              Edit
            </Link>
            <button onClick={() => {
              ProductDeleteHandler(product.id);
              toast.success("Product deleted successfully!");
            }} className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-lg transition mt-12'>
              Delete
            </button>
          </div>

        </div>
      </div>
    </div> : <Loading />
  );
}

export default Details