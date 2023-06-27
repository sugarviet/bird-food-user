import { useQuery } from "@tanstack/react-query";
import { getAllCombos } from "./callers";

export const useGetAllCombos = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => getAllCombos(),
  });
};
