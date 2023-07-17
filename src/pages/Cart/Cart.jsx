import { Button, Row, Col, notification } from "antd";
import styles from "./Cart.module.css";
import { SendOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import useCart from "./hooks/useCart";
import CartItems from "./components/CartItems";
import { useToken } from "../../services/Login/services";
import useCurrency from "../../hooks/useCurrency";

const Cart = () => {
  const { items, combos, total, handleRemoveItem, handleRemoveCombo, handleUpdateComboQuantity, handleUpdateItemQuantity } =
    useCart();

  const formattedTotal = useCurrency(total || 0)

  const formattedCombos = combos.map((combo) => ({
    ...combo,
    productName: combo.comboName,
    price: combo.priceAfterDiscount,
  }));

  const decodeToken = useToken();

  const navigate = useNavigate();

  const handleCheckout = () => {
    const availableItems = items.filter(item => item.status == 1)
    const availableCombos = combos.filter(combo => combo.status == 1)

    if (availableItems.length > 0 || availableCombos.length > 0) {
      navigate("/cart/checkout", {
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
            <CartItems items={items} removeFromCart={handleRemoveItem} updateQuantity={handleUpdateItemQuantity}/>
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
              updateQuantity={handleUpdateComboQuantity}
            />
          ) : (
            <CartItems />
          )}
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.totalPrice}>
            <span>Total Price:</span>
              <span className={styles.priceValue}>{formattedTotal}</span>
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
