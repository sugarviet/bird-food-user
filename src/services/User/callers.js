import axios from "axios";

import { USER_API, USER_SELECTED_ITEM_API } from "./api_path";

export const getUserByUserName = async (username) => {
  const res = await axios.get(`${USER_API}/${username}`)

  return res.data.user
}

export const updateProfile = async (body) => {
  const res =  await axios.create({withCredentials: true,})
                          .put(USER_API, {data: body});

  return res.data
}

export const updateSelectedItems = async (body) => {
  console.log(body)
  const res = await axios.create({withCredentials: true,})
                          .post(USER_SELECTED_ITEM_API, body)

  return res.data
}