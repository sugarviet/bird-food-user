import { Fragment, useState } from "react";
import { Input } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import styles from './ValidationInput.module.css'

function ValidationInput({ validateTypes, title, type, value, onChange, comparator }) {
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value
        onChange(newValue)

        handleBlur(newValue)
    }

    const handleBlur = (value) => {
        const validators = {
            email: validateEmail,
            phone: validatePhone,
            password: validatePassword,
            similar: validateSimilar,
            required: validateRequired,
        }

        let isValidInput = true;
        let errorMessage = '';

        validateTypes.some(type => {
            const validator = validators[type]
            isValidInput = validator(value, comparator)

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

    const validateSimilar = (value, comparator) => {
        return value == comparator
    }

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
        return passwordPattern.test(password)
    }

    const errorMessages = {
        required: 'Please fill in the blank, it is required',
        email: 'Please enter a valid email address (ex: birdy@gmail.com)',
        phone: 'Please enter a valid phone number (ex: 0834002706)',
        password: 'Password must contain at least one lowercase, uppercase letter, a digit and at minimum length of 8',
        similar: 'Do not match value'
    };

    return (
        <Fragment>
            <span className={`${styles.title}`}>{title}</span>

            <Input
                onChange={e => handleChange(e)}
                onBlur={e => handleBlur(e.target.value)}
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