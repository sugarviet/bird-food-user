import { Collapse, Row, Col, Button } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Form from "../Form/Form";
import ProductTable from "../ProductTable";
import styles from './ReviewOrder.module.css'
import PaymentMethod from "../PaymentMethod";
import { useEffect, useState } from "react";

const { Panel } = Collapse

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

function ReviewOrder({ shippingInputList, selectedProducts }) {
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        var result = selectedProducts.reduce((total, current) => {
            return total + current.quantity * current.price;
        }, 0)

        setTotal(result)
    }, [])

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
                        <ProductTable products={selectedProducts} />
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
                    <table>
                        <tr>
                            <th>Order Detail</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>Product</td>
                            <td>Total</td>
                        </tr>
                        {selectedProducts.map(product => {
                            <tr>
                                <td>{product.name}</td>
                                <td>{`$ ${product.quantity * product.price}`}</td>
                            </tr>
                        })}
                        <tr>
                            <td>Total</td>
                            <td>{`${total} VND`}</td>
                        </tr>
                    </table>
                </Collapse>
                <Button style={{ marginTop: '1rem' }} type="primary" shape="round" size='large'> Check out </Button>
            </Col>
        </Row>
    );
}

export default ReviewOrder;