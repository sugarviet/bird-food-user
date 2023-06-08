import { useState } from "react";

function useCart(){
    const [items, setItems] = useState([
        { id: 1, name: "Product 1", price: 10.99, quantity: 1 },
        { id: 2, name: "Product 2", price: 19.99, quantity: 2 },
        { id: 3, name: "Product 3", price: 7.99, quantity: 3 },
      ]);
    
      const removeFromCart = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
      };
    
      const updateQuantity = (id, quantity) => {
        const updatedItems = items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        setItems(updatedItems);
      };
    
      const calculateTotalPrice = () => {
        let total = 0;
        items.forEach((item) => {
          if (!isNaN(item.price) && !isNaN(item.quantity)) {
            total += item.price * item.quantity;
          }
        });
        return total.toFixed(2);
      };

      return {
        items,
        calculateTotalPrice,
        updateQuantity,
        removeFromCart
      }
}

export default useCart;