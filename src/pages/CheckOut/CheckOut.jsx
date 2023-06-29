import { useLocation } from "react-router";
import BreadcrumbBanner from "../../components/Breadcrumb";
import ReviewOder from "./components/ReviewOrder";
import { UserOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { Fragment } from "react";
import { useToken } from '../../services/Login/services'

const backgroundImage =
  "https://static.vecteezy.com/system/resources/previews/002/662/018/large_2x/easter-eggs-in-a-natural-nest-with-bird-eggs-on-a-pink-background-view-from-above-banner-photo.jpg";



function CheckOut() {

  const decodedToken = useToken();

  const shippingInputList = [
    {
      name: "Name",
      type: "string",
      value: decodedToken?.username,
      prefix: <UserOutlined />,
    },
    {
      name: "Email",
      type: "email",
      value: decodedToken?.email,
      prefix: <MailOutlined />,
    },
    {
      name: "Phone",
      type: "phone",
      value: "093975401",
      prefix: <PhoneOutlined />,
    },
    {
      name: "Ward",
      type: "string",
      value: "chealsea đáy xã hội ward",
      prefix: <EnvironmentOutlined />,
    },
    {
      name: "District",
      type: "string",
      value: "chelsea gà district",
      prefix: <EnvironmentOutlined />,
    },
    {
      name: "Province",
      type: "string",
      value: "hạng 12 province",
      prefix: <EnvironmentOutlined />,
    },

  ];
  const location = useLocation();
  const { data } = location.state;


  return (
    <Fragment>
      <BreadcrumbBanner
        backgroundImage={backgroundImage}
        title='Check Out Product'
        pathName={location.pathname}
      />

      <ReviewOder
        shippingInputList={shippingInputList}
        cartItems={data}
      />
    </Fragment>
  );
}

export default CheckOut;
