import styles from "./ProductList.module.css";
import { Button, Space, Col, Row, Pagination, List } from "antd";
import useProductList from "../../hooks/useProductList";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../../../../components/Loading";
import useCategories from "../../hooks/useCategories";
import { useState } from "react";
import useCart from "../../../Cart/hooks/useCart";

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { products, isProductsLoading, setType, setParam } = useProductList();
  const { categories, isCategoriesLoading } = useCategories();
  const [currentPageProduct, setCurrentPageProduct] = useState(1);

  const { handleAddItem } = useCart();

  const handleSelectCategory = (categoryId) => {
    const categoryName = categories.find(
      (category) => category._id == categoryId
    ).categoryName;

    setType("products-by-category");
    setParam({ categoryName: categoryName });
    setSelectedCategory(categoryId);
    setCurrentPageProduct(1);
  };

  const handlePageProductChange = (page) => {
    setCurrentPageProduct(page);
  };

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
        <div className={styles.categoryContent}>
          <Space wrap>
            {categories?.map((category) => (
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
        {/* <Row gutter={16}>
          {products
            .slice((currentPageProduct - 1) * 8, currentPageProduct * 8)
            .map((bird) => (
              <div className={styles.cardDetail} key={bird._id}>
                <Col span={8}>
                  <ProductCard bird={bird} handleAddItem={handleAddItem} />
                </Col>
              </div>
            ))}
        </Row>
        <div className={styles.paginationProduct}>
        <Pagination current={currentPageProduct} total={products.length} pageSize={8} onChange={handlePageProductChange} hideOnSinglePage />
      </div> */}
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={products}
          pagination={{
            pageSize: 8,
            current: currentPageProduct,
            onChange: handlePageProductChange,
            hideOnSinglePage: true
          }}
          renderItem={(bird) => (
            <List.Item>
              <div className={styles.cardDetail}>
                <Col span={8}>
                  <ProductCard bird={bird} handleAddItem={handleAddItem} />
                </Col>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ProductList;
