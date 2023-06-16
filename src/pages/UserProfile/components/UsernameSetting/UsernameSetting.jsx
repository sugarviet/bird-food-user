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
                    <div className={`${styles.title}`}>
                        <span>Username</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default UsernameSetting;