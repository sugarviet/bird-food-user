import axios from 'axios';
import { API } from './api_path';


const instance = axios.create({
  withCredentials: true,
});

export const signup = async ({ username, fullName, email, phone, password, confirmPassword }) => {
  console.log("dataSignup", { username, fullName, email, phone, password, confirmPassword });
  const res = await instance.post(API.SIGNUP, { username, fullName, email, phone, password, confirmPassword });

  return res.data;
}