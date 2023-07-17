import { Fragment } from "react";
import ProductItemDetails from "./components/ProductSingle";
import BreadcrumbBanner from "../../components/Breadcrumb/BreadcrumbBanner";
import { useLocation } from "react-router";

const bannerImage =
  "https://www.datocms-assets.com/33130/1626287901-birdseedbanner.jpg";

function ProductDetails() {
  const location = useLocation();

  return (
    <Fragment>
      <BreadcrumbBanner
        backgroundImage={bannerImage}
        title="Product Detail"
        pathName={location.pathname.slice(
          0,
          location.pathname.lastIndexOf("/")
        )}
      />
      <ProductItemDetails />
    </Fragment>
  );
}

export default ProductDetails;
