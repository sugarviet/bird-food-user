import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../store/User";
import { setSelectedCombos, setSelectedProducts } from "../../../store/User/Reducer";
function useCart() {
  const [items, setItems] = useState([])
  const [combos, setCombos] = useState([])
  const [user, dispatch] = useContext(UserContext)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]));

    if(!user.username) return

    setItems(user.selectedItems)

    const formattedCombos =  user.selectedCombo.map(combo => ({...combo, productId: combo.comboId, productName: combo.comboName, price: combo.priceAfterDiscount}))

    setCombos(formattedCombos)

    localStorage.setItem("cart", JSON.stringify(items));
  }, [user]);

  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const removeFromCart = (productId) => {
    const updatedItems = items.filter((item) => item.productId !== productId);
    setItems(updatedItems);
    updateLocalStorage(updatedItems);
    dispatch(setSelectedProducts(updatedItems));
  };

  const removeComboFromCart = (comboId) => {
    const updatedCombos = combos.filter(combo => combo._id != comboId)
    dispatch(setSelectedCombos(updatedCombos))
  }

  const updateQuantity = (productId, quantity) => {
    const updatedItems = items.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );
    setItems(updatedItems);
    updateLocalStorage(updatedItems);
    dispatch(setSelectedProducts(updatedItems));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      if (!isNaN(item.price) && !isNaN(item.quantity)) {
        total += item.price * item.quantity;
      }
    });
    combos.forEach((item) => {
      if (!isNaN(item.price) && !isNaN(item.quantity)) {
        total += item.price * item.quantity;
      }
    });
    return total.toLocaleString();
  };

  return {
    items,
    combos,
    user,
    calculateTotalPrice,
    updateQuantity,
    removeFromCart,
    removeComboFromCart,
  };
}

export default useCart;
