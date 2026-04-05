import { FaFacebook, FaLinkedin, FaTwitter,  FaYoutube } from "react-icons/fa"


const Footer = () => {
  return (
    <div className=" px-4 py-6 flex justify-around mt-5 bg-emerald-400 text-center items-center">
       
      <div>
        <h1 className="text-2xl font-bold text-red-700">Green <span className="text-white text-4xl">Store</span></h1>
      </div>
      <div>
        <p className="text-md font-mono">© 2026 Geen Store. All rights reserved.</p>
      </div>
      <div className="flex gap-3 text-2xl">
        <FaFacebook className="text-blue-500 cursor-pointer hover:text-blue-600"/>
        <FaYoutube className="text-red-500 cursor-pointer hover:text-red-600"/>
        <FaTwitter className="text-black cursor-pointer"/>
        <FaLinkedin className="text-blue-400 cursor-pointer hover:text-blue-500"/>
        
      </div>
    </div>
  )
}

export default Footer
