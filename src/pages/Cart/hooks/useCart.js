import { useContext } from "react";
import { UserContext } from "../../../store/User";
import { setSelectedCombos, setSelectedProducts } from "../../../store/User/Reducer";
function useCart() {
  const [user, dispatch] = useContext(UserContext)

  const {selectedItems: items, selectedCombo: combos} = user

  console.log(user)

  const handleAddCombo  = (combo) => 
  {
    // const formattedCombo =  {...combo, productId: combo.comboId, productName: combo.comboName, price: combo.priceAfterDiscount}

    const newCombos = [...combos, combo]

    dispatch(setSelectedCombos(newCombos))
  }

  const handleAddItem = (item) =>
  {
    const newItems = [...items, item]

    dispatch(setSelectedProducts(newItems))
  }

  const handleRemoveItem = (id) => 
  {
    const newItems = items.filter(item => item.productId !== id)

    dispatch(setSelectedProducts(newItems))
  }

  const handleRemoveCombo = (id) => {
    const newCombos = combos.filter(combo => combo._id !== id)

    dispatch(setSelectedCombos(newCombos))
  }

  const getTotal = () => {
    const totalItems = items.reduce( (total, current) => total + current, 0)
    const totalCombos = combos.reduce( (total, current) => total + current , 0)

    return totalItems + totalCombos
  }

  const total = getTotal()

  return {
    items,
    combos,
    total,
    handleAddItem,
    handleAddCombo,
    handleRemoveItem,
    handleRemoveCombo
  };
}

export default useCart;
