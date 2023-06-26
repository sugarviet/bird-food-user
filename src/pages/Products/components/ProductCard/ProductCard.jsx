import PropTypes from 'prop-types';
import { EyeTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import { Card , notification} from 'antd'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom';
import useProductToCart from './hooks/useProductToCart';

ProductCard.propTypes = {
  bird: PropTypes.shape({
    image: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

function ProductCard({ bird }) {
  const { Meta } = Card;
  const addToCart = useProductToCart();
  const handleAddToCart = () => {
    addToCart(bird);
    openNotification(bird.productName);
  };

  const openNotification = (productName) => {
    notification.open({
      message: 'Successfully added',
      description: `Add successful ${productName}`,
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
      actions={[
        <div className={styles.actionProduct} key={"keyId"}>
          <Link to={`/products/${bird._id}`} className={styles.actionDetailProduct}>
            <EyeTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
            <p className={styles.actionTextProduct}>View detail</p>
          </Link>
          <hr />
          <a className={styles.actionDetailProduct} onClick={handleAddToCart}>
            <ShoppingTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
            <p className={styles.actionTextProduct}>Add to cart</p>
          </a>
        </div>
      ]}
    >
      <Meta
        title={<p className={styles.titleProduct}>{bird?.productName}</p>}
        description={
          <div className={styles.titlePrice}>
            <p className={styles.priceProduct}>${bird?.price}</p>
            <p className={styles.priceSaleProduct}>$29</p>
          </div>
        }
      />
    </Card>
  );
}

export default ProductCard;
