import { useLocation } from "react-router";
import BreadcrumbBanner from "../../components/Breadcrumb";
import ReviewOder from "./components/ReviewOrder";
import {
  UserOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Fragment, useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/User";
import { useCheckout } from "../../services/Checkout/services";
import { setSelectedCombos, setSelectedProducts } from "../../store/User/Reducer";
import { notification } from "antd";

const backgroundImage =
  "https://static.vecteezy.com/system/resources/previews/002/662/018/large_2x/easter-eggs-in-a-natural-nest-with-bird-eggs-on-a-pink-background-view-from-above-banner-photo.jpg";

function CheckOut() {
  const [user, dispatch] = useContext(UserContext);
  const [defaultAddress, setDefaultAddress] = useState();
  const [shippingInputList, setShippingInputList] = useState();

  const location = useLocation();
  const { data } = location.state;

  const { mutate } = useCheckout();

  const handleCheckOut = (detail_product, total) => {
    try {
      if(!defaultAddress) throw new Error("Address do not filled")

      console.log({
        detail_product: detail_product,
        total_price: total,
        addresses: {
          address: defaultAddress.address,
          ward_name: defaultAddress.ward_name,
          district_name: defaultAddress.district_name,
          province_name: defaultAddress.province_name,
        },
      })

      mutate({
        detail_product: detail_product,
        total_price: total,
        addresses: {
          address: defaultAddress.address,
          ward_name: defaultAddress.ward_name,
          district_name: defaultAddress.district_name,
          province_name: defaultAddress.province_name,
        },
      });
      dispatch(setSelectedCombos([]))
      dispatch(setSelectedProducts([]))
    } catch (error) {
      notification.error({
        message: error.message,
      });
    }
  };

  useEffect(() => {
    if (!user.username) return;

    const address = user.addresses.find((address) => address.isDefault);

    const newShippingInputList = [
      {
        name: "Name",
        type: "string",
        value: user.username,
        prefix: <UserOutlined />,
      },
      {
        name: "Email",
        type: "email",
        value: user.email,
        prefix: <MailOutlined />,
      },
      {
        name: "Phone",
        type: "phone",
        value: user.phone,
        prefix: <PhoneOutlined />,
      },
      {
        name: "Address",
        type: "string",
        value: address ? `${address.address}, ${address.province_name}, ${address.district_name}, ${address.ward_name}` : "",
        prefix: <EnvironmentOutlined />,
      },
    ];

    setDefaultAddress(address);
    setShippingInputList(newShippingInputList);
  }, [user.username]);

  return (
    <Fragment>
      <BreadcrumbBanner
        backgroundImage={backgroundImage}
        title="Check Out Product"
        pathName={location.pathname}
      />

      <ReviewOder
        shippingInputList={shippingInputList}
        cartItems={data}
        handleCheckOut={handleCheckOut}
      />
    </Fragment>
  );
}

export default CheckOut;
