import axios from "axios";

import { USER_API } from "./api_path";

export const getUserById = async (id) => {
  const res = await axios.get(`${USER_API}/${id}`)

  return res.data
}