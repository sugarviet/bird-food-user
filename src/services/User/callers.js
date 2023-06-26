import axios from "axios";

import { USER_API } from "./api_path";

export const getUserByUserName = async (username) => {
  const res = await axios.get(`${USER_API}/${username}`)

  return res.data.user
}

export const updateProfile = async (body) => {
  const res =  await axios.create({withCredentials: true,})
                          .put(USER_API, body);
  return res.data
}