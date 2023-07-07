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


  return (
    <div className={`${styles.wrapper}`}>
      <Tabs
        className={styles.tabStyle}
        defaultActiveKey="1"
        type="card"
        size="small"
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
    .css-dev-only-do-not-override-lbcgob.ant-tabs-card.ant-tabs-small > .ant-tabs-nav {
      position: sticky;
      top: 64px; 
      z-index: 1;
      background-color: #e5e5e5;
    }
    .css-dev-only-do-not-override-lbcgob.ant-tabs-card.ant-tabs-small > .ant-tabs-nav .ant-tabs-tab {
      padding: 6px 102px;
    }
  `}
</style>
    </div>
  );
};
export default PurchaseHistory;
