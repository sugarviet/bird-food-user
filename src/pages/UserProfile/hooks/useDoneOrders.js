
import { useGetOrderDone } from "../../../services/User/services";


function usePendingOrders() {
    const { data, isLoading } = useGetOrderDone();

    return {
        data,
        isLoading
    };
}

export default usePendingOrders;
