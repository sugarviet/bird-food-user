import axios from 'axios';
import { API } from './api_path';


const instance = axios.create({
  withCredentials: true,
});

export const login = async ({username,password}) => {
    console.log("dataLogin", { username, password });
  const res = await instance.post(API.LOGIN, { username, password });

  return res.data;
}