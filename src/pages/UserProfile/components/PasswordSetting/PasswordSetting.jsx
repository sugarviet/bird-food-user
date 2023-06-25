import { useState } from 'react';
import ValidationInput from '../ValidationInput';
import styles from './PasswordSetting.module.css'
import { Row, Col, Input } from 'antd';

function PasswordSetting() {
    const [curPassword, setCurPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = () => {
        // TODO call API to Change Password
    }

    return (
        <div className={`${styles.wrapper}`}>
            <span className={`${styles.title}`}>Change password</span>
            <div>
                <Row>
                    <Col span={24}>
                        <ValidationInput onChange={value => setCurPassword(value)} value={curPassword} validateTypes={['required']} title='Current password'/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ValidationInput onChange={value => setNewPassword(value)} type={'password'} value={newPassword} validateTypes={['required']} title='New password'/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ValidationInput onChange={value => setConfirmPassword(value)} type={'password'} comparator={newPassword} value={confirmPassword} validateTypes={['required', 'similar']} title='Confirm password'/>
                    </Col>
                </Row>
            </div>
            <button className={`${styles.updateBtn}`}>Change password</button>
        </div>
    );
}

export default PasswordSetting;