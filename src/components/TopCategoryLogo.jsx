import { productLogo } from "../assets/assets"



const TopCategoryLogo = () => {
  return (
    <div className="mt-5 mb-5">
      <h1 className="font-bold text-2xl">Featured Top Category</h1>

<div className="flex gap-5 mt-5 ">
{
        productLogo.map((item,index)=>(
            <div key={index}>

                <img src={item.image} alt="" className="border border-emerald-200 rounded-2xl px-4 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"/>
                <p className="mt-2 text-center font-medium">{item.name}</p>

            </div>
        ))
      }
</div>
      
    </div>
  )
}

export default TopCategoryLogo
