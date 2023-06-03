import { Route, Routes } from "react-router-dom";
import Example from "../pages/Example/Example";
import Home from "../pages/Home";
import Product from "../pages/Products";
import Aboutus from "../pages/Aboutus";

const Routers = () => {
  return (
    <Routes>
      <Route path="/example" element={<Example />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
  )
}

export default Routers
