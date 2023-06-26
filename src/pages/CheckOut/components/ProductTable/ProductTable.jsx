import PropTypes from 'prop-types';
import { Col, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from 'react';
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


function ProductTable({ products,onDeleteProduct }) {

    const [updatedProducts, setUpdatedProducts] = useState(products);

    const handleDeleteProduct = (index) => {
        const newProducts = [...updatedProducts];
        newProducts.splice(index, 1);
        setUpdatedProducts(newProducts);
        onDeleteProduct(newProducts);
    };
    return (
        <>
            <Row className={`${styles.productWrapperHeader}`}>
                <Col span={2}>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={8}>
                    <div className={`${styles.flexCol}`}>
                        <span className={`${styles.textCenter}`}>Product name</span>
                    </div>
                </Col>
                <Col span={2}>
                    <div className={`${styles.flexCenter}`}>
                        <span style={{ width: '100%', textAlign: 'center' }}>Price</span>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={`${styles.flexCenter}`} style={{ padding: '0 .5rem' }}>
                        <span style={{ width: '100%', textAlign: 'center' }}>Quantity</span>
                    </div>
                </Col>
                <Col span={2}>
                    <div className={`${styles.flexCenter}`}>
                        <span style={{ width: '100%', textAlign: 'center' }}>Total</span>
                    </div>
                </Col>
            </Row>

            {updatedProducts.map((product, index) => (
                <Row className={`${styles.productWrapper}`} key={index}>
                    <Col span={2}>
                        <a className={`${styles.remove}`} onClick={() => handleDeleteProduct(index)} ><DeleteOutlined /></a>
                    </Col>
                    <Col span={2}>
                        <div className={styles.flexCenter}>
                            <img className={`${styles.image}`} src={product.image} />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className={`${styles.flexCol}`}>
                            <span className={`${styles.textCenter}`}>{product.productName}</span>
                            <span className={`${styles.textCenter} ${styles.textNormal}`}>{product.description}</span>
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className={`${styles.flexCenter}`}>
                            <span style={{ width: '100%', textAlign: 'center' }}>{`${product.price} VND`}</span>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className={`${styles.flexCenter}`} style={{ padding: '0 .5rem' }}>
                            <input style={{ flex: 1 }} type="number" value={product.quantity} readOnly className={`${styles.quantity}`} />
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className={`${styles.flexCenter}`}>
                            <span style={{ width: '100%', textAlign: 'center' }}>{`${product.price * product.quantity} VND`}</span>
                        </div>
                    </Col>
                </Row>
            ))}
        </>
    );
}

export default ProductTable;