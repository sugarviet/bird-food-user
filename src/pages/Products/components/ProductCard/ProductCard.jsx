import { EyeTwoTone, ShoppingTwoTone } from '@ant-design/icons';
import {Card} from 'antd'
import styles from './ProductCard.module.css'

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
    );
}

export default ProductCard;