import { assets, groupLogo } from "../assets/assets";

const SecondNavbar = () => {
  return (
    <div className="bg-green-400 w-full rounded-bl-4xl rounded-br-4xl">

    
    <div className="container mx-auto flex items-center justify-between py-4 mt-5">
      
      <div className="relative">
        <h1 className="text-2xl font-bold text-red-700">Green <span className="text-white text-4xl">Store</span></h1>
      </div>

      {/* Make this flex */}
      <div className="flex items-center gap-4">
        {
          groupLogo.map((item, index) => (
            <div key={index} className="flex items-center">
              <p className="flex items-center text-white font-medium">
                <img src={item.image} alt="group-logo" className="w-10 text-white " />
                <span className="ml-2 mr-4"> {item.name}</span>
               
              </p>
            </div>
          ))
        }
      </div>

      <div className="flex gap-4">
        <div className="relative">
            <img src={assets.wish_icon}  alt="" className="w-10 border rounded-full p-2 bg-white"/>  
            <sup className="absolute -top-1 -right-1 bg-red-800 text-white text-xs px-1.5 rounded-full">3</sup>
        </div>
        <div className="relative">
            <img src={assets.cart_icon} alt="" className="w-10 border rounded-full p-2 bg-white"/>
            <sup className="absolute -top-1 -right-1 bg-red-800 text-white text-xs px-1.5 rounded-full">6</sup>
        </div>
        
      </div>

    </div>
    </div>
  );
};

export default SecondNavbar;