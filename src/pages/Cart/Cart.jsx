import { Button, Row, Col } from "antd";
import styles from "./Cart.module.css";
import { SendOutlined } from "@ant-design/icons";


import useCart from "./hooks/useCart";
import CartItems from "./components/CartItems";

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
              <p className={styles.cartColumnsTitle}>Item</p>
            </Col>
            <Col span={8}>
              <p className={styles.cartColumnsQuantity}>Quantity</p>
            </Col>
            <Col span={4}>
              <p className={styles.cartColumnsPrice}>Price</p>
            </Col>
          </Row>

          {/* Render all the items in the cart */}
          <CartItems
            items={items}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.totalPrice}>
            <span>Total Price:</span>
            <span className={styles.priceValue}>${calculateTotalPrice()}</span>
          </div>
          <Button type="primary" className={styles.checkoutButton}>
            Proceed to Checkout <SendOutlined />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
