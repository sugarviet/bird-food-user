import Slider from './components/Slider'
import LatestBlog from './components/LastestBlog'
import ProductList from '../Products/components/ProductList/ProductList'

const Home = () => {
  return (
    <div>
      <Slider/>
      <ProductList/>
      <LatestBlog/>
    </div>
  )
}

export default Home
