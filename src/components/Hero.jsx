import { assets } from "../assets/assets"


const Hero = () => {
  return (
    <div className="flex justify-between mt-5 bg-fuchsia-700 rounded-2xl">
        {/* left content */}
      <div className="mt-15 px-15 ">

        <p className="text-white font-mono font-medium">WELCOME TO GREEN STORE</p>
        <p className="text-white text-[45px] mt-2 font-mono font-bold">STAY HOME & <br /> DELIVERED YOUR DAILY <br /> NEEDS</p>
        <p className="text-white mt-6 font-mono font-medium text-2xl ">Vegetables contain many vitamins and <br /> minerals that are good for our health.</p>
        <div className="mt-20">
           <button className=" border bg-white text-black font-bold px-8 py-4 rounded-full cursor-pointer transition duration-200 hover:scale-105">Shop now ➜</button>
        </div>
         
      </div>
      {/* right content */}
      <div>
          <img src={assets.hero_img} alt="" className="w-150 mt-5 text-end bottom-0"/>
      </div>
    </div>
  )
}

export default Hero
