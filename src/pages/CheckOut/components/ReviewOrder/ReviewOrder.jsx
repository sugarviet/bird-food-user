import { Collapse, Row, Col, Button, Select, Input } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Form from "../Form/Form";
import ProductTable from "../ProductTable";
import ComboTable from "../ComboTable";
import styles from "./ReviewOrder.module.css";
import PaymentMethod from "../PaymentMethod";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { provinces as defaultProvinces } from "../../../UserProfile/components/AddressForm/provinces";

const { Panel } = Collapse;

ReviewOrder.propTypes = {
  shippingInputList: PropTypes.array.isRequired,
  cartItems: PropTypes.array.isRequired,
};

function ReviewOrder({ shippingInputList, cartItems, handleCheckOut, onAddressChange, shippingAddress }) {
  const [formValues, setFormValues] = useState({});

  const [address, setAddress] = useState();
  const [province, setProvince] = useState({});
  const [city, setCity] = useState({});
  const [ward, setWard] = useState({});

  const provinces = defaultProvinces;
  const [cities, setCities] = useState([]);
  const [wards, setWards] = useState([]);

  const handleAddressChange = (e) => 
  {
    const newAddress = {...shippingAddress, address: e.target.value}
    onAddressChange(newAddress)
    setAddress(e.target.value)
  }

  const handleProvinceChange = (value, key) => {
    setProvince({ name: value, id: key.key });
    const newCities = provinces.find((p) => p.code == key.key).districts;

    const newAddress = {...shippingAddress, province_name: value}
    onAddressChange(newAddress)
    setCities(newCities);
  };

  const handleCityChange = (value, key) => {
    setCity({ name: value, id: key.key });

    const newWards = provinces
      .find((p) => p.code == province.id)
      .districts.find((d) => d.code == key.key).wards;

    const newAddress = {...shippingAddress, district_name: value}
    onAddressChange(newAddress)

    setWards(newWards);
  };

  const handleWardChange = (value, key) => {
    setWard({ name: value, id: key.key });
    const newAddress = {...shippingAddress, ward_name: value}
    onAddressChange(newAddress)
  };

  const detail_product = cartItems.detail_product.map((item) => ({
    productId: item._id,
    quantity: item.quantity,
  }));
  const detail_combo = cartItems.detail_combo.map((item) => ({
    comboId: item._id,
    quantity: item.quantity,
  }));

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  var total = cartItems.detail_product.reduce((total, current) => {
    return total + current.quantity * current.price;
  }, 0);
  var total =
    total +
    cartItems.detail_combo.reduce((total, current) => {
      return total + current.quantity * current.price;
    }, 0);

  return (
    <Row style={{ margin: "2rem 0", padding: "0 4rem" }} gutter={16}>
      <Col span={16}>
        <Collapse
          style={{ fontWeight: "700", borderRadius: "0" }}
          size="large"
          expandIcon={() => (
            <CheckCircleFilled style={{ color: "var(--primary-color)" }} />
          )}
        >
          <Panel header="Shipping Detail" className={`${styles.panel}`}>
            <Form
              inputList={shippingInputList}
              onFormChange={handleFormChange}
            />
            <Row gutter={8}>
              <Col span={24} style={{ margin: "1rem 0" }}>
                <Input
                  className={styles.input}
                  prefix={<EnvironmentOutlined />}
                  value={address}
                  defaultValue={shippingAddress ? shippingAddress.address : "Address"}
                  onChange={handleAddressChange}
                />
              </Col>
              <Col span={8} style={{ margin: "1rem 0" }}>
                <Select
                  style={{
                    width: "100%",
                  }}
                  value={province.name}
                  defaultValue={shippingAddress ? shippingAddress.province_name : "Select a province"}
                  onChange={handleProvinceChange}
                  options={provinces.map((province) => ({
                    key: province.code,
                    label: province.name,
                    value: province.name,
                  }))}
                />
              </Col>
              <Col span={8} style={{ margin: "1rem 0" }}>
                <Select
                  style={{
                    width: "100%",
                  }}
                  value={city.name}
                  onChange={handleCityChange}
                  defaultValue={shippingAddress ? shippingAddress.district_name : "Select a city"}
                  options={cities.map((city) => ({
                    key: city.code,
                    label: city.name,
                    value: city.name,
                  }))}
                />
              </Col>
              <Col span={8} style={{ margin: "1rem 0" }}>
                <Select
                  style={{
                    width: "100%",
                  }}
                  value={ward.name}
                  onChange={handleWardChange}
                  defaultValue={shippingAddress ? shippingAddress.ward_name : "Select a ward"}
                  options={wards.map((ward) => ({
                    key: ward.code,
                    label: ward.name,
                    value: ward.name,
                  }))}
                />
              </Col>
            </Row>
          </Panel>
        </Collapse>

        <Collapse
          style={{ fontWeight: "700", borderRadius: "0" }}
          size="large"
          expandIcon={() => (
            <CheckCircleFilled style={{ color: "var(--primary-color)" }} />
          )}
        >
          <Panel header="Cart Details" className={`${styles.panel}`}>
            <ProductTable products={cartItems.detail_product} />
            <ComboTable combos={cartItems.detail_combo} />
          </Panel>
        </Collapse>

        <Collapse
          style={{ fontWeight: "700", borderRadius: "0" }}
          size="large"
          expandIcon={() => (
            <CheckCircleFilled style={{ color: "var(--primary-color)" }} />
          )}
        >
          <Panel header="Payment method" className={`${styles.panel}`}>
            <PaymentMethod />
          </Panel>
        </Collapse>
      </Col>
      <Col span={8}>
        <Collapse style={{ fontWeight: "700", borderRadius: "0" }} size="large">
          <table style={{ textAlign: "center" }}>
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
              {cartItems.detail_product?.map((product) => (
                <tr key={product.id}>
                  <td>{product.productName}</td>
                  <td>{`${(
                    product.quantity * product.price
                  ).toLocaleString()} VND`}</td>
                </tr>
              ))}
              <tr>
                <td>Combo</td>
                <td>Total</td>
              </tr>
              {cartItems.detail_combo?.map((combo) => (
                <tr key={combo.id}>
                  <td>{combo.comboName}</td>
                  <td>{`${(
                    combo.quantity * combo.priceAfterDiscount
                  ).toLocaleString()} VND`}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td>{`${total.toLocaleString()} VND`}</td>
              </tr>
            </tbody>
          </table>
        </Collapse>
        <Button
          onClick={() => handleCheckOut(detail_product, detail_combo, total)}
          style={{ marginTop: "1rem" }}
          type="primary"
          shape="round"
          size="large"
        >
          {" "}
          Check out{" "}
        </Button>
      </Col>
    </Row>
  );
}

export default ReviewOrder;
