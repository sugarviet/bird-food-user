import { useGetAllBirdFood } from "../../../services/Product/services";

function useProductList() {

  const { data: products, isLoading: isProductsLoading } = useGetAllBirdFood();

  return {
    products,
    isProductsLoading,
  };
}

export default useProductList;
