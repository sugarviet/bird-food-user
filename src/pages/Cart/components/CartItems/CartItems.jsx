import { List, Button, Input, notification } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import styles from "./CartItems.module.css";

const CartItem = ({ items, removeFromCart, updateQuantity }) => {
  const openNotification = (name) => {
    notification.success({
      message: "Successfully deleted ",
      description: `Delete ${name} `,
      duration: 2,
    });
  };
  const openNotificationError = (stock) => {
    notification.error({
      message: "Failed update quantity ",
      description: `You can only buy max ${stock} in one checkout  `,
      duration: 2,
    });
  };
  return (
    <div>
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
                  onClick={() => {
                    openNotification(item.productName);
                    removeFromCart(item.productId);
                  }}
                >
                  <CloseOutlined style={{ color: "red" }} />
                </Button>
                <div className={styles.productInfo}>
                  <div className={styles.imgWrapper}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={styles.itemName}>
                    <small>{item.productName}</small>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Input
                className={styles.quantityInput}
                type="number"
                value={item.quantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  const maxStock = item.stock;

                  if (value > maxStock) {
                    openNotificationError(maxStock);
                    updateQuantity(item.productId, maxStock);
                  } else if (value !== 0) {
                    updateQuantity(item.productId, value);
                  } else {
                    updateQuantity(item.productId, 1);
                  }
                }}
                min={1}
                onBlur={(e) => {
                  if (e.target.value.trim() === "") {
                    removeFromCart(item.productId);
                  }
                }}
              />
            </div>
            <div className={styles.cartItemControls}>
              <p className={styles.itemPrice}>{item.price} VND</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

CartItem.propTypes = {
  items: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default CartItem;
