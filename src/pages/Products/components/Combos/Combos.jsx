import { Card, Row, Col, Pagination, notification } from "antd";
import styles from "./Combos.module.css";
import { Link } from "react-router-dom";
import { EyeTwoTone, ShoppingTwoTone } from "@ant-design/icons";

import useComboList from "../../hooks/useComboList";
import { useToken } from "antd/es/theme/internal";
import Loading from "../../../../components/Loading/Loading";

const { Meta } = Card;

const Combos = () => {
  const isLogged = useToken();

  const { data, isLoading } = useComboList();

  if (isLoading) {
    return <Loading />;
  }

  const handleAddToCart = () => {
    try {
      // addToCart(bird);
      // openNotification(bird.productName);
    } catch (error) {
      openNotificationError(error.message);
    }
  };

  // const openNotification = (productName) => {
  //   notification.success({
  //     message: 'Successfully added',
  //     description: `${productName}  has been added to cart.`,
  //     duration: 2,
  //   });
  // };
  const openNotificationError = (productName) => {
    notification.error({
      message: "Error",
      description: `You have reached the maximum quantity available for ${productName}.`,
      duration: 2,
    });
  };
  // const values = [20000, 50000, 70000, 90000];
  // const randomValue = values[Math.floor(Math.random() * values.length)];
  // const totalAmount = bird?.price + randomValue;
  // const formattedAmount = totalAmount.toLocaleString();

  return (
    <div className={styles.textBanner}>
      <div className={styles.hrContent}>
        <hr className={styles.hrTop} />
        <hr className={styles.hrBot} />
      </div>
      <h1 className={styles.textProducts}>Our Combos</h1>
      <div className={styles.textDevide}>
        <div className={styles.categoryContent}></div>
      </div>
      <div className={styles.cardContent}>
        <Row gutter={16}>
          {data.map((bird) => (
            <div className={styles.cardDetail} key={bird._id}>
              <Col span={8}>
                <Card
                  hoverable
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      style={{ height: 300 }}
                      alt={bird?.image}
                      src={bird?.image}
                    />
                  }
                  actions={[
                    <div className={styles.actionProduct} key={"keyId"}>
                      <Link
                        to={`/products/${bird._id}`}
                        className={styles.actionDetailProduct}
                      >
                        <EyeTwoTone
                          className={styles.actionIconProduct}
                          twoToneColor="#3cbb15"
                        />
                        <p className={styles.actionTextProduct}>View detail</p>
                      </Link>
                      <hr />
                      {isLogged ? (
                        <a
                          className={styles.actionDetailProduct}
                          onClick={handleAddToCart}
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
          ))}
        </Row>
      </div>
      <div className={styles.paginationProduct}>
        <Pagination hideOnSinglePage />
      </div>
    </div>
  );
};
export default Combos;
