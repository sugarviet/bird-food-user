import { request } from "../../utils/axios";
import { API } from "./api_path";

export const signup = async ({
  username,
  fullName,
  email,
  phone,
  password,
  confirmPassword,
}) => {
  const res = await request.post(API.SIGNUP, {
    username,
    fullName,
    email,
    phone,
    password,
    confirmPassword,
  });

  return res.data;
};
