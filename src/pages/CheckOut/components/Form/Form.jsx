import PropTypes from "prop-types";
import { Input } from "antd";
import styles from "./Form.module.css";
import { Fragment } from "react";

Form.propTypes = {
  inputList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      prefix: PropTypes.element.isRequired,
    })
  ),
  onFormChange: PropTypes.func.isRequired,
};

function Form({ inputList, onFormChange }) {
  return (
    <Fragment>
      {inputList.map((input) => (
        <div key={input.name}>
          <Input
            size="large"
            className={`${styles.input}`}
            type={input.type}
            defaultValue={input.value}
            placeholder={input.name}
            prefix={input.prefix}
            onChange={(e) => onFormChange(input.name, e.target.value)}
          />
        </div>
      ))}
    </Fragment>
  );
}

export default Form;
