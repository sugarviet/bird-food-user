import { useState } from "react";
import {
  useGetAllBirdFood,
  useGetAllBirdFoodByCategory,
} from "../../../services/Product/services";

function useProductList() {
  const [type, setType] = useState("products");
  const [param, setParam] = useState({});

  const responseHandlers = {
    products: useGetAllBirdFood,
    "products-by-category": useGetAllBirdFoodByCategory,
  };

  const responseHandler = responseHandlers[type];

  const { data: products, isLoading: isProductsLoading } =
    responseHandler(param);

  return {
    products,
    isProductsLoading,
    setType,
    setParam,
  };
}

export default useProductList;
