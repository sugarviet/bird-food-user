import { useLocation } from "react-router";
import BreadcrumbBanner from "../../components/Breadcrumb";
import ReviewOder from "./components/ReviewOrder";
import { UserOutlined, AimOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { Fragment } from "react";


const backgroundImage = 'https://static.vecteezy.com/system/resources/previews/002/662/018/large_2x/easter-eggs-in-a-natural-nest-with-bird-eggs-on-a-pink-background-view-from-above-banner-photo.jpg'

const shippingInputList = [
    {
        name: 'Name',
        type: 'string',
        prefix: <UserOutlined />
    },
    {
        name: 'Email',
        type: 'email',
        prefix: <MailOutlined />
    },
    {
        name: 'Address',
        type: 'string',
        prefix: <AimOutlined />
    },
    {
        name: 'Phone',
        type: 'phone',
        prefix: <PhoneOutlined />
    },
]

function CheckOut() {
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