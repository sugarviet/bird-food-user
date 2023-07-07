import axios from "axios";
import { API_CHECKOUT } from "./api_path";

const instance = axios.create({
  withCredentials: true,
});

export const checkout = async ({
  addresses,
  detail_product,
  detail_combo,
  total_price,
}) => {
  console.log("dataReservation", {
    addresses,
    detail_product,
    detail_combo,
    total_price,
  });
  const res = await instance.post(API_CHECKOUT.CHECKOUT, {
    addresses,
    detail_product,
    detail_combo,
    total_price,
  });

  return res.data;
};
