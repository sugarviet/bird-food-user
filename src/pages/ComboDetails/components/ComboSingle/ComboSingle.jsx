import { Col, Row } from "antd";
import styles from "./ComboSingle.module.css";
import { StarOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import useComboSingle from "./hooks/useComboSingle";
import Loading from "../../../../components/Loading";

function ComboSingle() {
  const { productId } = useParams();

  const {
    handleMinusButtonClick,
    handlePlusButtonClick,
    handleSizeSelectionChange,
    product,
    quantity,
    handleAddToCart,
    isLoading,
  } = useComboSingle(productId);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.productSingleWrapper}>
      <div className={styles.productSingle}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className={styles.productSingleImage}>
              <a href={product.image}>
                <img src={product.image} />
              </a>
            </div>
          </Col>

          <Col span={12}>
            <div className={styles.productSingleInfo}>
              <h3 className={`${styles.fontSizeXL}`}>{product.name}</h3>
              <div
                className={`${styles.productSingleRating} ${styles.fontSizeL}`}
              >
                <p
                  className={`${styles.productSingleRatingStar} ${styles.marginRight4}`}
                >
                  <a className={styles.marginRight4}>{product.rating}</a>
                  <a href="">
                    <StarOutlined />
                  </a>
                  <a href="">
                    <StarOutlined />
                  </a>
                  <a href="">
                    <StarOutlined />
                  </a>
                  <a href="">
                    <StarOutlined />
                  </a>
                  <a href="">
                    <StarOutlined />
                  </a>
                </p>
                <p>
                  <a className={styles.marginRight4} style={{ color: "#000" }}>
                    <span style={{ marginRight: "4px" }}>100</span>
                    <span style={{ color: "#bbb" }}>Rating</span>
                  </a>
                </p>
                <p>
                  <a className={styles.marginRight4} style={{ color: "#000" }}>
                    <span style={{ marginRight: "4px" }}>100</span>
                    <span style={{ color: "#bbb" }}>Sold</span>
                  </a>
                </p>
              </div>
              <p
                className={`${styles.productSinglePrice} ${styles.fontSizeXL}`}
              >
                <span>{`$ ${product.price}`}</span>
              </p>
              <p
                style={{ color: "#808080", fontWeight: "400" }}
                className={`${styles.fontSizeL}`}
              >
                {product.description}
              </p>
              <div className={`${styles.fontSizeL}`}>
                <div className={`${styles.marginTop4}`}>
                  <select
                    className={`${styles.inputBox} ${styles.clickable}`}
                    onChange={handleSizeSelectionChange}
                  >
                    <option value="small">SMALL</option>
                    <option value="medium">MEDIUM</option>
                    <option value="large">LARGE</option>
                    <option value="extra large">EXTRA LARGE</option>
                  </select>
                </div>
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
                    className={`${styles.inputBox}`}
                  />
                  <button
                    className={`${styles.inputBox} ${styles.clickable}`}
                    onClick={handlePlusButtonClick}
                  >
                    <PlusOutlined />
                  </button>
                </div>
              </div>
              <p>
                <button
                  className={`${styles.addToCartButton} ${styles.clickable} ${styles.marginTop4}`}
                  onClick={handleAddToCart}
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
