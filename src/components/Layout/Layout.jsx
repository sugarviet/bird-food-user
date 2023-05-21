import { Fragment } from "react"
// import Header from "./Header";
// import Footer from "./Footer";
import Routers from "../../routes/Routers";

const Layout = () => {
  return (
    <Fragment>
        {/* <Header/> */}
        <div>
            <Routers />
        </div>
        {/* <Footer/> */}
    </Fragment>
  )
}

export default Layout
