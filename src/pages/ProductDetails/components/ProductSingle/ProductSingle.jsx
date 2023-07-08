import { Col, Row } from "antd";
import styles from "./ProductSingle.module.css";
import { StarOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import useProductSingle from "./hooks/useProductSingle";
import Loading from "../../../../components/Loading";
import useCart from "../../../Cart/hooks/useCart";

const description = 'Our Bird Food product is a nutritious blend of seeds, grains, and pellets designed to meet the dietary needs of various bird species. Packed with essential nutrients, it promotes optimal health and natural behavior. Trust our high-quality formulation for happy, healthy birds'

function ProductSingle() {
  const { productId } = useParams();

  const { handleAddItem } = useCart()

  const {
    handleMinusButtonClick,
    handlePlusButtonClick,
    product,
    quantity,
    isLoading,
  } = useProductSingle(productId);

  if (isLoading) {
    return <Loading />;
  }

  const formattedPrice = product.price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND"
  })

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
                <span style={{color: "#82ae46", fontWeight: '700'}}>{formattedPrice}</span>
              </p>
              <p
                style={{ color: "#808080", fontWeight: "400" }}
                className={`${styles.fontSizeL}`}
              >
                {description}
              </p>
              <div className={`${styles.fontSizeL}`}>
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
                  onClick={() => handleAddItem(product, quantity)}
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
