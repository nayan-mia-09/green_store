import { assets, topRatedProduct } from "../assets/assets"


const TopRatedProduct = () => {
  return (
    <div>
        <div className="bg-black px-4 py-8 rounded-2xl mb-2">
           <h1 className="text-2xl font-bold text-white">Top Rated Product</h1>
           <p className="text-sm font-semibold text-white mt-5">25 Products</p>
        </div>
       
   
    <div className="flex justify-between">
      <div className="">
        {
            topRatedProduct.map((item,index)=>(
                <div key={index} className="bg-white p-4 rounded-xl shadow flex items-center gap-4 mb-5">
                    <div className="flex justify-between gap-8">
                        <div className="p-4 shadow-2xl rounded-2xl">
                            <img src={item.image} alt="" className="w-20 h-20 object-cover bg-gray-400"/>
                        </div>
                        <div>
                            <p className="text-2xl font-bold mb-1">{item.name}</p>
                            <p className="text-sm font-semibold mb-1 text-amber-400"> {item.rating}</p>
                            <p className="text-emerald-400 text-lg">৳{item.price}</p>
                        </div>
                        <div className="text-end">
                            <img src={assets.wish_icon} alt="" className="w-5 ms-20 mb-10"/>
                            <button className='gap-5 w-full bg-emerald-500 text-white font-sans px-4 py-2 rounded-full hover:bg-emerald-600 cursor-pointer flex items-center justify-between'>
               <span>Add to Cart</span>
               <span className="bg-white text-black rounded-full p-1">🛒</span>
                     </button>
                        </div>
                    </div>
                   
                </div>
            ))
        }
      </div>
      <div className="bg-white w-72 py-10 rounded-xl shadow p-4 flex flex-col justify-between h-full">
  
  <div className="flex flex-col items-center text-center">
    <img src={assets.mid_hero_img2} alt="" className="w-48 mb-3" />

    <p className="text-xl font-bold mb-1">Soft Drink Combo</p>
    <p className="text-emerald-500 text-lg mb-1">৳1280</p>
    <p className="text-sm font-semibold text-amber-400 mb-3">★★★★★</p>
  </div>

  <button className="w-full bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition flex items-center justify-between">
    <span>Add to Cart</span>
    <span className="bg-white text-black rounded-full p-1">🛒</span>
  </button>

</div>

      <div className="">
        {
            topRatedProduct.map((item,index)=>(
                <div key={index} className="bg-white p-4 rounded-xl shadow flex items-center gap-4 mb-5">
                    <div className="flex justify-between gap-8">
                        <div className="p-4 shadow-2xl rounded-2xl">
                            <img src={item.image} alt="" className="w-20 h-20 object-cover bg-gray-400"/>
                        </div>
                        <div>
                            <p className="text-2xl font-bold mb-1">{item.name}</p>
                            <p className="text-sm font-semibold mb-1 text-amber-400"> {item.rating}</p>
                            <p className="text-emerald-400 text-lg">৳{item.price}</p>
                        </div>
                        <div className="text-end">
                            <img src={assets.wish_icon} alt="" className="w-5 ms-20 mb-10"/>
                            <button className='gap-5 w-full bg-emerald-500 text-white font-sans px-4 py-2 rounded-full hover:bg-emerald-600 cursor-pointer flex items-center justify-between'>
               <span>Add to Cart</span>
               <span className="bg-white text-black rounded-full p-1">🛒</span>
                     </button>
                        </div>
                    </div>
                   
                </div>
            ))
        }
      </div>
    </div>
     </div>
  )
}

export default TopRatedProduct
