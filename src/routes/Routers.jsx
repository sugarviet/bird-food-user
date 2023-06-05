import { Route, Routes} from "react-router-dom";
import Example from "../pages/Example/Example";
import Home from "../pages/Home";
import  Product  from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import  Contactus  from "../pages/Contactus";

const Routers = () => {
  return (
    <Routes>
        <Route path="/example" element={<Example />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Product />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>

    </Routes>
  )
}

export default Routers
