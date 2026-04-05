import React from 'react'
import { assets, featureProduct } from '../assets/assets'

const FeatureCard = () => {
  return (
    <div className='grid grid-cols-5 gap-5 mt-5 '>
      {
        featureProduct.map((item,index)=>(
            <div key={index} className='shadow-md p-2'>
               <div className='relative'>
                 <img src={item.image} alt=""  className='shadow-2xl rounded-b-2xl'/>

                  <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-100"><img src={assets.wish_icon} alt="" className='w-8'/></div>
               </div>
               
               <div className='p-4'>
                 <h1 className='text-2xl font-mono font-medium mt-2 mb-2'>{item.name}</h1>
                 <p className='font-semibold mb-2'>৳ {item.price}</p>
                 <p className='text-fuchsia-600'>{item.rating}</p>
               </div>
               
               <button className='w-full rounded-t-xl px-6 py-3 bg-emerald-500 text-white text-xl font-sans font-medium hover:bg-emerald-600 cursor-pointer'>Add to Cart 🛒</button>
            </div>
        ))
      }
    </div>
  )
}

export default FeatureCard

