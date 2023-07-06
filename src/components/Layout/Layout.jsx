import { Fragment, useContext } from "react";
import Navbar from "../Navbar";
import Routers from "../../routes/Routers";
import Footer from "../Footer";
import useLayout from "./hooks/useLayout";
import useCart from "../../pages/Cart/hooks/useCart";
import { useEffect } from "react";

const Layout = () => {
  const {items, combos, handleStoreCart} = useCart()
  const { isSignInAndSignUpPath } = useLayout();

  useEffect(() => {
    console.log(items, combos)
    window.addEventListener('beforeunload', handleStoreCart)

    return () => {
        window.removeEventListener('beforeunload', handleStoreCart)
    }
  }, [items, combos])

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
