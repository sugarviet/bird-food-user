import axios from "axios";

import { API_GET_BIRDFOOD } from "./api_path";

export const getAllBirdFood = async () => {
  const res =  await axios.get(API_GET_BIRDFOOD);

  return res.data;
};