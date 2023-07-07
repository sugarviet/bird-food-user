import { Col, Row, Divider } from "antd";
import { useState, useEffect } from "react";
import styles from "./Shipping.module.css";

const Shipping = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setItems(JSON.parse(localCart));
    }
  }, []);
  return (
    <div className={styles.shippingContainer}>
      <div className={styles.shippingImg} />
      <div>No orders yet</div>
    </div>
  );
};
export default Shipping;
