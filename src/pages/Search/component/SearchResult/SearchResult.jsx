import { useLocation, Link } from "react-router-dom";
import { useGetAllSearchProductData, useGetAllSearchCombosData } from "../../../../services/Search/services";
import { useState, useEffect } from "react";
import { Col, List, Select, Card, notification } from "antd";
import Loading from "../../../../components/Loading";
import useCart from "../../../Cart/hooks/useCart";
import { EyeTwoTone, ShoppingTwoTone } from "@ant-design/icons";
import styles from "./SearchResult.module.css";
import ProductCard from "../../../Products/components/ProductCard/ProductCard";
import { useToken } from "../../../../services/Login/services";

const { Meta } = Card;


const SearchResult = () => {
  const isLogged = useToken();

  const [currentPageProduct, setCurrentPageProduct] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc"); 
  const [sortBy, setSortBy] = useState("name");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchReq = queryParams.get("q");
  const { data: products, isProductsLoading } = useGetAllSearchProductData(searchReq);
  const { data: combos, isCombosLoading } = useGetAllSearchCombosData(searchReq);
  const [sortedProducts, setSortedProducts] = useState();
  const { handleAddItem, handleAddCombo } = useCart();

  
  useEffect(() => {
    if (!isProductsLoading && !isCombosLoading && products && combos) {
      const mergedProducts = products.map((product) => ({
        ...product,
        name: product.productName,
        type: "product",
      }));

      const mergedCombos = combos.map((combo) => ({
        ...combo,
        name: combo.comboName,
        type: "combo",
      }));

      const mergedData = [...mergedProducts, ...mergedCombos];

      mergedData.sort((a, b) => {
        if (sortBy === "name") {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (sortOrder === "asc") {
            return nameA.localeCompare(nameB);
          } else {
            return nameB.localeCompare(nameA);
          }
        } else if (sortBy === "price") {
          if (sortOrder === "asc") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        }
        return 0;
      });

      setSortedProducts(mergedData);
    }
  }, [isProductsLoading, isCombosLoading, products, combos, sortBy, sortOrder]);

  const handlePageProductChange = (page) => {
    setCurrentPageProduct(page);
  };

  const handleAddToCart = (bird) => {
    console.log(bird);
    handleAddCombo(bird);

    openNotification(bird.comboName);
  };


  const openNotification = (comboName) => {
    notification.success({
      message: "Successfully added",
      description: `${comboName}  has been added to cart.`,
      duration: 2,
    });
  };

  const handleSort = (value) => {
    if (value === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(value);
      setSortOrder("asc");
    }
  };

  if (isProductsLoading) {
    return <Loading />;
  }

  if (isCombosLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardContent}>
        <div className={styles.title}>
          <h1>Results: </h1>
          <Select
            value={sortBy}
            onChange={handleSort}
            size="large"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Select.Option value="name">Sort by Name (Ascending)</Select.Option>
            <Select.Option value="-name">Sort by Name (Descending)</Select.Option>
            <Select.Option value="price">
              Sort by Price (Ascending)
            </Select.Option>
            <Select.Option value="-price">
              Sort by Price (Descending)
            </Select.Option>
          </Select>
        </div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={sortedProducts}
          pagination={{
            pageSize: 8,
            current: currentPageProduct,
            onChange: handlePageProductChange,
            hideOnSinglePage: true,
          }}
          renderItem={(bird) => {

            if(bird.productName){
              return(
              <List.Item>
                <div className={styles.cardDetail}>
                  <Col span={8}>
                    <ProductCard bird={bird} handleAddItem={handleAddItem} />
                  </Col>
                </div>
              </List.Item>
              )
            }else{
              return (
                <List.Item>
              <div className={styles.cardDetail}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <img
                        style={{ height: 300 }}
                        alt={bird?.image}
                        src={bird?.image}
                      />
                    }
                    actions={[
                      <div className={styles.actionProduct} key="keyId">
                        <Link
                          to={`/products/${bird._id}`}
                          className={styles.actionDetailProduct}
                        >
                          <EyeTwoTone
                            className={styles.actionIconProduct}
                            twoToneColor="#3cbb15"
                          />
                          <p className={styles.actionTextProduct}>
                            View detail
                          </p>
                        </Link>
                        <hr />
                        {isLogged ? (
                          <a
                            className={styles.actionDetailProduct}
                            onClick={() => handleAddToCart(bird)}
                          >
                            <ShoppingTwoTone
                              className={styles.actionIconProduct}
                              twoToneColor="#3cbb15"
                            />
                            <p className={styles.actionTextProduct}>
                              Add to cart
                            </p>
                          </a>
                        ) : (
                          <Link to="/login">
                            <ShoppingTwoTone
                              className={styles.actionIconProduct}
                              twoToneColor="#3cbb15"
                            />
                            <p className={styles.actionTextProduct}>
                              Add to cart
                            </p>
                          </Link>
                        )}
                      </div>,
                    ]}
                  >
                    <Meta
                      title={
                        <p className={styles.titleProduct}>{bird?.comboName}</p>
                      }
                      description={
                        <div className={styles.titlePrice}>
                          <p className={styles.priceProduct}>
                            {bird?.priceAfterDiscount} VND
                          </p>
                          <p className={styles.priceSaleProduct}>{`$ VND`}</p>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              </div>
            </List.Item>
              )
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchResult;
