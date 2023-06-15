import { Row, Col } from 'antd';
import styles from './UsernameSetting.module.css'

function UsernameSetting() {
    return (  
        <div className={`${styles.wrapper}`}>
            <Row>
                <Col span={4}>
                    <img className={`${styles.image}`} src="/src/assets/siuu.jpg" alt="" />
                </Col>
                <Col span={20}>
                    <img className={`${styles.image}`} src="/src/assets/siuu.jpg" alt="" />
                </Col>
            </Row>
        </div>
    );
}

export default UsernameSetting;