import { useGetAllUsers } from "../../../../../services/Example/services";

function useExampleList() {
  const { data, isLoading } = useGetAllUsers();

  return {
    data,
    isLoading,
  };
}

export default useExampleList;
