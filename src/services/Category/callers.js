import axios from "axios";

import { CATEGORY_API } from "./api_path";

export const getAllCategory = async () => {
  const res = await axios.get(CATEGORY_API);

  return res.data.listCategory;
};
