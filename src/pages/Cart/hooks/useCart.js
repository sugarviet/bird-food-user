import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../store/User";
import { setSelectedProducts } from "../../../store/User/Reducer";
function useCart() {
  const [items, setItems] = useState([]);
  const [user] = useContext(UserContext)
  const [, dispatch] = useContext(UserContext);


  useEffect(() => {
    const cart = user.selectedItems
    console.log(cart)
    if (cart) {
      setItems(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setItems([]);
      localStorage.setItem("cart", JSON.stringify([]));
    }
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
    return total.toLocaleString();
  };

  return {
    items,
    calculateTotalPrice,
    updateQuantity,
    removeFromCart,
  };
}

export default useCart;
