import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Create from "./pages/Create"
import Login from "./pages/Login"
import Cart from "./Cart/cart"
import CartSummary from "./conponents/CartSummary"
import Register from "./pages/Register"
import ProductDetail from "./pages/ProductDetail"
import Amazon from "./Cart/amazon";
import Footer from "./pages/Footer"
import Pro from "./pages/Pro"
import Profile from "./pages/profile"


import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CartSummary" element={<CartSummary />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Amazon" element={<Amazon />} />
          <Route path="/Pro" element={<Pro />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/product" element={<product />} />

        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
