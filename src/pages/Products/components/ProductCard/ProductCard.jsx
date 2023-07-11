import PropTypes from 'prop-types';
import { EyeTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import { Card, Tag, notification } from 'antd'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom';
import { useToken } from "../../../../services/Login/services"

ProductCard.propTypes = {
  bird: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

function ProductCard({ bird, handleAddItem }) {

  const isLogged = useToken();
  const { Meta } = Card;

  const handleAddToCart = () => {
    try {
      handleAddItem(bird);
    } catch (error) {
      openNotificationError(error.message)
    }
  };

  const openNotificationError = (productName) => {
    notification.error({
      message: 'Error',
      description: `You have reached the maximum quantity available for ${productName}.`,
      duration: 2,
    });
  };


  return (
      <Card
        hoverable
        style={{
          width: 300,
        }}
        cover={
          <img
            src={bird?.image}
          />
        }
        actions={
          [
          <div className={styles.actionProduct} key={"keyId"}>
            {/* <Link to={`/products/${bird._id}`} className={styles.actionDetailProduct}>
              <EyeTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
              <p className={styles.actionTextProduct}>View detail</p>
            </Link>
            <hr />
            {isLogged ? (
              <a className={styles.actionDetailProduct} onClick={handleAddToCart}>
                <ShoppingTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
                <p className={styles.actionTextProduct}>Add to cart</p>
              </a>
            ) : (
              <Link to="/login">
                <ShoppingTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
                <p className={styles.actionTextProduct}>Add to cart</p>
              </Link>
            )} */}

            {bird.quantity <= 0 ? <Tag style={{fontSize: 'large', padding: '.5rem 1rem'}} /> : <> <Link to={`/products/${bird._id}`} className={styles.actionDetailProduct}>
              <EyeTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
              <p className={styles.actionTextProduct}>View detail</p>
            </Link>
            <hr />
            {isLogged ? (
              <a className={styles.actionDetailProduct} onClick={handleAddToCart}>
                <ShoppingTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
                <p className={styles.actionTextProduct}>Add to cart</p>
              </a>
            ) : (
              <Link to="/login">
                <ShoppingTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
                <p className={styles.actionTextProduct}>Add to cart</p>
              </Link>
            )}</>}
            
            {/* {bird.quantity <= 0 && <Tag style={{fontSize: 'large', padding: '.5rem 1rem'}} bordered={false} color='red'>Sold Out</Tag>} */}
          </div>
        ]
      }
      >
        <Meta
          title={<p className={styles.titleProduct}>{bird?.productName}</p>}
          description={
            <div className={styles.titlePrice}>
              <p className={styles.priceProduct}>{bird?.price.toLocaleString()} đ</p>
            </div>
          }
        />
      </Card>
  );
}

export default ProductCard;
