import { request } from "../../utils/axios";
import { API } from "./api_path";

export const searchAllProducts = async (search) => {
  const res = await request.get(API.SEARCH_BY_PRODUCTS, {
    params: {
      search: search,
    },
  });

  return res.data.listProduct;
};

export const searchAllCombos = async (search) => {
  const res = await request.get(API.SEARCH_BY_COMBOS, {
    params: {
      comboName: search,
    },
  });

  return res.data.listCombo;
};
