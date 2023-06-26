import axios from "axios";

import { USER_API } from "./api_path";

export const getUserByUserName = async (username) => {
  const res = await axios.get(`${USER_API}/${username}`)

  return res.data.user
}

export const updatePassword = async ({currentPassword, newPassword}) => {
  const res =  await axios.create({withCredentials: true,})
                          .put(USER_API, {type: 'password', currentPassword, newPassword});
  return res.data
}