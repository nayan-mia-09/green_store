import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Brands from "./pages/Brands"
import Products from "./pages/Products"
import TrackOrder from "./pages/TrackOrder"
import SecondNavbar from "./components/SecondNavbar"


const App = () => {
  return (
    <div >
       <Navbar/>
       <SecondNavbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/brands" element={<Brands/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/track-order" element={<TrackOrder/>}/>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}

export default App
