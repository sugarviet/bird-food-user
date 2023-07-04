import { Col, Row, Divider } from "antd";
import { useState, useEffect } from "react";
import styles from "./Completed.module.css";

const Completed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setItems(JSON.parse(localCart));
    }
  }, []);
  return (
    <div>
      <div>
        <Divider
          orientation="left"
          orientationMargin="0"
          style={{ width: "1em" }}
        >
          <h3 style={{ color: "#3cb815" }}>
            Your order has been successfully delivered{" "}
            <span role="img">😍</span>
          </h3>
        </Divider>

        <div className={styles.pendingHeader}>
          <p>Order ID: 230523FPWB8E5U</p>
          <Divider
            type="vertical"
            style={{
              marginTop: "7px",
              backgroundColor: "#626366",
              width: "1px",
            }}
          />
          <p style={{ color: "#ee4d2d", fontSize: "14px", fontWeight: "500" }}>
            COMPLETED
          </p>
        </div>
      </div>

      <Row className={`${styles.productWrapperHeader}`}>
        <Col span={4}>
          <div className={`${styles.flexCol}`}>
            <span className={`${styles.textCenter}`}>Image</span>
          </div>
        </Col>
        <Col span={6}>
          <div className={`${styles.flexCol}`}>
            <span className={`${styles.textCenter}`}>Product name</span>
          </div>
        </Col>
        <Col span={4}>
          <div className={`${styles.flexCenter}`}>
            <span style={{ width: "100%", textAlign: "center" }}>Price</span>
          </div>
        </Col>
        <Col span={6}>
          <div
            className={`${styles.flexCenter}`}
            style={{ padding: "0 .5rem" }}
          >
            <span style={{ width: "100%", textAlign: "center" }}>Quantity</span>
          </div>
        </Col>
        <Col span={4}>
          <div className={`${styles.flexCenter}`}>
            <span style={{ width: "100%", textAlign: "center" }}>Total</span>
          </div>
        </Col>
      </Row>

      {items.map((product) => (
        <Row className={`${styles.productWrapper}`} key={product.id}>
          <Col span={4}>
            <div className={styles.flexCenter}>
              <img className={`${styles.image}`} src={product.image} />
            </div>
          </Col>
          <Col span={6}>
            <div className={`${styles.flexCol}`}>
              <span className={`${styles.textCenter}`}>
                {product.productName}
              </span>
              <span className={`${styles.textCenter} ${styles.textNormal}`}>
                {product.description}
              </span>
            </div>
          </Col>
          <Col span={4}>
            <div className={`${styles.flexCenter}`}>
              <span
                style={{ width: "100%", textAlign: "center" }}
              >{`${product.price.toLocaleString()} VND`}</span>
            </div>
          </Col>
          <Col span={6}>
            <div
              className={`${styles.flexCenter}`}
              style={{ padding: "0 .5rem" }}
            >
              <input
                style={{ flex: 1 }}
                type="number"
                value={product.quantity}
                readOnly
                className={`${styles.quantity}`}
              />
            </div>
          </Col>
          <Col span={4}>
            <div className={`${styles.flexCenter}`}>
              <span
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginLeft: "20px",
                }}
              >{`${(
                product.price * product.quantity
              ).toLocaleString()} VND`}</span>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};
export default Completed;
