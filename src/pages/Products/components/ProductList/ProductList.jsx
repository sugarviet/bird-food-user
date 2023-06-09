import styles from "./ProductList.module.css";
import { Button, Space, Col, Row, Pagination } from "antd";
import { useState } from "react";
import useProductList from "../../hooks/useProductList";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../../../../components/Loading";

function ProductList() {
  const [size] = useState("large"); // review why useState here???

  const { activeButton, handleButtonClick, data, isLoading } = useProductList();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.textBanner}>
      <div className={styles.hrContent}>
        <hr className={styles.hrTop} />
        <hr className={styles.hrBot} />
      </div>
      <h1 className={styles.textProducts}>Our Products</h1>
      <div className={styles.textDevide}>
        <div>
          <p className={styles.textDescription}>
            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. <br />
            Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <div className={styles.categoryContent}>
          <Space wrap>
            <Button
              size={size}
              className={styles.textCategory}
              type={activeButton === 1 && "primary"}
              onClick={() => handleButtonClick(1)}
            >
              Seed
            </Button>
            <Button
              size={size}
              className={styles.textCategory}
              type={activeButton === 2 ? "primary" : "default"}
              onClick={() => handleButtonClick(2)}
            >
              Mealworms
            </Button>
            <Button
              size={size}
              className={styles.textCategory}
              type={activeButton === 3 ? "primary" : "default"}
              onClick={() => handleButtonClick(3)}
            >
              Peanuts
            </Button>
          </Space>
        </div>
      </div>
      <div className={styles.cardContent}>
        <Row gutter={16}>
          {data?.map((bird) => (
            <div className={styles.cardDetail} key={bird.id}>
              <Col span={8}>
                <ProductCard bird={bird} />
              </Col>
            </div>
          ))}
        </Row>
      </div>
      <div className={styles.paginationProduct}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default ProductList;
