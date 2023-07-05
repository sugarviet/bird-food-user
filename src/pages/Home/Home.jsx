import Slider from "./components/Slider";
import LatestBlog from "./components/LastestBlog";
import ProductList from "../Products/components/ProductList/ProductList";
import { getAllBirdFood } from "../../services/Product/callers";
import Combos from "../Products/components/Combos/Combos";

const products = getAllBirdFood();

const Home = () => {
  return (
    <div>
      <Slider />
      <Combos/>
      <LatestBlog />
    </div>
  );
};

export default Home;
