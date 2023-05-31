import { Route, Routes} from "react-router-dom";
import Example from "../pages/Example/Example";
import Home from "../pages/Home";
import  Product  from "../pages/Products";

const Routers = () => {
  return (
    <Routes>
        <Route path="/example" element={<Example />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Product />}/>
    </Routes>
  )
}

export default Routers
