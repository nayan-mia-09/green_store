import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaYoutube } from "react-icons/fa"



const Navbar = () => {
  return (
    <div className="flex justify-between mt-5">

      <div >
        <ul className="flex gap-4 text-lg text-gray-700">
            <li className="font-bold">Home</li>
            <li>Brands</li>
            <li>Products</li>
            <li>Track Order</li>
        </ul>
      </div>

       <div className="flex w-100 bg-gray-100 border border-gray-100 rounded-full overflow-hidden">
      
      {/* Full Height Green Icon */}
      <button className="bg-green-500 p-3 flex items-center justify-center rounded-full">
        <FaSearch className="text-white" />
      </button>

      {/* Input */}
      <input
        type="text"
        placeholder="Search Products"
        className="w-full px-5 py-2 outline-none border-none"
      />

      

    </div>

      <div className="flex gap-4 text-green-700 text-xl hover:cursor-pointer">
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedin/>
        <FaYoutube/>
      </div>
    </div>
  )
}

export default Navbar
