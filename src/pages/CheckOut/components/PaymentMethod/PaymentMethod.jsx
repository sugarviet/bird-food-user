import { Radio } from 'antd';
import { useState } from 'react';

const options = [
    {
        label: <img src='https://cdn-icons-png.flaticon.com/512/3796/3796142.png' />,
        value: 'cod',
        description: 'making payment if receving goods'
    },
    {
        label: <img src='https://aux2.iconspalace.com/uploads/paypal-payment-icon-256.png' />,
        value: 'paypal',
        description: 'making payment by paypal'
    },
    {
        label: <img src='https://static.mservice.io/img/logo-momo.png' />,
        value: 'momo',
        description: 'making payment by momo'
    }
]

function PaymentMethod() {
    const [choice, setChoice] = useState(options[0].value)
    const [description, setDescription] = useState(options[0].description);

    const handleOptionChange = ({ target: { value }}) => {
        setChoice(value)
        setDescription(() => options.find(option => option.value === value).description)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Radio.Group options={options} onChange={handleOptionChange} value={choice} optionType="button" />

            <div>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default PaymentMethod;