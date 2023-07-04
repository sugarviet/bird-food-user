import { Row, Col } from "antd";
import styles from "./AddressSetting.module.css";
import AddressCard from "../AddressCard";
import { useContext, useEffect, useState } from "react";
import AddressForm from "../AddressForm";
import { UserContext } from "../../../../store/User";
import { setAddresses } from "../../../../store/User/Reducer";
import { useUpdateUserProfile } from "../../../../services/User/services";

function AddressSetting() {
  const [user, dispatch] = useContext(UserContext);

  const { addresses } = user;

  const { mutate: updateAddresses } = useUpdateUserProfile();

  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);

  const handleAddAddress = (newAddress) => {
    const newAddresses = [...addresses, newAddress];

    dispatch(setAddresses(newAddresses));
    updateAddresses({ type: "addresses", addresses: newAddresses });
  };

  const handleSetAddressDefault = (address) => {
    let curDefaultAddress = addresses.find((add) => add.isDefault);
    let newAddress = addresses.find((add) => add._id === address._id);

    if (curDefaultAddress) curDefaultAddress.isDefault = false;
    if (newAddress) newAddress.isDefault = true;

    dispatch(setAddresses(addresses));

    updateAddresses({ type: "addresses", addresses: addresses });
  };

  const handleDeleteAddress = (address) => {
    const newAddresses = addresses.filter((add) => add._id != address._id);

    dispatch(setAddresses(newAddresses));
    updateAddresses({ type: "addresses", addresses: newAddresses });
  };

  useEffect(() => {
    const defaultAddress = addresses.find((address) => address.isDefault);

    dispatch(
      setAddresses([
        defaultAddress,
        ...addresses.filter((address) => !address.isDefault),
      ])
    );
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <span className={`${styles.title}`}>My addresses</span>
      <Row gutter={12}>
        <Col span={12}>
          <AddressCard handleOpenModal={() => setIsAddAddressOpen(true)} />
        </Col>

        {addresses.map((address, index) => (
          <Col key={index} span={12}>
            <AddressCard
              onDelete={handleDeleteAddress}
              onSetDefault={handleSetAddressDefault}
              address={address}
            />
          </Col>
        ))}
      </Row>
      {isAddAddressOpen && (
        <AddressForm
          callback={handleAddAddress}
          handleCloseForm={() => setIsAddAddressOpen(false)}
        />
      )}
    </div>
  );
}

export default AddressSetting;
