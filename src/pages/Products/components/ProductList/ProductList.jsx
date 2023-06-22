import styles from "./ProductList.module.css";
import { Button, Space, Col, Row, Pagination } from "antd";
import useProductList from "../../hooks/useProductList";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../../../../components/Loading";

function ProductList() {
  const {
    products,
    isProductsLoading,
    categories,
    isCategoriesLoading,
  } = useProductList();

  if (isProductsLoading || isCategoriesLoading) {
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
            {categories.map((category, index) => (
              <Button
                size="large"
                className={styles.textCategory}
              >
                {category.categoryName}
              </Button>
            ))}
          </Space>
        </div>
      </div>
      <div className={styles.cardContent}>
        <Row gutter={16}>
          {products?.map((bird) => (
            <div className={styles.cardDetail} key={bird._id}>
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
