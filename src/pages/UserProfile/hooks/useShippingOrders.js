
import { useGetOrderShipping } from "../../../services/User/services";


function usePendingOrders() {
    const { data, isLoading } = useGetOrderShipping();

    return {
        data,
        isLoading
    };
}

export default usePendingOrders;
