import axios from "axios";
import { API } from "./api_path";

const instance = axios.create({
  withCredentials: true,
});

export const logout = async () => {
  const res = await instance.get(API.LOGOUT);
  return res.data;
};