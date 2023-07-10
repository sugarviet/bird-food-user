import { request } from "../../utils/axios";
import { API_CHECKOUT } from "./api_path";

export const checkout = async ({
  addresses,
  detail_product,
  detail_combo,
  total_price,
}) => {
  const res = await request.post(API_CHECKOUT.CHECKOUT, {
    addresses,
    detail_product,
    detail_combo,
    total_price,
  });

  return res.data;
};
