import { useLocation } from "react-router";
import BreadcrumbBanner from "../../components/Breadcrumb";
import ReviewOder from "./components/ReviewOrder";
import {UserOutlined, AimOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons'


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

const selectedProducts = [
    {
        name: "Straight Bird Foods",
        price: 25,
        image: 'https://i.ibb.co/SVhGw6v/Straight-Bird-Foods.png',
        quantity: 2,
    },
    {
        name: "Straight Bird Foods",
        price: 25,
        image: 'https://i.ibb.co/SVhGw6v/Straight-Bird-Foods.png',
        quantity: 2,
    },
]

function CheckOut() {
    const location = useLocation();

    return (
        <>
            <BreadcrumbBanner
                backgroundImage={backgroundImage}
                title='Check Out Product'
                pathName={location.pathname}
            />

            <ReviewOder 
                shippingInputList={shippingInputList}
                selectedProducts={selectedProducts}
            />
        </>
    );
}

export default CheckOut;