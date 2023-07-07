import { Col, Row } from "antd";
import styles from "./ComboSingle.module.css";
import { StarOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetComboById } from "../../../../services/Combo/services";
import Loading from "../../../../components/Loading/Loading";

function ComboSingle() {
  const { comboId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data: combo, isLoading} = useGetComboById(comboId)

  if(isLoading) return <Loading/>

  const formattedPrice = (price) => {
    return price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND'
    })
  }

  const discount = combo.priceAfterDiscount * 100/90 * 0.1

  return (
    <div className={styles.productSingleWrapper}>
      <div className={styles.productSingle}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className={styles.productSingleImage}>
              <a href={combo.image}>
                <img src={combo.image} />
              </a>
            </div>
          </Col>

          <Col span={12}>
            <div className={styles.productSingleInfo}>
              <h3 className={`${styles.fontSizeXL}`}>{combo.comboName}</h3>
              <p
                className={`${styles.productSinglePrice} ${styles.fontSizeXL}`}
              >
                <span>{formattedPrice(combo.priceAfterDiscount)}</span>
              </p>
              <p
                style={{ color: "#808080", fontWeight: "400" }}
                className={`${styles.fontSizeL}`}
              >
                {combo.description}
              </p>
              <p
                style={{ color: "#808080", fontWeight: "400" }}
                className={`${styles.fontSizeL}`}
              >
                <ul>
                {combo.listProduct.map(product => (
                  <li style={{listStyle: 'none'}}>
                    <span><span style={{fontWeight: '700'}}>{product.quantity}</span> {product.productName}</span>
                  </li>
                ))}
                </ul>
                <div className={styles.marginTop4}>
                  <span>You save <span style={{color: "#82ae46", fontWeight: '700'}}>{formattedPrice(discount)}</span> when buying combo</span>
                </div>
              </p>
              <div className={`${styles.fontSizeL}`}>
                <div
                  className={`${styles.marginTop4} ${styles.productInputQuantity}`}
                >
                  <button
                    className={`${styles.inputBox} ${styles.clickable}`}
                    onClick={() => {
                      const newQuantity = quantity - 1;
                      if(newQuantity <= 0) return;
                      setQuantity(preState => preState - 1)
                    }}
                  >
                    <MinusOutlined />
                  </button>
                  <input
                    value={quantity}
                    name="quantity"
                    style={{ margin: "0 .5rem" }}
                    type="number"
                    min={1}
                    className={`${styles.inputBox}`}
                  />
                  <button
                    className={`${styles.inputBox} ${styles.clickable}`}
                    onClick={() => setQuantity(preState => preState + 1) }
                  >
                    <PlusOutlined />
                  </button>
                </div>
              </div>
              <p>
                <button
                  className={`${styles.addToCartButton} ${styles.clickable} ${styles.marginTop4}`}
                  // onClick={handleAddToCart}
                >
                  <span>Add to cart</span>
                </button>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ComboSingle;
