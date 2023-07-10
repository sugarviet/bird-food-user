import { Col, Row } from "antd";
import styles from "./ProductSingle.module.css";
import {
  PlusOutlined,
  MinusOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import useProductSingle from "./hooks/useProductSingle";
import Loading from "../../../../components/Loading";
import { useState } from "react";

const description =
  "Our Bird Food product is a nutritious blend of seeds, grains, and pellets designed to meet the dietary needs of various bird species. Packed with essential nutrients, it promotes optimal health and natural behavior. Trust our high-quality formulation for happy, healthy birds";

function ProductSingle() {
  const { productId } = useParams();

  const {
    handleMinusButtonClick,
    handlePlusButtonClick,
    handleUpdateQuantity,
    handleAddItem,
    product,
    quantity,
    isOutOfStock,
    isLoading,
  } = useProductSingle(productId);

  if (isLoading) {
    return <Loading />;
  }

  const formattedPrice = product.price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

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
              <h3 className={`${styles.fontSizeXL}`}>{product.productName}</h3>
              <p
                className={`${styles.productSinglePrice} ${styles.fontSizeXL}`}
              >
                <span style={{ color: "#82ae46", fontWeight: "700" }}>
                  {formattedPrice}
                </span>
              </p>
              <p
                style={{ color: "#808080", fontWeight: "400" }}
                className={`${styles.fontSizeL}`}
              >
                {description}
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
                  style={{
                    color: "#808080",
                    fontWeight: "400",
                    marginTop: "1rem",
                    marginLeft: "1rem",
                  }}
                  className={`${styles.fontSizeL}`}
                >
                  {product.quantity} products in selling
                </p>
              </div>
              {isOutOfStock && (
                <p
                  style={{ color: "red", fontWeight: "400", marginTop: "1rem" }}
                  className={`${styles.fontSizeL}`}
                >
                  <WarningOutlined /> The quantity you have selected has reached
                  the maximum limit for this product
                </p>
              )}
              <p>
                <button
                  className={`${styles.addToCartButton} ${styles.clickable} ${styles.marginTop4}`}
                  onClick={() => handleAddItem(product, quantity)}
                  disabled={product.quantity > 0 ? false : true}
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

export default ProductSingle;
