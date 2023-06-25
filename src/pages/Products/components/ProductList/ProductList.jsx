import styles from "./ProductList.module.css";
import { Button, Space, Col, Row, Pagination } from "antd";
import useProductList from "../../hooks/useProductList";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../../../../components/Loading";
import useCategories from "../../hooks/useCategories";
import { useGetAllCategory } from "../../../../services/Category/services";
import { useState } from "react";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  
  const { products, isProductsLoading, setType, setParam } = useProductList();
  const { categories, isCategoriesLoading } = useCategories();
  
  if (isProductsLoading || isCategoriesLoading) {
    return <Loading />;
  }

  const handleSelectCategory = (categoryId) => {
    const categoryName = categories.find(category => category._id == categoryId).categoryName
    
    setType('products-by-category')
    setParam({categoryName: categoryName, page: 1})
    setSelectedCategory(categoryId)
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
            {categories.map((category) => (
              <Button
                type={selectedCategory == category._id ? "primary" : "default"}
                key={category._id}
                size="large"
                className={styles.textCategory}
                onClick={() => handleSelectCategory(category._id)}
              >
                {category.categoryName}
              </Button>
            ))}
          </Space>
        </div>
      </div>
      <div className={styles.cardContent}>
        <Row gutter={16}>
          {products.map((bird) => (
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
