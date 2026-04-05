import { assets, midHeroProduct } from "../assets/assets"


const MidHero = () => {
  return (
    <div className="bg-emerald-400 mt-10 mb-5 p-6">
        
      <div className="flex justify-between gap-3 ">

        <div className=" rounded-2xl w-150 h-150 bg-white p-5">
            <img src={assets.mid_hero_img1} alt="" />
            </div>

      <div className="rounded-2xl w-150 h-150 bg-white flex items-center justify-center">
  <div className="text-center">
    <button className="px-8 py-2 bg-fuchsia-600 rounded-full text-white mb-3">Buy Now</button>
    <h1 className="text-5xl font-mono font-bold mb-3">Summer Sale</h1>
    <p className="text-lg mb-3">
      Hurry and Get Discover on all <br /> Device UP to 30% Off
    </p>

    <div className="flex justify-around mb-3 gap-3">
      <span className="border-4 border-emerald-400 px-2 py-6 rounded-full">20 Day</span>
      <span className="border-4 border-emerald-400 px-2 py-6 rounded-full">5 Hours</span>
      <span className="border-4 border-emerald-400 px-2 py-6 rounded-full">40 Min</span>
      <span className="border-4 border-emerald-400 px-2 py-6 rounded-full">35 Sec</span>
    </div>

    <button className="px-8 py-4 bg-emerald-400 rounded-full text-white mt-3">
      Shop Now ➜
    </button>
  </div>
</div>
        <div className=" rounded-2xl w-150 h-150 bg-white"><img src={assets.mid_hero_img2} alt="" /></div>
      </div>

     <div className="bg-white grid grid-cols-4 gap-3 mt-4 rounded-2xl">
  {
    midHeroProduct.map((item, index) => (
      <div key={index} className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
        
        {/* Left side (image) */}
        <img src={item.image} alt="" className="w-20 h-20 object-cover" />

        {/* Right side (text) */}
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-yellow-500">{item.rating}</p>
          <p className="text-emerald-500 font-bold">৳{item.price}</p>
        </div>

      </div>
    ))
  }
</div>
    </div>
  )
}

export default MidHero
