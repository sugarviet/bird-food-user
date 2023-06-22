import { useGetAllCategory } from "../../../services/Category/services";
import { useGetAllBirdFood } from "../../../services/Product/services";

function useProductList() {

  const { data: products, isLoading: isProductsLoading } = useGetAllBirdFood();
  const { data: categories, isCategoriesLoading} = useGetAllCategory()
  return {
    products,
    isProductsLoading,
    categories,
    isCategoriesLoading
  };
}

export default useProductList;
