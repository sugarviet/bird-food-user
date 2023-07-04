import styles from "./PurchaseHistory.module.css";
import { Tabs } from "antd";
import { useState } from "react";
import Pending from "../Pending/Pending";
import Shipping from "../Shipping/Shipping";
import Completed from "../Completed/Completed";
const tabs = [
  {
    label: "Pending",
    key: 1,
    children: <Pending />,
  },
  {
    label: "Shipping",
    key: 2,
    children: <Shipping />,
  },
  {
    label: "Completed",
    key: 3,
    children: <Completed />,
  },
];

const PurchaseHistory = () => {
  const [size, setSize] = useState("small");
  const onChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <Tabs
        className={styles.tabStyle}
        defaultActiveKey="1"
        type="card"
        size={size}
        items={tabs}
        style={{ display: "flex" }}
      >
        {tabs.map((tab) => (
          <Tabs.TabPane key={tab.key} tab={tab.label}>
            {tab.children}
          </Tabs.TabPane>
        ))}
      </Tabs>
      <style>
        {`
        .css-dev-only-do-not-override-lbcgob.ant-tabs-card.ant-tabs-small > .ant-tabs-nav .ant-tabs-tab {
            padding: 6px 90px;
          }
        `}
      </style>
    </div>
  );
};
export default PurchaseHistory;
