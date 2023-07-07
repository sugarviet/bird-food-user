import styles from "./Pending.module.css";
import { Col, Row, Divider } from "antd";
import usePendingOrders from '../../hooks/usePendingOrders'
import Loading from "../../../../components/Loading/Loading";

const Pending = () => {

  const { data, isLoading } = usePendingOrders();
  console.log(data)

  if (isLoading) {
    return <Loading />;
  }

  return (

    <div >
      {!data?.listOrder?.length > 0 ? (
        <div className={styles.shippingContainer}>
          <div className={styles.shippingImg} />
          <div>No orders yet</div>
        </div>
      ) : (
        <>
          <Divider
            orientation="left"
            orientationMargin="0"
            style={{ width: "1em" }}
          >
            <h3 style={{ color: "#3cb815" }}>
              Waiting for approved by admin <span role="img">🥺</span>
            </h3>
          </Divider>
          {data?.listOrder?.map((order) => (
            <div style={{ background: '#ffffff' }}>
              <div className={styles.pendingHeader}>
                <div style={{ float: "left", padding: '5px', fontWeight: '500' }}>Order date: {order.order_date?.slice(0, 10).split("-").reverse().join("/")}</div>
                <div className={styles.pendingHeader}>
                  <p style={{ fontWeight: '500' }}>Order ID: Toàn nó chưa set</p>
                  <Divider
                    type="vertical"
                    style={{
                      marginTop: "7px",
                      backgroundColor: "#626366",
                      width: "1px",
                    }}
                  />
                  <p style={{ color: "#ee4d2d", fontSize: "14px", fontWeight: "500", textTransform: 'uppercase', paddingRight: '5px' }}>
                    {order.status}
                  </p>
                </div>
              </div >
              {order.detail_product?.length > 0 ? (
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
                      <span style={{ width: "100%", textAlign: "center" }}>
                        Quantity
                      </span>
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className={`${styles.flexCenter}`}>
                      <span style={{ width: "100%", textAlign: "center" }}>Total</span>
                    </div>
                  </Col>
                </Row>
              ) : (
                <div></div>
              )}
              {order.detail_product?.map((product) => (
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
              {/* combo */}
              <Row className={`${styles.productWrapperHeader}`}>
                <Col span={4}>
                  <div className={`${styles.flexCol}`}>
                    <span className={`${styles.textCenter}`}>Image</span>
                  </div>
                </Col>
                <Col span={6}>
                  <div className={`${styles.flexCol}`}>
                    <span className={`${styles.textCenter}`}>Combo name</span>
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

              {order.detail_combo?.map((combo) => (
                <Row className={`${styles.productWrapper}`} key={combo.id}>
                  <Col span={4}>
                    <div className={styles.flexCenter}>
                      <img className={`${styles.image}`} src={combo.image} />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className={`${styles.flexCol}`}>
                      <span className={`${styles.textCenter}`}>{combo.comboName}</span>
                      <span className={`${styles.textCenter} ${styles.textNormal}`}>
                        {order.description}
                      </span>
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className={`${styles.flexCenter}`}>
                      <span
                        style={{ width: "100%", textAlign: "center" }}
                      >{`${combo.priceAfterDiscount.toLocaleString()} VND`}</span>
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
                        value={combo.quantity}
                        readOnly
                        className={`${styles.quantity}`}
                      />
                    </div>
                  </Col>
                  <Col span={4}>
                    <div className={`${styles.flexCenter}`}>
                      <span style={{ width: "100%", textAlign: "center" }}>{`${(
                        combo.priceAfterDiscount * combo.quantity
                      ).toLocaleString()} VND`}</span>
                    </div>
                  </Col>
                </Row>
              ))}
              <p className={styles.totalBottom}>Order total:<span style={{ color: '#3cb815', fontWeight: '500', paddingLeft: '5px' }}>{order.total_price.toLocaleString()} VND</span> </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default Pending;
