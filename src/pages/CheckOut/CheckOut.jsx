import { useLocation } from "react-router";
import BreadcrumbBanner from "../../components/Breadcrumb";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const backgroundImage = 'https://static.vecteezy.com/system/resources/previews/002/662/018/large_2x/easter-eggs-in-a-natural-nest-with-bird-eggs-on-a-pink-background-view-from-above-banner-photo.jpg'

function CheckOut() {
    const path = useLocation();
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <BreadcrumbBanner
                backgroundImage={backgroundImage}
                title='Check Out Product'
                pathName={path.pathname}
            />
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            >
            </Collapse>
        </>
    );
}

export default CheckOut;