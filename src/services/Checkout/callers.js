import axios from "axios";
import { API_CHECKOUT } from "./api_path";

const instance = axios.create({
  withCredentials: true,
});

export const checkout = async ({detail_product,  total_price }) => {
  console.log("dataReservation", {detail_product,  total_price });
  const res = await instance.post(API_CHECKOUT.CHECKOUT, {
    detail_product,
    total_price
  });

  return res.data;
};

