import { Route, Routes } from "react-router-dom";
import Example from "../pages/Example/Example";
import Home from "../pages/Home";
import Product from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Aboutus from "../pages/Aboutus";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import  Contactus  from "../pages/Contactus";
import Blogs from "../pages/Blogs"
import BlogDetail from "../pages/Blogs/components/BlogDetail"

const Routers = () => {
  return (
    <Routes>
        <Route path="/example" element={<Example />}/>
        <Route path="/products" element={<Product />}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/:blogId" element={<BlogDetail/>}/>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}
export default Routers
