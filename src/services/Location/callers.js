import axios from "axios";

import { CITY_API, PROVINCE_API } from "./api_path";

export const getProvinces = async () => {
  const res = await axios.get(PROVINCE_API);

  return res.data;
};

export const getCities = async (provinceId) => {
  const res = await axios.get(`${CITY_API}/${provinceId}`, {
    searchParams: { depth: 2 },
  });

  return res.data;
};
