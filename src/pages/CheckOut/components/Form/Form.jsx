import PropTypes from 'prop-types';
import { Input } from "antd";
import styles from './Form.module.css'

Form.propTypes = {
    inputList: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            prefix: PropTypes.element.isRequired
        })
    )
};

function Form({ inputList }) {
    return (
        <>
            {inputList.map(input =>
                <div key={input.name}>
                    <Input
                        size='large'
                        className={`${styles.input}`}
                        type={input.type}
                        placeholder={input.name}
                        prefix={input.prefix}
                    />
                </div>

            )}
        </>
    );
}

export default Form;