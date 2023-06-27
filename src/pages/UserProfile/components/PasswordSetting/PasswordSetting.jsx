import ValidationInput from '../ValidationInput';
import styles from './PasswordSetting.module.css'
import { Row, Col } from 'antd';

function PasswordSetting() {
    return (
        <div className={`${styles.wrapper}`}>
            <span className={`${styles.title}`}>Change password</span>
            <div>
                <Row>
                    <Col span={24}>
                        <ValidationInput validateTypes={['required']} title='Current password'/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ValidationInput validateTypes={['required']} title='New password'/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ValidationInput validateTypes={['required']} title='Confirm password'/>
                    </Col>
                </Row>
            </div>
            <button className={`${styles.updateBtn}`}>Change password</button>
        </div>
    );
}

export default PasswordSetting;