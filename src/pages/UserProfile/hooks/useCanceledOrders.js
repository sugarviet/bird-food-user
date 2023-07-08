import { useGetOrderCancel } from "../../../services/User/services";

function usePendingOrders() {
  const { data, isLoading } = useGetOrderCancel();

  return {
    data,
    isLoading,
  };
}

export default usePendingOrders;
