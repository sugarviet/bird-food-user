import axios from "axios";
import { API } from "./api_path";


export const logout = async () => {
  const res = await axios.get(API.LOGOUT);
  return res.data;
};
