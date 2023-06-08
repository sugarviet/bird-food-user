import { List, Button, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import styles from "./CartItems.module.css";

const CartItem = ({ items, removeFromCart, updateQuantity }) => {
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
                  onClick={() => removeFromCart(item.id)}
                >
                  <CloseOutlined style={{color: 'red'}}/>
                </Button>
                <div className={styles.productInfo}>
                  <div className={styles.imgWrapper}>
                    <img
                      src="https://images.thdstatic.com/productImages/3c373a6d-5ae6-45ec-ab29-6bd404bfb1b9/svn/pennington-bird-seed-food-100542054-64_600.jpg"
                      alt=""
                    />
                  </div>
                  <div className={styles.itemName}>
                    <small>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga, minus alias! Suscipit
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
  );
};

CartItem.propTypes = {
  items: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default CartItem;
