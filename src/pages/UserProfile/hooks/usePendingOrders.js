
import { useGetOrderPending } from "../../../services/User/services";


function usePendingOrders() {
    const { data, isLoading } = useGetOrderPending();

    return {
        data,
        isLoading
    };
}

export default usePendingOrders;
