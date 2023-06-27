import { Button, Row, Col, notification } from "antd";
import styles from "./Cart.module.css";
import { SendOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useCart from "./hooks/useCart";
import CartItems from "./components/CartItems";

const Cart = () => {
  const { calculateTotalPrice, items, removeFromCart, updateQuantity } =
    useCart();

  const navigate = useNavigate();
  const handleCheckout = () => {
    if (items.length > 0) {
      navigate("/cart/checkout", { state: { data: items } });
    } else {
      openNotification();
    }
  };
  const openNotification = () => {
    notification.error({
      message: 'Checkout error',
      description: `Your cart is empty !`,
      duration: 2,
    });
  }
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
            <span className={styles.priceValue}>{calculateTotalPrice()} VND</span>
          </div>
          <Button type="primary" className={styles.checkoutButton} onClick={() => handleCheckout()}>
            Proceed to Checkout <SendOutlined />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
