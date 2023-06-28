import { useState, useEffect } from "react";

function useCart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setItems(JSON.parse(localCart));
    }
  }, []);

  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const removeFromCart = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const updateQuantity = (id, quantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setItems(updatedItems);
    updateLocalStorage(updatedItems);
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
