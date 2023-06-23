import axios from "axios";

import { COMBO_API } from "./api_path";

export const getAllCombos = async () => {
  const res =  await axios.get(COMBO_API);

  return res.data.comboList;
};