import { Button, Row, Col, notification } from "antd";
import styles from "./Cart.module.css";
import { SendOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import useCart from "./hooks/useCart";
import CartItems from "./components/CartItems";
import { useToken } from "../../services/Login/services";

const Cart = () => {
  const { items, combos, total, handleRemoveItem, handleRemoveCombo } =
    useCart();

  const formattedCombos = combos.map((combo) => ({
    ...combo,
    productName: combo.comboName,
    price: combo.priceAfterDiscount,
  }));

  const decodeToken = useToken();

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length > 0 || combos.length > 0) {
      navigate("/cart/checkout", {
        // state: { data: [...items, ...formattedCombos] },
        state: {
          data: {
            detail_product: items,
            detail_combo: formattedCombos,
          },
        },
      });
    } else {
      openNotification();
    }
  };

  const openNotification = () => {
    notification.error({
      message: "Checkout error",
      description: `Your cart is empty !`,
      duration: 2,
    });
  };

  return (
    <section className={styles.shoppingCartContainer}>
      <div className={styles.shoppingCart}>
        <div className={styles.cartHeader}>
          <h1 className={styles.cartTitle}>Shopping Cart</h1>
        </div>

        <div className={styles.cartBody}>
          <Row className={styles.cartColumns}>
            <Col span={12}>
              <p className={styles.cartColumnsTitle}>Product</p>
            </Col>
            <Col span={8}>
              <p className={styles.cartColumnsQuantity}>Quantity</p>
            </Col>
            <Col span={4}>
              <p className={styles.cartColumnsPrice}>Price</p>
            </Col>
          </Row>

          {/* Render all the items in the cart */}
          {decodeToken ? (
            <CartItems items={items} removeFromCart={handleRemoveItem} />
          ) : (
            <CartItems />
          )}
        </div>

        <div className={styles.cartBody}>
          <Row className={styles.cartColumns}>
            <Col span={12}>
              <p className={styles.cartColumnsTitle}>Combo</p>
            </Col>
            <Col span={8}>
              <p className={styles.cartColumnsQuantity}>Quantity</p>
            </Col>
            <Col span={4}>
              <p className={styles.cartColumnsPrice}>Price</p>
            </Col>
          </Row>

          {/* Render all the items in the cart */}
          {decodeToken ? (
            <CartItems
              items={formattedCombos}
              removeFromCart={handleRemoveCombo}
            />
          ) : (
            <CartItems />
          )}
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.totalPrice}>
            <span>Total Price:</span>
            {decodeToken ? (
              <span className={styles.priceValue}>{total} VND</span>
            ) : (
              <span className={styles.priceValue}>0 VND</span>
            )}
          </div>
          {decodeToken ? (
            <Button
              type="primary"
              className={styles.checkoutButton}
              onClick={() => handleCheckout()}
            >
              Proceed to Checkout <SendOutlined />
            </Button>
          ) : (
            <Link to="/login">
              <Button type="primary" className={styles.checkoutButton}>
                Proceed to Checkout <SendOutlined />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
