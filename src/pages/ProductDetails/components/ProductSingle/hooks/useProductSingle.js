import { useState } from 'react';
import { useGetBirdFoodById } from '../../../../../services/Product/services';

function useProductSingle(id)
{
    const {data: product} = useGetBirdFoodById(id);

    const [quantity, setQuantity] = useState(1);

    const handlePlusButtonClick = () => {
        setQuantity(quantity + 1);
    }

    const handleMinusButtonClick = () => {
        if(quantity <= 1) return;

        setQuantity(quantity - 1);
    }

    const handleSizeSelectionChange = () => {
    
    }

    return {
        product,
        quantity,
        handlePlusButtonClick,
        handleMinusButtonClick,
        handleSizeSelectionChange
    }
}

export default useProductSingle