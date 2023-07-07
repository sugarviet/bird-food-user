import { Row, Col } from "antd";
import { Fragment, useState } from "react";
import Banner from "../../components/Banner";
import TabSetting from "./components/TabSetting/TabSetting";
import AccountSetting from "./components/AccountSetting";
import PasswordSetting from "./components/PasswordSetting";
import AddressSetting from "./components/AddressSetting";
import UsernameSetting from "./components/UsernameSetting/UsernameSetting";
import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";

const tabs = [
  {
    title: "Account Setting",
    description: "Details about your personal information",
    children: <AccountSetting />,
  },
  {
    title: "Address Setting",
    description: "Details about your address",
    children: <AddressSetting />,
  },
  {
    title: "Password & Security",
    description: "Details about your password",
    children: <PasswordSetting />,
  },
  {
    title: "My Purchase",
    description: "Details about your order",
    children: <PurchaseHistory />,
  },
];

function UserProfile() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Fragment>
      <Banner title="User Profile" />

      <div style={{ padding: "2rem 10rem" }}>
        <Row gutter={16}>
          <Col span={8}>
            {tabs.map((tab, index) => (
              <TabSetting
                handleOnClick={() => handleTabClick(index)}
                key={index}
                isActive={index == activeTab}
                tab={tab}
              />
            ))}
          </Col>

          <Col span={16}>
            <UsernameSetting />
            {tabs[activeTab].children}
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default UserProfile;
