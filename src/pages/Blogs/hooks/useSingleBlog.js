import { useGetSingleBlog } from "../../../services/Blog/services";

function useSingleBlog(id) {
  const { data: blog, isLoading } = useGetSingleBlog(id);

  return {
    blog,
    isLoading
  };
}

export default useSingleBlog;
