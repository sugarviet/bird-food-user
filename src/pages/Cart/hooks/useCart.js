import { useContext } from "react";
import { UserContext } from "../../../store/User";
import {
  setSelectedCombos,
  setSelectedProducts,
} from "../../../store/User/Reducer";
import { useUpdateUserSelectedItems } from "../../../services/User/services";

function useCart() {
  const [user, dispatch] = useContext(UserContext);
  const { mutate: updateUserSelectedItems } = useUpdateUserSelectedItems();

  const { selectedItems: items, selectedCombo: combos } = user;

  const isAdded = (product, products) => {
    let addedProduct = products.find((p) => p._id === product._id);

    if (!addedProduct) return false;

    addedProduct.quantity += product.quantity;
    return true;
  };

  const handleUpdateItemQuantity = (id, quantity) => {
    const updatedItems = items.map((item) =>
      item._id === id ? { ...item, quantity } : item
    );

    dispatch(setSelectedProducts(updatedItems));
  };

  const handleUpdateComboQuantity = (id, quantity) => {
    const updatedCombos = combos.map((combo) =>
      combo._id === id ? { ...combo, quantity } : combo
    );

    dispatch(setSelectedCombos(updatedCombos));
  };

  const handleStoreCart = () => {
    const updatedSelectedProducts = items
      ? items.map((product) => ({
          productId: product._id,
          quantity: product.quantity,
        }))
      : [];

    const updatedSelectedCombos = combos
      ? combos.map((combo) => ({
          comboId: combo._id,
          quantity: combo.quantity,
        }))
      : [];

    updateUserSelectedItems({
      selectedProducts: updatedSelectedProducts,
      selectedCombos: updatedSelectedCombos,
    });
  };

  const handleAddCombo = (combo, quantity = 1) => {
    combo.inStock = combo.quantity
    combo.quantity = quantity;

    if (isAdded(combo, combos)) return;

    const newCombos = [...combos, combo];

    dispatch(setSelectedCombos(newCombos));
  };

  const handleAddItem = (item, quantity = 1) => {
    item.inStock = item.quantity
    item.quantity = quantity;

    if (isAdded(item, items)) return;

    const newItems = [...items, item];

    dispatch(setSelectedProducts(newItems));
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item._id !== id);

    dispatch(setSelectedProducts(newItems));
  };

  const handleRemoveCombo = (id) => {
    const newCombos = combos.filter((combo) => combo._id !== id);

    dispatch(setSelectedCombos(newCombos));
  };

  const getTotal = () => {
    const totalItems = items.reduce(
      (total, current) => total + current.price * current.quantity,
      0
    );
    const totalCombos = combos.reduce(
      (total, current) => total + current.priceAfterDiscount * current.quantity,
      0
    );

    return totalItems + totalCombos;
  };

  const total = getTotal();

  return {
    items,
    combos,
    total,
    handleAddItem,
    handleAddCombo,
    handleRemoveItem,
    handleRemoveCombo,
    handleUpdateItemQuantity,
    handleUpdateComboQuantity,
    handleStoreCart,
  };
}

export default useCart;
