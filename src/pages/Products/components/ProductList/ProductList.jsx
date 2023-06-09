import styles from './ProductList.module.css'
import { Col, Row, Pagination } from 'antd';
import useProductList from '../../hooks/useProductList'
import ProductCard from '../ProductCard/ProductCard';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function ProductList() {
    const { data, isLoading } = useProductList();

    return (

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
            </div>
            <div className={styles.cardContent}>
                {isLoading ? (<img style={{marginLeft:'550px',width:'200px'}} src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTU3Mjg2ZmQzYzlmOTA5ZmRiNjkzMjQxMDI1NDI1N2UzZWUwZWMzZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/Ra1QMzCD9V6VqxIVV6/giphy.gif'></img>) : (<Row gutter={16}>
                    {data?.map(bird => (
                        <div className={styles.cardDetail} key={bird.id}>
                            <Col span={8}>
                                <ProductCard bird={bird} />
                            </Col>
                        </div>
                    ))}
                </Row>)}

            </div>
            <div className={styles.paginationProduct}>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    );
}

export default ProductList;