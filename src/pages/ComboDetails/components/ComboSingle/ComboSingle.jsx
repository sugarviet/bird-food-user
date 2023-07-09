import { Col, Row } from "antd";
import styles from "./ComboSingle.module.css";
import { StarOutlined, PlusOutlined, MinusOutlined, WarningOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useGetComboById } from "../../../../services/Combo/services";
import Loading from "../../../../components/Loading/Loading";
import useCart from "../../../Cart/hooks/useCart";
import useCurrency from "../../../../hooks/useCurrency";

function ComboSingle() {
  const { comboId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isOutOfStock, setIsOutOfStock] = useState(false)
  const { data: combo, isLoading} = useGetComboById(comboId)
  const { combos, handleAddCombo } = useCart()

  const getMaxQuantity = () => {
    const quantityArray = combo?.listProduct.map(product => Math.floor(product.quantity/product.quantityProductInCombo))
    return quantityArray ? Math.min(...quantityArray) : 0;
  }

  const comboInCart = combos.find(item => item._id === combo._id)
  const comboInCartQuantity = comboInCart ? comboInCart.quantity : 0

  useEffect(() => {
    setIsOutOfStock(quantity + comboInCartQuantity > getMaxQuantity())
  }, [quantity])

  const handlePlusButtonClick = () => {
    setIsOutOfStock(quantity + 1 + comboInCartQuantity > getMaxQuantity())
    if(quantity + comboInCartQuantity >= getMaxQuantity()) return
    setQuantity(quantity + 1);
  };

  const handleMinusButtonClick = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleUpdateQuantity = (quantity) => {
    const newQuantity = parseInt(quantity)
    if(newQuantity + comboInCartQuantity > getMaxQuantity() || newQuantity <= 1) return;
    setQuantity(newQuantity)
  }

  const formattedPrice = useCurrency(combo?.priceAfterDiscount || 0)

  const formattedDiscount = useCurrency(combo?.priceAfterDiscount * 100/90 * 0.1 || 0)

  if(isLoading) return <Loading/>

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
                <span>{formattedPrice}</span>
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
                  <span>You save <span style={{color: "#82ae46", fontWeight: '700'}}>{formattedDiscount}</span> when buying combo</span>
                </div>
              </p>
              <div className={`${styles.fontSizeL} ${styles.flexRowCenter}`}>
                <div
                  className={`${styles.marginTop4} ${styles.productInputQuantity}`}
                >
                  <button
                    className={`${styles.inputBox} ${styles.clickable}`}
                    onClick={handleMinusButtonClick}
                  >
                    <MinusOutlined />
                  </button>
                  <input
                    value={quantity}
                    name="quantity"
                    style={{ margin: "0 .5rem" }}
                    type="number"
                    min={1}
                    onChange={(e) => handleUpdateQuantity(e.target.value)}
                    className={`${styles.inputBox}`}
                  />
                  <button
                    className={`${styles.inputBox} ${styles.clickable}`}
                    onClick={handlePlusButtonClick}
                  >
                    <PlusOutlined />
                  </button>
                </div>
                <p
                  style={{ color: "#808080", fontWeight: "400", marginTop: '1rem', marginLeft: '1rem'}}
                  className={`${styles.fontSizeL}`}
                >
                  {getMaxQuantity()} combos in selling
                </p>
              </div>
              {isOutOfStock && <p
                style={{ color: "red", fontWeight: "400", marginTop: '1rem'}}
                className={`${styles.fontSizeL}`}
              >
                <WarningOutlined/> The quantity you have selected has reached the maximum limit for this combo
              </p>}
              <p>
                <button
                  className={`${styles.addToCartButton} ${styles.clickable} ${styles.marginTop4}`}
                  onClick={() => handleAddCombo(combo, quantity)}
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
