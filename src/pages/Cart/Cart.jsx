import { CloseOutlined } from "@ant-design/icons";
import { Button, Input, List, Row, Col } from "antd";
import styles from "./Cart.module.css";
import useCart from "./hooks/useCart";

const Cart = () => {
  const { calculateTotalPrice, items, removeFromCart, updateQuantity } =
    useCart();

  return (
    <section className={styles.shoppingCartContainer}>
      <div className={styles.shoppingCart}>
        <div className={styles.cartHeader}>
          <h1 className={styles.cartTitle}>Shopping Cart</h1>
        </div>

        <div className={styles.cartBody}>
          <Row className={styles.cartColumns}>
            <Col span={12}>
              <p>Item</p>
            </Col>
            <Col span={8}>
              <p style={{ textAlign: "center", marginRight: "10em" }}>
                Quantity
              </p>
            </Col>
            <Col span={4}>
              <p style={{ textAlign: "end" }}>Price</p>
            </Col>
          </Row>
          <List
            dataSource={items}
            renderItem={(item) => (
              <List.Item className={styles.cartItem}>
                <div className={styles.cartItemDetails}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      type="ghost"
                      shape="circle"
                      className={styles.deleteIcon}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <CloseOutlined />
                    </Button>
                    <div className={styles.productInfo}>
                      <div className={styles.imgWrapper}>
                        <img
                          src="https://images.thdstatic.com/productImages/3c373a6d-5ae6-45ec-ab29-6bd404bfb1b9/svn/pennington-bird-seed-food-100542054-64_600.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          wordWrap: "break-word",
                          display: "block",
                          width: "100%",
                          height: "100px",
                          zIndex: "1",
                        }}
                      >
                        <small>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga, minus alias! Suscipit{" "}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Input
                    className={styles.quantityInput}
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                    min={1}
                    onBlur={(e) => {
                      if (e.target.value.trim() === "") {
                        removeFromCart(item.id);
                      }
                    }}
                  />
                </div>
                <div className={styles.cartItemControls}>
                  <p className={styles.itemPrice}>${item.price}</p>
                </div>
              </List.Item>
            )}
          />
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.totalPrice}>
            <span>Total Price:</span>
            <span className={styles.priceValue}>${calculateTotalPrice()}</span>
          </div>
          <Button type="primary" className={styles.checkoutButton}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
