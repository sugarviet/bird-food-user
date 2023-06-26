import { useState } from 'react';
import ValidationInput from '../ValidationInput';
import styles from './PasswordSetting.module.css'
import { Row, Col } from 'antd';
import { useUpdateUserPassword } from '../../../../services/User/services';

function PasswordSetting() {
    const [curPassword, setCurPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {mutate: updatePassword} = useUpdateUserPassword()

    const handleSubmit = async () => {
        updatePassword({curPassword, newPassword})
        // TODO toast here
    }

    return (
        <div className={`${styles.wrapper}`}>
            <span className={`${styles.title}`}>Change password</span>
            <div>
                <Row>
                    <Col span={24}>
                        <ValidationInput onChange={value => setCurPassword(value)} type={'password'} value={curPassword} validateTypes={['required']} title='Current password'/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ValidationInput onChange={value => setNewPassword(value)} type={'password'} value={newPassword} validateTypes={['required', 'password']} title='New password'/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ValidationInput onChange={value => setConfirmPassword(value)} type={'password'} comparator={newPassword} value={confirmPassword} validateTypes={['required', 'similar']} title='Confirm password'/>
                    </Col>
                </Row>
            </div>
            <button onClick={handleSubmit} className={`${styles.updateBtn}`}>Change password</button>
        </div>
    );
}

export default PasswordSetting;