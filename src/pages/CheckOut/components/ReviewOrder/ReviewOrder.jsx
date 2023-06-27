import { Collapse, Row, Col, Button } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Form from "../Form/Form";
import ProductTable from "../ProductTable";
import styles from './ReviewOrder.module.css'
import PaymentMethod from "../PaymentMethod";
import PropTypes from 'prop-types';

const { Panel } = Collapse

ReviewOrder.propTypes = {
    shippingInputList: PropTypes.array.isRequired,
    cartItems: PropTypes.array.isRequired,
  };

function ReviewOrder({ shippingInputList, cartItems }) {
    console.log(cartItems)
    // const [total, setTotal] = useState(0)
    // const [data, setData] = useState(cartItems);

    var total = cartItems.reduce((total, current) => {
        return total + current.quantity * current.price;
    }, 0)

    // const handleDeleteProduct = (newProducts) => {
    //     setData(newProducts);
    //   };

    return (
        <Row style={{ margin: '2rem 0', padding: '0 4rem' }} gutter={16}>
            <Col span={16}>
                <Collapse
                    style={{ fontWeight: '700', borderRadius: '0' }}
                    size="large"
                    expandIcon={() => <CheckCircleFilled style={{ color: 'var(--primary-color)' }} />}
                >
                    <Panel
                        header="Shipping Address"
                        className={`${styles.panel}`}
                    >
                        <Form inputList={shippingInputList} />
                    </Panel>
                </Collapse>

                <Collapse
                    style={{ fontWeight: '700', borderRadius: '0' }}
                    size="large"
                    expandIcon={() => <CheckCircleFilled style={{ color: 'var(--primary-color)' }} />}
                >
                    <Panel
                        header="Cart Details"
                        className={`${styles.panel}`}
                    >
                        <ProductTable products={cartItems} />
                    </Panel>
                </Collapse>

                <Collapse
                    style={{ fontWeight: '700', borderRadius: '0' }}
                    size="large"
                    expandIcon={() => <CheckCircleFilled style={{ color: 'var(--primary-color)' }} />}
                >
                    <Panel
                        header="Payment method"
                        className={`${styles.panel}`}
                    >
                        <PaymentMethod />
                    </Panel>
                </Collapse>
            </Col>
            <Col span={8}>
                <Collapse
                    style={{ fontWeight: '700', borderRadius: '0' }}
                    size="large"
                >
                    <table style={{textAlign:'center'}}>
                        <thead>
                            <tr>
                                <th>Order Detail</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Product</td>
                                <td>Total</td>
                            </tr>
                            {cartItems?.map(product => (
                                <tr key={product.id}>
                                    <td>{product.productName}</td>
                                    <td>{`${(product.quantity * product.price).toLocaleString()} VND`}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total</td>
                                <td>{`${total.toLocaleString()} VND`}</td>
                            </tr>
                        </tbody>
                    </table>
                </Collapse>
                <Button style={{ marginTop: '1rem' }} type="primary" shape="round" size='large'> Check out </Button>
            </Col>
        </Row >
    );
}

export default ReviewOrder;