import Slider from "./components/Slider";
import LatestBlog from "./components/LastestBlog";
import ProductList from "../Products/components/ProductList/ProductList";
import { getAllBirdFood } from "../../services/Product/callers";

const products = getAllBirdFood();

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductList products={products} />
      <LatestBlog />
    </div>
  );
};

export default Home;
