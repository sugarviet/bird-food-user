import axios from "axios";

import { USER_API, USER_SELECTED_ITEM_API } from "./api_path";

export const getUserByUserName = async (username) => {
  const res = await axios.get(`${USER_API}/${username}`);

  return res.data.user;
};

export const updateProfile = async (body) => {
  const res = await axios
    .create({ withCredentials: true })
    .put(USER_API, { data: body });

  return res.data;
};

export const updateSelectedItems = async ({
  selectedProducts,
  selectedCombos,
}) => {
  const newProducts = selectedProducts.map((product) => ({
    productId: product.productId,
    quantity: product.quantity,
  }));
  const newCombos = selectedCombos.map((combo) => ({
    comboId: combo.comboId,
    quantity: combo.quantity,
  }));
  const res = await axios
    .create({ withCredentials: true })
    .post(USER_SELECTED_ITEM_API, {
      selectedProducts: newProducts,
      selectedCombos: newCombos,
    });

  return res.data;
};
