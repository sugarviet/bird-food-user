import axios from "axios";
import { PRODUCT_API, PRODUCT_SORT_API } from "./api_path";

export const getAllBirdFood = async () => {
  const res = await axios.get(PRODUCT_API);

  return res.data.listProduct;
};

export const getAllBirdFoodByCategory = async (categoryName) => {
  const res = await axios.get(`${PRODUCT_SORT_API}?type=${categoryName}`);
  return res.data.listProduct;
};

export const getBirdFoodById = async (id) => {
  const res = await axios.get(`${PRODUCT_API}/${id}`);

  return res.data.product;
};
