import { Route, Routes } from "react-router-dom";
import Example from "../pages/Example/Example";
import Home from "../pages/Home";
import Product from "../pages/Products";
import Aboutus from "../pages/Aboutus";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import  Contactus  from "../pages/Contactus";

const Routers = () => {
  return (
    <Routes>
        <Route path="/example" element={<Example />}/>
        <Route path="/products" element={<Product />}/>
         <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/" element={<Home />}/>

    </Routes>
  )
}

export default Routers
