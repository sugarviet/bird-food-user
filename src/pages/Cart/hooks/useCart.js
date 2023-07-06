import { useContext } from "react";
import { UserContext } from "../../../store/User";
import { setSelectedCombos, setSelectedProducts } from "../../../store/User/Reducer";
import { useUpdateUserSelectedItems } from "../../../services/User/services";

function useCart() {
  const [user, dispatch] = useContext(UserContext)
  const { mutate: updateUserSelectedItems} = useUpdateUserSelectedItems()

  const {selectedItems: items, selectedCombo: combos} = user

  const isAdded = (product, products) => {
    let addedProduct = products.find(p => p._id === product._id)

    if(!addedProduct) return false

    addedProduct.quantity += 1
    return true
  }

  const handleStoreCart = () => {
    updateUserSelectedItems({selectedProducts: items, selectedCombos: combos})
  }

  const handleAddCombo  = (combo) => 
  {
    combo.quantity = 1 

    if(isAdded(combo, combos)) return 
    
    const newCombos = [...combos, combo]

    dispatch(setSelectedCombos(newCombos))
  }

  const handleAddItem = (item) =>
  {
    item.quantity = 1

    if(isAdded(item, items)) return

    const newItems = [...items,  item]

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
    const totalItems = items.reduce( (total, current) => total + current.price * current.quantity, 0)
    const totalCombos = combos.reduce( (total, current) => total + current.priceAfterDiscount * current.quantity, 0)

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
    handleRemoveCombo,
    handleStoreCart
  };
}

export default useCart;
