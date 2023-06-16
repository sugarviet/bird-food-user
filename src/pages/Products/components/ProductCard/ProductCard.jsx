import PropTypes from 'prop-types';
import { EyeTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import {Card} from 'antd'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom';


ProductCard.propTypes = {
    bird: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

function ProductCard({bird}) {
    const { Meta } = Card;

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
                    <Link to={`/products/${bird.id}`} className={styles.actionDetailProduct}>
                        <EyeTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
                        <p className={styles.actionTextProduct}>View detail</p>
                    </Link>
                    <hr />
                    <a className={styles.actionDetailProduct}>
                        <ShoppingTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
                        <p className={styles.actionTextProduct}>Add to cart</p>
                    </a>
                </div>
            ]}
        >

            <Meta
                title={<p className={styles.titleProduct}>{bird?.name}</p>}
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

ProductCard.propTypes = {
    bird: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;