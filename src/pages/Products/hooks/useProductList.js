import { useGetAllBirdFood } from "../../../services/Product/services";
import { useState } from "react";

function useProductList() {
  const { data, isLoading } = useGetAllBirdFood();
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return {
    activeButton,
    handleButtonClick,
    data,
    isLoading
  };
}

export default useProductList;
