import { Col, Row } from 'antd';
import styles from './ProductSingle.module.css'
import { StarOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useState } from 'react';

const product = {
    name: 'Bell Pepper',
    rating: '5.0',
    image: 'https://themewagon.github.io/vegefoods/images/product-1.jpg',
    price: '100',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.',
}


const handleSizeSelectionChange = () => {

}



function ProductSingle() {

    const [quantity, setQuantity] = useState(1);

    const handlePlusButtonClick = () => {
        setQuantity(quantity + 1);
    }

    const handleMinusButtonClick = () => {
        if(quantity <= 1) return;

        setQuantity(quantity - 1);
    }

    return (
        <div className={styles.productSingleWrapper}>
            <div className={styles.productSingle}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <div className={styles.productSingleImage}>
                            <a href={product.image}>
                                <img src={product.image} />
                            </a>
                        </div>
                    </Col>

                    <Col span={12}>
                        <div className={styles.productSingleInfo}>
                            <h3 className={`${styles.fontSizeXXL}`}>{product.name}</h3>
                            <div className={`${styles.productSingleRating} ${styles.fontSizeXL}`}>
                                <p className={`${styles.productSingleRatingStar} ${styles.marginRight4}`}>
                                    <a className={styles.marginRight4}>{product.rating}</a>
                                    <a href=""><StarOutlined /></a>
                                    <a href=""><StarOutlined /></a>
                                    <a href=""><StarOutlined /></a>
                                    <a href=""><StarOutlined /></a>
                                    <a href=""><StarOutlined /></a>
                                </p>
                                <p>
                                    <a className={styles.marginRight4} style={{ color: "#000" }}>
                                        <span style={{ marginRight: "4px" }}>100</span>
                                        <span style={{ color: "#bbb" }}>Rating</span>
                                    </a>
                                </p>
                                <p>
                                    <a className={styles.marginRight4} style={{ color: "#000" }}>
                                        <span style={{ marginRight: "4px" }}>100</span>
                                        <span style={{ color: "#bbb" }}>Sold</span>
                                    </a>
                                </p>
                            </div>
                            <p className={`${styles.productSinglePrice} ${styles.fontSizeXXL}`}>
                                <span>{`$ ${product.price}`}</span>
                            </p>
                            <p style={{ color: '#808080', fontWeight: '400' }} className={`${styles.fontSizeXL}`}>
                                {product.description}
                            </p>
                            <div>
                                <div className={`${styles.marginTop4}`}>
                                    <select className={`${styles.inputBox} ${styles.clickable}`} onChange={handleSizeSelectionChange}>
                                        <option value="small">SMALL</option>
                                        <option value="medium">MEDIUM</option>
                                        <option value="large">LARGE</option>
                                        <option value="extra large">EXTRA LARGE</option>
                                    </select>
                                </div>
                                <div className={`${styles.marginTop4}`}>
                                    <button className={`${styles.inputBox} ${styles.clickable}`} onClick={handleMinusButtonClick}>
                                        <MinusOutlined />
                                    </button>
                                    <input value={quantity} name='quantity' style={{ margin: '0 .5rem' }} type='number' className={`${styles.inputBox}`} />
                                    <button className={`${styles.inputBox} ${styles.clickable}`} onClick={handlePlusButtonClick}>
                                        <PlusOutlined />
                                    </button>
                                </div>
                            </div>
                            <p>
                                <button className={`${styles.addToCartButton} ${styles.clickable} ${styles.marginTop4}`}>
                                    <span>Add to cart</span>
                                </button>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ProductSingle;