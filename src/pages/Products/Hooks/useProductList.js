import { useGetAllBirdFood } from "../../../services/Example/services";

function useProductList() {
  const { data, isLoading } = useGetAllBirdFood();

  return {
    data,
    isLoading
  };
}

export default useProductList;
