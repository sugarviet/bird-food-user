import { useQuery } from "@tanstack/react-query";
import { searchAllProducts, searchAllCombos } from "./callers";

export const useGetAllSearchProductData = (search) => {
  return useQuery({
    queryKey: ["searchProducts", search],
    queryFn: () => searchAllProducts(search),
  });
};

export const useGetAllSearchCombosData = (search) => {
  return useQuery({
    queryKey: ["searchCombos", search],
    queryFn: () => searchAllCombos(search),
  });
};
