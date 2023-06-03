import { Route, Routes} from "react-router-dom";
import Example from "../pages/Example/Example";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
        <Route path="/example" element={<Example />}/>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default Routers
