import { Collapse, Row, Col, Button } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Form from "../Form/Form";
import ProductTable from "../ProductTable";
import styles from './ReviewOrder.module.css'
import PaymentMethod from "../PaymentMethod";
import PropTypes from 'prop-types';
import { useCheckout } from "../../../../services/Checkout/services";
import { useState } from "react";

const { Panel } = Collapse

ReviewOrder.propTypes = {
    shippingInputList: PropTypes.array.isRequired,
    cartItems: PropTypes.array.isRequired,
};

function ReviewOrder({ shippingInputList, cartItems }) {

    const { mutate } = useCheckout();
    const [formValues, setFormValues] = useState({});

    const detail_product = cartItems.map((item) => ({
        product: item.id,
        quantity: item.quantity,
    }));

    const handleFormChange = (name, value) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };
    const handleSubmitCheckout = () => {
        try {
            mutate({
                detail_product: detail_product,
                total_price: total,
                addresses: {
                    ward: formValues.Ward || shippingInputList.find(input => input.name === "Ward")?.value || "",
                    district: formValues.District || shippingInputList.find(input => input.name === "District")?.value || "",
                    province: formValues.Province || shippingInputList.find(input => input.name === "Province")?.value || "",
                },
            });
            localStorage.removeItem('cart');
        } catch (error) {
            console.error(error);
        }
    };

    var total = cartItems.reduce((total, current) => {
        return total + current.quantity * current.price;
    }, 0)
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
                        <Form inputList={shippingInputList} onFormChange={handleFormChange} />
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
                    <table style={{ textAlign: 'center' }}>
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
                <Button onClick={handleSubmitCheckout} style={{ marginTop: '1rem' }} type="primary" shape="round" size='large'> Check out </Button>
            </Col>
        </Row >
    );
}

export default ReviewOrder;