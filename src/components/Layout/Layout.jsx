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
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      handleStoreCart()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload)
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
