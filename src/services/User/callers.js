import axios from "axios";

import {
  USER_API,
  USER_SELECTED_ITEM_API,
  USER_ORDER_DONE,
  USER_ORDER_SHIPPING,
  USER_ORDER_PENDING,
  CANCEL_ORDER,
  USER_ORDER_CANCEL,
} from "./api_path";

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

const instance = axios.create({
  withCredentials: true,
});

export const getOrderPending = async () => {
  const res = await instance.get(USER_ORDER_PENDING);
  return res.data;
};
export const getOrderShipping = async () => {
  const res = await instance.get(USER_ORDER_SHIPPING);
  return res.data;
};
export const getOrderDone = async () => {
  const res = await instance.get(USER_ORDER_DONE);
  return res.data;
};
export const getOrderCancel = async () => {
  const res = await instance.get(USER_ORDER_CANCEL);
  return res.data;
};
export const cancelOrder = async (data) => {
  const res = await instance.put(CANCEL_ORDER, data);
  return res;
};
