import { Input, Col, Row } from 'antd';
import styles from './AccountSetting.module.css'

function AccountSetting() {
    return (  
        <div className={`${styles.wrapper}`}>
            <span className={`${styles.title}`}>Change user information here</span>
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <span className={`${styles.smallText}`}>Full Name*</span>
                        <Input className={`${styles.marginVertical4}`} placeholder='Full Name'/>
                    </Col>
                    <Col span={12}>
                    <span className={`${styles.smallText}`}>Phone*</span>
                        <Input className={`${styles.marginVertical4}`} placeholder='Phone'/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <span className={`${styles.smallText}`}>Address</span>
                        <Input className={`${styles.marginVertical4}`} placeholder='Address'/>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <span className={`${styles.smallText}`}>City</span>
                        <Input className={`${styles.marginVertical4}`} placeholder='City'/>
                    </Col>
                    <Col span={12}>
                    <span className={`${styles.smallText}`}>Province</span>
                        <Input className={`${styles.marginVertical4}`} placeholder='Province'/>
                    </Col>
                </Row>
            </div>
            <button className={`${styles.updateBtn}`}>Update information</button>
        </div>
    );
}

export default AccountSetting;