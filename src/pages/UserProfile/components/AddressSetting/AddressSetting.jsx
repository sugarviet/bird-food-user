import { Row, Col } from "antd";
import styles from "./AddressSetting.module.css";
import AddressCard from "../AddressCard";
import { useEffect, useState } from "react";

const addressesProp = [
  {
    street: "12A12 Nguyễn Trãi",
    city: "Mỹ Tho",
    province: "Tiền Giang",
  },
  {
    street: "12A13 Nguyễn Trãi",
    city: "Mỹ Tho",
    province: "Tiền Giang",
    isDefault: true,
  },
];

function AddressSetting() {
  const [addresses, setAddresses] = useState(addressesProp);

  useEffect(() => {
    const defaultAddress = addresses.find((address) => address.isDefault);

    setAddresses([
      defaultAddress,
      ...addresses.filter((address) => !address.isDefault),
    ]);
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <span className={`${styles.title}`}>My addresses</span>
      <Row gutter={12}>
        <Col span={12}>
          <AddressCard />
        </Col>

        {addresses.map((address, index) => (
          <Col key={index} span={12}>
            <AddressCard address={address} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AddressSetting;
