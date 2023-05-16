import { useGetAllUsers } from "../../../../../services/Example/services";

function useExampleList(){
  const {data} = useGetAllUsers();

  return {
    data
  }
}

export default useExampleList;