import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../Utils/Context'
import Loading from './Loading'
import axios from '../Utils/Axios'

const Home = () => {

  const { products } = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts , setfilteredProducts] = useState(null);

  const getproductscategory = async() =>{
    try{
      const {data} = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    }catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if (!filteredProducts || category) setfilteredProducts(products);
    if (category != "undefined") {
      // getproductscategory()
      setfilteredProducts(products.filter((p) => p.category === category));
    };
  },[category , products])

  return products && products.length > 0 ? (
    <div className='bg-zinc-100 flex-grow ml-[18%] p-8'>
      <div className="flex flex-wrap overflow-x-hidden overflow-y-auto gap-6 justify-center mt-14 items-center w-full">

        {filteredProducts && filteredProducts.map((p) => (

          <Link key={p.id} to={`/details/${p.id}`} className="card bg-white rounded-xl w-[22vw] shadow-lg overflow-hidden hover:shadow-xl transition flex-shrink-0">

          <img className="w-full h-70 object-fit" src={p.image} alt={p.title}/>

          <div className="p-5">
            <h2 className="font-bold text-lg mb-2 truncate">{p.title}</h2>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {p.description}
            </p>
            <p className="text-sm text-gray-500">Category: {p.category}</p>
            <p className="text-xl font-semibold text-blue-600 mt-3">${p.price}</p>
          </div>

          <div className="p-5 pt-0">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition">🛒 Add to Cart </button>
          </div>

        </Link>
        ))};

      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default Home