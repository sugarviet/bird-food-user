import { Fragment } from "react";
import Navbar from "../Navbar";
import Routers from "../../routes/Routers";
import Footer from "../Footer";
import useLayout from "./hooks/useLayout";
import useCart from "../../pages/Cart/hooks/useCart";
import { useEffect } from "react";

const Layout = () => {
  const {handleStoreCart} = useCart()
  const { isSignInAndSignUpPath } = useLayout();

  useEffect(() => {
    window.addEventListener('beforeunload', handleStoreCart)

    return () => {
        window.removeEventListener('beforeunload', handleStoreCart)
    }
  },[])

  return (
    <Fragment>
      {isSignInAndSignUpPath && <Navbar />}
      <div>
        <Routers />
      </div>
      {isSignInAndSignUpPath && <Footer />}
    </Fragment>
  );
};

export default Layout;
