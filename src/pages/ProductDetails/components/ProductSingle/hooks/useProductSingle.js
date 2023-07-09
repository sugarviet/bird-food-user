import { useEffect, useState } from "react";
import { useGetBirdFoodById } from "../../../../../services/Product/services";
import useProductToCart from "./useProductToCart";
import { notification } from "antd";
import useCurrency from "../../../../../hooks/useCurrency";
import useCart from "../../../../Cart/hooks/useCart";

function useProductSingle(id) {
  const { data: product, isLoading } = useGetBirdFoodById(id);

  const [isOutOfStock, setIsOutOfStock] = useState(false)
  const [quantity, setQuantity] = useState(1);
  
  const {items, handleAddItem} = useCart()

  const productInCart = items.find(item => item._id === product._id)

  useEffect(() => {
    setIsOutOfStock(quantity + productInCart?.quantity > product?.quantity)
  }, [quantity])

  const handlePlusButtonClick = () => {
    setIsOutOfStock(quantity + 1 + productInCart?.quantity > product.quantity)
    if(quantity + productInCart?.quantity >= product.quantity) return
    setQuantity(quantity + 1);
  };

  const handleMinusButtonClick = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleUpdateQuantity = (quantity) => {
    const newQuantity = parseInt(quantity)
    if(newQuantity + productInCart?.quantity > product.quantity || newQuantity <= 1) return;
    setQuantity(newQuantity)
  }

  const handleSizeSelectionChange = () => {};

  const openNotification = (productName) => {
    notification.success({
      message: "Successfully added",
      description: `${productName}  has been added to cart.`,
      duration: 2,
    });
  };

  return {
    product,
    quantity,
    isOutOfStock,
    handlePlusButtonClick,
    handleMinusButtonClick,
    handleUpdateQuantity,
    handleSizeSelectionChange,
    handleAddItem,
    isLoading,
  };
}

export default useProductSingle;
