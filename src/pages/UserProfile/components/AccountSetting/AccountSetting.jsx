import { Col, Row } from 'antd';
import styles from './AccountSetting.module.css'
import ValidationInput from '../ValidationInput';

function AccountSetting() {
    return (
        <div className={`${styles.wrapper}`}>
            <span className={`${styles.title}`}>Change user information here</span>
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <ValidationInput
                            validateTypes={['required']}
                            title='Full name'
                        />
                    </Col>
                    <Col span={12}>
                        <ValidationInput
                            type='number'
                            validateTypes={['required', 'phone']}
                            title='Phone'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ValidationInput
                            validateTypes={['required']}
                            title='Address'
                        />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <ValidationInput
                            validateTypes={['required']}
                            title='City'
                        />
                    </Col>
                    <Col span={12}>
                        <span className={`${styles.smallText}`}>Province</span>
                        <ValidationInput
                            validateTypes={['required']}
                            title='Province'
                        />
                    </Col>
                </Row>
            </div>
            <button className={`${styles.updateBtn}`}>Update information</button>
        </div>
    );
}

export default AccountSetting;