import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../store/User";
import { setSelectedProducts } from "../../../store/User/Reducer";
function useCart() {
  const [items, setItems] = useState([
    JSON.parse(localStorage.getItem("cart")) || [],
  ]);
  const [user] = useContext(UserContext);
  const [, dispatch] = useContext(UserContext);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setItems(JSON.parse(localCart));
    }
  }, [user]);

  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const removeFromCart = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    updateLocalStorage(updatedItems);
    dispatch(setSelectedProducts(updatedItems));
  };

  const updateQuantity = (id, quantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity } : item
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
