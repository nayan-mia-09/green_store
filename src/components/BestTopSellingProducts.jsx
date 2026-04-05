import { assets, bestSellingProduct } from "../assets/assets"


const BestTopSellingProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-3">

        

       <div>
       
        <div className="bg-black px-4 py-8 rounded-2xl">
           <h1 className="text-2xl font-bold text-white">Top Selling Product</h1>
           <p className="text-sm font-semibold text-white mt-5">25 Products</p>
        </div>
     {
  bestSellingProduct.map((item, index) => (
    <div key={index} className="relative bg-gray-100 mt-5 shadow rounded-2xl p-4 mr-2 mb-3">

      {/* ❤️ Wishlist Icon (Top Right) */}
      <img 
        src={assets.wish_icon} 
        alt="" 
        className="w-5 absolute top-3 right-3 cursor-pointer hover:scale-110 transition"
      />

      <div className="flex gap-5 items-center">
        <img 
          src={item.image} 
          alt="" 
          className="w-20 h-20 object-cover bg-gray-400 p-2 rounded-2xl"
        />

        <div>
          <p className="text-2xl font-bold mb-1">{item.name}</p>
          <p className="text-sm font-semibold mb-1 text-amber-400">{item.rating}</p>
          <p className="text-emerald-400 text-lg">৳{item.price}</p>
        </div>
      </div>

      {/* 🛒 Button (Bottom Right) */}
      <button className="absolute bottom-3 right-3 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition flex items-center gap-2">
        <span>Add to Cart</span>
        <span className="bg-white text-black rounded-full p-1">🛒</span>
      </button>

    </div>
  ))
}

       </div>

         <div>
        
        <div className="bg-black px-4 py-8 rounded-2xl">
           <h1 className="text-2xl font-bold text-white">Best Selling Product</h1>
           <p className="text-sm font-semibold text-white mt-5">25 Products</p>
        </div>
       {
  bestSellingProduct.map((item, index) => (
    <div key={index} className="relative bg-gray-100 mt-5 shadow rounded-2xl p-4 mr-2 mb-3">

      {/* ❤️ Wishlist Icon (Top Right) */}
      <img 
        src={assets.wish_icon} 
        alt="" 
        className="w-5 absolute top-3 right-3 cursor-pointer hover:scale-110 transition"
      />

      <div className="flex gap-5 items-center">
        <img 
          src={item.image} 
          alt="" 
          className="w-20 h-20 object-cover bg-gray-400 p-2 rounded-2xl"
        />

        <div>
          <p className="text-2xl font-bold mb-1">{item.name}</p>
          <p className="text-sm font-semibold mb-1 text-amber-400">{item.rating}</p>
          <p className="text-emerald-400 text-lg">৳{item.price}</p>
        </div>
      </div>

      {/* 🛒 Button (Bottom Right) */}
      <button className="absolute bottom-3 right-3 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition flex items-center gap-2">
        <span>Add to Cart</span>
        <span className="bg-white text-black rounded-full p-1">🛒</span>
      </button>

    </div>
  ))
}
       </div>

       
       
      
    </div>
  )
}

export default BestTopSellingProducts

