import { Fragment } from "react";
import Banner from "./components/Banner/Banner";
import ProductItemDetails from "./components/ProductSingle";

function ProductDetails() {
    return ( 
        <Fragment>
            <Banner/>
            <ProductItemDetails/>
        </Fragment>
    );
}

export default ProductDetails;