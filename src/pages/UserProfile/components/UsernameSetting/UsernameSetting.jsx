import { Row, Col } from "antd";
import styles from "./UsernameSetting.module.css";
import { useContext } from "react";
import { UserContext } from "../../../../store/User";

function UsernameSetting() {
  const [user] = useContext(UserContext);

  return (
    <div className={`${styles.wrapper}`}>
      <Row>
        <Col span={4}>
          <img
            className={`${styles.image}`}
            src="https://o.rada.vn/data/image/2019/09/13/Danh-sach-Pokemon-Huyen-Thoai-3.jpg"
            alt=""
          />
        </Col>
        <Col span={20}>
          <div className={`${styles.title}`}>
            <span>{user.username}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UsernameSetting;
