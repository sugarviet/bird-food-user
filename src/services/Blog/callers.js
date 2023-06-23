import axios from "axios";

import { BLOG_API} from "./api_path";

export const getAllBlog = async () => {
  const res =  await axios.get(BLOG_API);

  return res.data.listBlog;
};
export const getSingleBlogById = async (id) => {
  const res =  await axios.get(`${BLOG_API}/${id}`);

  return res.data.blog;
};