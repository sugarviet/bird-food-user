import PropTypes from 'prop-types';
import { Col, Row } from "antd";
import styles from './ProductTable.module.css'

ProductTable.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
};


function ProductTable({ products }) {

    // const [updatedProducts, setUpdatedProducts] = useState(products);

    // const handleDeleteProduct = (index) => {
    //     const newProducts = [...updatedProducts];
    //     newProducts.splice(index, 1);
    //     setUpdatedProducts(newProducts);
    //     onDeleteProduct(newProducts);
    // };
    return (
        <>
            <Row className={`${styles.productWrapperHeader}`}>
                <Col span={4}>
                <div className={`${styles.flexCol}`}>
                        <span className={`${styles.textCenter}`}>Image</span>
                    </div>
                </Col>
                <Col span={6}>
                    <div className={`${styles.flexCol}`}>
                        <span className={`${styles.textCenter}`}>Product name</span>
                    </div>
                </Col>
                <Col span={4}>
                    <div className={`${styles.flexCenter}`}>
                        <span style={{ width: '100%', textAlign: 'center' }}>Price</span>
                    </div>
                </Col>
                <Col span={6}>
                    <div className={`${styles.flexCenter}`} style={{ padding: '0 .5rem' }}>
                        <span style={{ width: '100%', textAlign: 'center' }}>Quantity</span>
                    </div>
                </Col>
                <Col span={4}>
                    <div className={`${styles.flexCenter}`}>
                        <span style={{ width: '100%', textAlign: 'center' }}>Total</span>
                    </div>
                </Col>
            </Row>

            {products.map((product) => (
                <Row className={`${styles.productWrapper}`} key={product.id}>
                    <Col span={4}>
                        <div className={styles.flexCenter}>
                            <img className={`${styles.image}`} src={product.image} />
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={`${styles.flexCol}`}>
                            <span className={`${styles.textCenter}`}>{product.productName}</span>
                            <span className={`${styles.textCenter} ${styles.textNormal}`}>{product.description}</span>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className={`${styles.flexCenter}`}>
                            <span style={{ width: '100%', textAlign: 'center' }}>{`${product.price.toLocaleString()} VND`}</span>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={`${styles.flexCenter}`} style={{ padding: '0 .5rem' }}>
                            <input style={{ flex: 1 }} type="number" value={product.quantity} readOnly className={`${styles.quantity}`} />
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className={`${styles.flexCenter}`}>
                            <span style={{ width: '100%', textAlign: 'center' }}>{`${(product.price * product.quantity).toLocaleString()} VND`}</span>
                        </div>
                    </Col>
                </Row>
            ))}
        </>
    );
}

export default ProductTable;