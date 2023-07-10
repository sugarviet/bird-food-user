import { request } from "../../utils/axios";
import { API } from "./api_path";

export const logout = async () => {
  const res = await request.get(API.LOGOUT);
  return res.data;
};
