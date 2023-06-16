import { Fragment, useState } from "react";
import { Input } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import styles from './ValidationInput.module.css'

function ValidationInput({ validateTypes, title, type }) {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)

        handleBlur()
    }

    const handleBlur = () => {
        const validators = {
            email: validateEmail,
            phone: validatePhone,
            required: validateRequired,
        }

        let isValidInput = true;
        let errorMessage = '';

        validateTypes.some(type => {
            const validator = validators[type]
            isValidInput = validator(value)

            errorMessage = isValidInput ? '' : errorMessages[type];
            setMessage(errorMessage)
            if(!isValidInput) return true;
        });

        setIsValid(isValidInput)
    }

    const validateRequired = (value) => {
        return value.trim() != '';
    }

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePhone = (phone) => {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    };

    const errorMessages = {
        required: 'Please fill in the blank, it is required',
        email: 'Please enter a valid email address (ex: birdy@gmail.com)',
        phone: 'Please enter a valid phone number (ex: 0834002706)',
    };

    return (
        <Fragment>
            <span className={`${styles.title}`}>{title}</span>

            <Input
                onChange={handleChange}
                onBlur={handleBlur}
                type={type}
                value={value}
                className={`${styles.input}`}
                placeholder={title}
                status={isValid ? '' : 'error'}
            />

            {(message != '') &&
                <span className={`${styles.message}`}><WarningOutlined />  {message}</span>
            }
        </Fragment>
    );
}

export default ValidationInput;