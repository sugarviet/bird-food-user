import { Fragment } from "react"
import Navbar from "../Navbar";
import Routers from "../../routes/Routers";
import Footer from "../Footer";

import useLayout from "./hooks/useLayout";

const Layout = () => {
  const {isSignInAndSignUpPath} = useLayout();

  return (
    <Fragment>
      {isSignInAndSignUpPath && <Navbar/>}
        <div style={{marginTop: '64px'}}>
            <Routers />
        </div>
      {isSignInAndSignUpPath && <Footer/>}
    </Fragment>
  )
}

export default Layout
