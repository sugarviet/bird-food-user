import { Route, Routes} from "react-router-dom";
import Example from "../pages/Example/Example";

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Example />}/>
    </Routes>
  )
}

export default Routers
