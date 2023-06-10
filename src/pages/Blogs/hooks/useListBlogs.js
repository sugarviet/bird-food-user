import { useGetAllBlog } from "../../../services/Blog/services";

function useListBlogs() {
  const { data, isLoading } = useGetAllBlog();

  return {
    data,
    isLoading
  };
}

export default useListBlogs;
