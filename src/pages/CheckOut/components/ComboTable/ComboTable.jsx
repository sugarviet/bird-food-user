import PropTypes from "prop-types";
import { Col, Row } from "antd";
import styles from "./ProductTable.module.css";

ComboTable.propTypes = {
  combos: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      comboName: PropTypes.string.isRequired,
      priceAfterDiscount: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function ComboTable({ combos }) {
  return (
    <>
      <Row className={`${styles.productWrapperHeader}`}>
        <Col span={4}>
          <div className={`${styles.flexCol}`}>
            <span className={`${styles.textCenter}`}>Image</span>
          </div>
        </Col>
        <Col span={6}>
          <div className={`${styles.flexCol}`}>
            <span className={`${styles.textCenter}`}>Combo name</span>
          </div>
        </Col>
        <Col span={4}>
          <div className={`${styles.flexCenter}`}>
            <span style={{ width: "100%", textAlign: "center" }}>Price</span>
          </div>
        </Col>
        <Col span={6}>
          <div
            className={`${styles.flexCenter}`}
            style={{ padding: "0 .5rem" }}
          >
            <span style={{ width: "100%", textAlign: "center" }}>Quantity</span>
          </div>
        </Col>
        <Col span={4}>
          <div className={`${styles.flexCenter}`}>
            <span style={{ width: "100%", textAlign: "center" }}>Total</span>
          </div>
        </Col>
      </Row>

      {combos.map((combo) => (
        <Row className={`${styles.productWrapper}`} key={combo.id}>
          <Col span={4}>
            <div className={styles.flexCenter}>
              <img className={`${styles.image}`} src={combo.image} />
            </div>
          </Col>
          <Col span={6}>
            <div className={`${styles.flexCol}`}>
              <span className={`${styles.textCenter}`}>{combo.comboName}</span>
              <span className={`${styles.textCenter} ${styles.textNormal}`}>
                {combo.description}
              </span>
            </div>
          </Col>
          <Col span={4}>
            <div className={`${styles.flexCenter}`}>
              <span
                style={{ width: "100%", textAlign: "center" }}
              >{`${combo.priceAfterDiscount.toLocaleString()} VND`}</span>
            </div>
          </Col>
          <Col span={6}>
            <div
              className={`${styles.flexCenter}`}
              style={{ padding: "0 .5rem" }}
            >
              <input
                style={{ flex: 1 }}
                type="number"
                value={combo.quantity}
                readOnly
                className={`${styles.quantity}`}
              />
            </div>
          </Col>
          <Col span={4}>
            <div className={`${styles.flexCenter}`}>
              <span style={{ width: "100%", textAlign: "center" }}>{`${(
                combo.priceAfterDiscount * combo.quantity
              ).toLocaleString()} VND`}</span>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
}

export default ComboTable;
