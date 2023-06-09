import { useGetAllBirdFood } from "../../../services/Product/services";

function useProductList() {

  const { data, isLoading } = useGetAllBirdFood();

  return {
    data,
    isLoading
  };
}

export default useProductList;
