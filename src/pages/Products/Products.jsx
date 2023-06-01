import styles from './Products.module.css'
import Banner from './components/Banner';
import { Button, Space, Card, Col, Row } from 'antd';
import { useState } from 'react';
import useProductList from './hooks/useProductList'
import { EyeTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import { Pagination } from 'antd';

const Product = () => {

    const {activeButton, handleButtonClick, data, isLoading } = useProductList();
    const [size, setSize] = useState('large');
    const { Meta } = Card;

    return (
        <div>
            <div><Banner /></div>
            <div className={styles.textBanner}>
                <div className={styles.hrContent}>
                    <hr className={styles.hrTop} />
                    <hr className={styles.hrBot} />
                </div>
                <h1 className={styles.textProducts}>Our Products</h1>
                <div className={styles.textDevide}>
                    <div>
                        <p className={styles.textDescription}>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. <br />Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className={styles.categoryContent}>
                        <Space wrap>
                            <Button
                                size={size}
                                className={styles.textCategory}
                                type={activeButton === 1 && 'primary'}
                                onClick={() => handleButtonClick(1)}>
                                Seed
                            </Button>
                            <Button
                                size={size}
                                className={styles.textCategory}
                                type={activeButton === 2 ? 'primary' : 'default'}
                                onClick={() => handleButtonClick(2)}>
                                Mealworms
                            </Button>
                            <Button
                                size={size}
                                className={styles.textCategory}
                                type={activeButton === 3 ? 'primary' : 'default'}
                                onClick={() => handleButtonClick(3)}>
                                Peanuts
                            </Button>
                        </Space>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <Row gutter={16}>
                        {data?.map(bird => (
                            <div className={styles.cardDetail} key={bird.id}>
                                <Col span={8}>
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
                                            <div className={styles.actionProduct}>
                                                <div className={styles.actionDetailProduct}>
                                                    <EyeTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
                                                    <p className={styles.actionTextProduct}>View detail</p>
                                                </div>
                                                <hr />
                                                <div className={styles.actionDetailProduct}>
                                                    <ShoppingTwoTone className={styles.actionIconProduct} twoToneColor="#3cbb15" />
                                                    <p className={styles.actionTextProduct}>Add to cart</p>
                                                </div>
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
                                </Col>

                            </div>
                        ))}
                    </Row>
                </div>
                <div className={styles.paginationProduct}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>

    )
}

export default Product;
