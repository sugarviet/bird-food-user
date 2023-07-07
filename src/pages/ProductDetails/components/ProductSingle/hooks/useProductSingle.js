import { useState } from "react";
import { useGetBirdFoodById } from "../../../../../services/Product/services";
import useProductToCart from "./useProductToCart";
import { notification } from "antd";
import useCurrency from "../../../../../hooks/useCurrency";

function useProductSingle(id) {
  const { data: product, isLoading } = useGetBirdFoodById(id);

  const [quantity, setQuantity] = useState(1);

  const addToCart = useProductToCart();

  const handlePlusButtonClick = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusButtonClick = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleSizeSelectionChange = () => {};

  const handleAddToCart = () => {
    try {
      const updatedProduct = { ...product };
      addToCart(updatedProduct, quantity);
      openNotification(product.name);
    } catch (error) {
      openNotificationError(error.message);
    }
  };

  const openNotification = (productName) => {
    notification.success({
      message: "Successfully added",
      description: `${productName}  has been added to cart.`,
      duration: 2,
    });
  };
  const openNotificationError = (productName) => {
    notification.error({
      message: "Error",
      description: `You have reached the maximum quantity available for ${productName}.`,
      duration: 2,
    });
  };
  return {
    product,
    quantity,
    handlePlusButtonClick,
    handleMinusButtonClick,
    handleSizeSelectionChange,
    handleAddToCart,
    isLoading,
  };
}

export default useProductSingle;
