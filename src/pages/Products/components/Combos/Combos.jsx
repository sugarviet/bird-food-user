import { Card, Col, Pagination, notification, List, Select } from "antd";
import styles from "./Combos.module.css";
import { Link } from "react-router-dom";
import { EyeTwoTone, ShoppingTwoTone } from "@ant-design/icons";

import useComboList from "../../hooks/useComboList";
import Loading from "../../../../components/Loading/Loading";
import { useState } from "react";
import { useToken } from "../../../../services/Login/services";
import useCart from "../../../Cart/hooks/useCart";

const { Meta } = Card;

const PRICE_DES = "Price High to Low"
const PRICE_INS = "Price Low to High"

const sortingOptions=[
  { value: PRICE_DES, label: PRICE_DES },
  { value: PRICE_INS, label: PRICE_INS },
]

const Combos = () => {
  const isLogged = useToken();

  const [sortBy, setSortBy] = useState()

  const [currentPageCombo, setCurrentPageCombo] = useState(1);

  const { handleAddCombo } = useCart();

  const { data, isLoading } = useComboList();

  if (isLoading) {
    return <Loading />;
  }

  const handleAddToCart = (bird) => {
    handleAddCombo(bird);
  };

  const handlePageComboChange = (page) => {
    setCurrentPageCombo(page);
  };

  const handleSorting = (value) => {
    switch(value)
    {
      case PRICE_DES:
          data.sort((a, b) => b.priceAfterDiscount - a.priceAfterDiscount)
          break;
      case PRICE_INS:
          data.sort((a, b) => a.priceAfterDiscount - b.priceAfterDiscount)
          break;
      default:
          break;
    }
    setSortBy(value)
  }

  return (
    <div className={styles.textBanner}>
      <div className={styles.hrContent}>
        <hr className={styles.hrTop} />
        <hr className={styles.hrBot} />
      </div>
      <div className={styles.flexBetween}>
        <h1 className={styles.textProducts}>Our Combos</h1>
        <Select
      placeholder="Sort By"
      value={sortBy}
      options={sortingOptions}
      style={{ width: 'max-content' }}
      onChange={handleSorting}
    />
      </div>
      
      <div className={styles.textDevide}>
        <div className={styles.categoryContent}></div>
      </div>
      <div className={styles.cardContent}>
         <List
          grid={{
            gutter: 16,
            column: 4,
          }}
          dataSource={data}
          pagination={{ 
            pageSize: 8,
            current: currentPageCombo,
            onChange: handlePageComboChange,
            hideOnSinglePage: true
          }}
          renderItem={(bird) => (
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
                          to={`/combos/${bird._id}`}
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
                            {bird?.priceAfterDiscount.toLocaleString()} đ
                          </p>
                          <p className={styles.priceSaleProduct}>{`${(bird?.priceAfterDiscount * 100/90).toLocaleString()} đ`}</p>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              </div>
            </List.Item>
          )}
        />
      </div>
      <div className={styles.paginationProduct}>
        <Pagination hideOnSinglePage />
      </div>
    </div>
  );
};
export default Combos;
