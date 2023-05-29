import { Fragment } from "react"
import Navbar from "../Navbar";
import Routers from "../../routes/Routers";
import Footer from "../Footer";

const Layout = () => {
  return (
    <Fragment>
      <Navbar/>
        <div>
            <Routers />
        </div>
        <Footer/>
    </Fragment>
  )
}

export default Layout
