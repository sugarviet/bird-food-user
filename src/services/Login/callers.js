import { request } from "../../utils/axios";
import { API } from "./api_path";

export const login = async ({ username, password }) => {
  const res = await request.post(API.LOGIN, { username, password });
  console.log(res.data);
  return res.data;
};
