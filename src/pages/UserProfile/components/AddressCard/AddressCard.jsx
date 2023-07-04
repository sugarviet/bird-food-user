import styles from "./AddressCard.module.css";
import { Tag } from "antd";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Fragment } from "react";

function AddressCard({ address, onSetDefault, onDelete, handleOpenModal }) {
  return (
    <div className={`${styles.wrapper}`}>
      {address == undefined ? (
        <Fragment>
          <button onClick={handleOpenModal} className={`${styles.addNew}`}>
            <span>
              <PlusOutlined />
            </span>
            <a
              className={`${styles.smallText} ${styles.marginRight4} ${styles.primaryColor}`}
            >
              Add new address
            </a>
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <div
            className={`${styles.flexBetween} ${styles.flexCol} ${styles.fullHeight}`}
          >
            <div className={`${styles.detail}`}>
              <span>{`${address.address}, ${address.ward_name}`}</span>
              <span>{`${address.district_name}, ${address.province_name}`}</span>
            </div>
            <div className={`${styles.footer}`}>
              <a
                className={`${styles.smallText} ${styles.marginRight4} ${styles.primaryColor}`}
              >
                Edit address
              </a>
              {address.isDefault && (
                <Tag
                  className={`${styles.xSmallText}`}
                  icon={<CheckOutlined />}
                  color="#3cb815"
                >
                  <span className={`${styles.xSmallText}`}>DEFAULT</span>
                </Tag>
              )}
              {address.isDefault || (
                <button
                  onClick={() => onSetDefault(address)}
                  className={`${styles.setDefaultButton}`}
                >
                  Set Default
                </button>
              )}
            </div>
          </div>

          <button
            onClick={() => onDelete(address)}
            className={`${styles.removeBtn}`}
          >
            <CloseOutlined />
          </button>
        </Fragment>
      )}
    </div>
  );
}

export default AddressCard;
