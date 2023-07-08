import axios from "axios";

import { COMBO_API } from "./api_path";

export const getAllCombos = async () => {
  const res = await axios.get(COMBO_API);

  return res.data.listCombo;
};

export const getComboDetail = async (comboId) => {
  const res = await axios.get(`${COMBO_API}/${comboId}`);

  return res.data.combo;
};
