import { Fragment } from "react";
import ComboSingle from "./components/ComboSingle";
import BreadcrumbBanner from "../../components/Breadcrumb/BreadcrumbBanner";
import { useLocation } from "react-router";

const bannerImage =
  "https://i0.wp.com/jbhostetter.com/wp-content/uploads/banner-2-scaled.jpg?ssl=1";

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
