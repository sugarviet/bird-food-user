import styles from './AddressCard.module.css'
import { Tag } from 'antd';
import { CheckOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

AddressCard.propTypes = {
    address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        province: PropTypes.string,
        isDefault: PropTypes.bool
    }),
    onSetDefault: PropTypes.func
}

function AddressCard({ address, onSetDefault }) {
    return (
        <div className={`${styles.wrapper}`}>
            {address == undefined ?
                <Fragment>
                    <button className={`${styles.addNew}`}>
                        <span><PlusOutlined/></span>
                        <a className={`${styles.smallText} ${styles.marginRight4} ${styles.primaryColor}`}>Add new address</a>
                    </button>
                </Fragment>
                :
                <Fragment>
                    <div className={`${styles.flexBetween} ${styles.flexCol} ${styles.fullHeight}`}>
                        <div className={`${styles.detail}`}>
                            <span>{address.street}</span>
                            <span>{`${address.city}, ${address.province}`}</span>
                        </div>
                        <div>
                            <a className={`${styles.smallText} ${styles.marginRight4} ${styles.primaryColor}`}>Edit address</a>

                            {address.isDefault && <Tag className={`${styles.xSmallText}`} icon={<CheckOutlined />} color='#3cb815'>
                                <span className={`${styles.xSmallText}`}>DEFAULT</span>
                            </Tag>}
                        </div>
                    </div>

                    <button className={`${styles.removeBtn}`}><CloseOutlined /></button>
                </Fragment>
            }
        </div>
    );
}

export default AddressCard;