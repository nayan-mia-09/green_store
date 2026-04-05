import { brands_logo } from "../assets/assets"


const TopBrands = () => {
  return (
    <div className="mt-10 shadow-xl p-2 mb-5 ">
      <div className="flex justify-between">
        <h1 className="text-2xl font-mono font-bold">Shop Your Favorite Brand</h1>
        <p className="text-emerald-400">See All ➜</p>
      </div>

       <div className="grid grid-cols-7 mt-5 gap-8 items-center">
       {
        brands_logo.map((item,index)=>(
            <div key={index} className="bg-gray-100 rounded-sm">
                 <img src={item} alt="" className="w-40 px-6 "/>
            </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default TopBrands
