import { Col, Row } from "antd";
import styles from "./AccountSetting.module.css";
import ValidationInput from "../ValidationInput";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../store/User";
import { setName, setPhone } from "../../../../store/User/Reducer";
import { useUpdateUserProfile } from "../../../../services/User/services";

function AccountSetting() {
  const [user, dispatch] = useContext(UserContext);
  const [address, setAddress] = useState({});

  const { mutate: updateUserProfile } = useUpdateUserProfile();

  const handleSubmit = async () => {
    updateUserProfile({
      type: "userProfile",
      fullName: user.fullName,
      phone: user.phone,
    });
  };

  useEffect(() => {
    if (!user.username) return;

    const defaultAddress = user.addresses.find((add) => add.isDefault);
    setAddress(defaultAddress);
  }, [user]);

  return (
    <div className={`${styles.wrapper}`}>
      <span className={`${styles.title}`}>Change user information here</span>
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <ValidationInput
              validateTypes={["required"]}
              title="Full name"
              value={user.fullName}
              onChange={(value) => dispatch(setName(value))}
            />
          </Col>
          <Col span={12}>
            <ValidationInput
              type="number"
              validateTypes={["required", "phone"]}
              title="Phone"
              value={user.phone}
              onChange={(value) => dispatch(setPhone(value))}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ValidationInput
              validateTypes={["required"]}
              title="Address"
              value={address.address}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <ValidationInput
              validateTypes={["required"]}
              title="Province"
              value={address.province_name}
            />
          </Col>
          <Col span={8}>
            <ValidationInput
              validateTypes={["required"]}
              title="City"
              value={address.district_name}
            />
          </Col>
          <Col span={8}>
            <ValidationInput
              validateTypes={["required"]}
              title="Ward"
              value={address.ward_name}
            />
          </Col>
        </Row>
      </div>
      <button onClick={handleSubmit} className={`${styles.updateBtn}`}>
        Update information
      </button>
    </div>
  );
}

export default AccountSetting;
