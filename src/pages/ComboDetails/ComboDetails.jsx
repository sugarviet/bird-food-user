import { Fragment } from "react";
import ComboSingle from "./components/ComboSingle";
import BreadcrumbBanner from "../../components/Breadcrumb/BreadcrumbBanner";
import { useLocation } from "react-router";

const bannerImage =
  "https://jimmybazaar.com/images/home5/panchee%20pick%20budgies%20and%20pride%20banner.jpg";

function ComboDetails() {
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
      <ComboSingle />
    </Fragment>
  );
}

export default ComboDetails;
