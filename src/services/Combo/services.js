import { useQuery } from "@tanstack/react-query";
import { getAllCombos, getComboDetail } from "./callers";

export const useGetAllCombos = () => {
  return useQuery({
    queryKey: ["combos"],
    queryFn: () => getAllCombos(),
  });
};

export const useGetComboById = (id) => {
  return useQuery({
    queryKey: ["combo"],
    queryFn: () => getComboDetail(id)
  })
}
